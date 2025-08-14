const NM_TO_METERS = 1852;
const classificationPriority = { unknown: 0, suspect: 1, confirmed: 2 };

function getRingClassification(name) {
  const match = name.match(/\(([^)]+)\)/);
  const raw = (match ? match[1] : name).trim().toLowerCase();
  const mapping = {
    'lrg ac': 'large ac',
    'unk': 'unknown',
    'unknown': 'unknown',
    'sus': 'suspect',
    'suspect': 'suspect',
    'conf': 'confirmed',
    'confirmed': 'confirmed'
  };
  const classification = mapping[raw] || raw;
  return classificationPriority[classification] !== undefined ? classification : 'unknown';
}

function haversine(p1, p2) {
  const R = 6371000; // metres
  const toRad = deg => deg * Math.PI / 180;
  const dLat = toRad(p2.lat - p1.lat);
  const dLon = toRad(p2.lng - p1.lng);
  const lat1 = toRad(p1.lat);
  const lat2 = toRad(p2.lat);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

self.onmessage = function(e) {
  const { sensors = [], units = [] } = e.data;
  const sensorResults = [];
  const targetMap = new Map();

  sensors.forEach(sensor => {
    const sensorRings = (sensor.effectiveRangeRings || [])
      .filter(r => r.type === 'sensor')
      .sort((a,b) => a.rangeNm - b.rangeNm);
    const detectedTargets = [];

    units.forEach(target => {
      if (target.force === sensor.force) return;
      const distance = haversine(sensor.position, target.position);
      const ring = sensorRings.find(r => distance <= r.rangeNm * NM_TO_METERS);
      if (ring) {
        const classification = getRingClassification(ring.name);
        detectedTargets.push({ instanceId: target.instanceId, classification });

        const existing = targetMap.get(target.instanceId) || [];
        existing.push({ instanceId: sensor.instanceId, classification });
        targetMap.set(target.instanceId, existing);
      }
    });

    sensorResults.push({ instanceId: sensor.instanceId, detectedTargets });
  });

  const targetResults = [];
  targetMap.forEach((detectedBy, instanceId) => {
    targetResults.push({ instanceId, detectedBy });
  });

  self.postMessage({ type: 'detectionResults', sensors: sensorResults, targets: targetResults });
};
