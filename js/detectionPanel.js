export function refreshDetectionPanel(activeMapUnits, flyToUnit) {
    const panel = document.getElementById('detection-panel');
    if (!panel) return;
    panel.innerHTML = '';

    activeMapUnits.forEach(sensor => {
        if (!sensor.detectedTargets || sensor.detectedTargets.length === 0) return;

        const sensorDiv = document.createElement('div');
        const sensorName = document.createElement('span');
        sensorName.textContent = sensor.unitData.name;
        sensorName.className = 'cursor-pointer underline text-blue-400';
        sensorName.addEventListener('click', () => flyToUnit(sensor.instanceId));
        sensorDiv.appendChild(sensorName);

        const list = document.createElement('ul');
        sensor.detectedTargets.forEach(dt => {
            const targetUnit = activeMapUnits.get(dt.instanceId);
            if (!targetUnit) return;
            const li = document.createElement('li');
            const targetName = document.createElement('span');
            targetName.textContent = targetUnit.unitData.name;
            targetName.className = 'cursor-pointer underline text-red-400';
            targetName.addEventListener('click', () => flyToUnit(dt.instanceId));
            li.appendChild(targetName);
            li.appendChild(document.createTextNode(` - ${dt.classification}`));
            list.appendChild(li);
        });

        sensorDiv.appendChild(list);
        panel.appendChild(sensorDiv);
    });
}
