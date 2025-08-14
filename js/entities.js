// --- UNIT DATA LIBRARY ---
let unitLibrary = {
    // --- Red Force ---
    'pacific-taskforce-hq': {
        name: 'Pacific Taskforce HQ',
        shortName: 'Red HQ',
        force: 'red',
        category: 'land',
        classification: 'land',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/208/208379.png',
        rangeRings: []
    },
    'sa-12-sabot': {
        name: 'SA-12 Sabot',
        shortName: 'SA-12',
        force: 'red',
        category: 'weapons',
        classification: 'cruise-missile',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/7165/7165074.png',
        ammo: 8,
        movable: true,
        speedKph: 50,
        c4Dependent: true,
        reloadTimeHours: 6,
        weaponSpeedMach: 1,
        rangeRings: [
            { type: 'sensor', rangeNm: 300, name: 'Sensor (Non-Manoeuvring)', targetClass: 'non-manoeuvring' },
            { type: 'sensor', rangeNm: 140, name: 'Sensor (Fighter)',       targetClass: 'fighter' },
            { type: 'sensor', rangeNm: 60,  name: 'Sensor (Cruise Missile)', targetClass: 'cruise-missile' },
            { type: 'sensor', rangeNm: 20,  name: 'Sensor (Hypersonic)',     targetClass: 'hypersonic' },
            { type: 'weapon', rangeNm: 100, name: 'Weapon Range' }
        ],
        jammingEffects: {
            'ea-30g': { // Jammed by EA-30G Flowler
                degradedRings: [
                    { type: 'sensor', rangeNm: 150, name: 'Sensor (Non-Manoeuvring)', targetClass: 'non-manoeuvring' },
                    { type: 'sensor', rangeNm: 50,  name: 'Sensor (Fighter)',       targetClass: 'fighter' },
                    { type: 'sensor', rangeNm: 30,  name: 'Sensor (Cruise Missile)', targetClass: 'cruise-missile' },
                    { type: 'sensor', rangeNm: 20,  name: 'Sensor (Hypersonic)',     targetClass: 'hypersonic' },
                    { type: 'weapon', rangeNm: 100, name: 'Weapon Range' }
                ]
            }
        }
    },
    'coastal-defence-missile': {
        name: '111 Reg / 12 Battalion',
        shortName: '111/12 ASCM',
        force: 'red',
        category: 'weapons',
        classification: 'cruise-missile',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2369/2369415.png',
        description: '111 Reg / 12 Battalion',
        ammo: 14,
        movable: true,
        speedKph: 40,
        c4Dependent: true,
        reloadTimeHours: 6,
        weaponSpeedMach: 0.8,
        rangeRings: [
            { type: 'sensor', rangeNm: 350, name: 'Sensor Range' },
            { type: 'weapon', rangeNm: 350, name: 'Weapon Range' }
        ]
    },
    'space-isr-red': {
        name: '176th Collection and Dissemination Bureau',
        shortName: '176th CDB',
        force: 'red',
        category: 'space',
        classification: 'space',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/8868/8868507.png',
        rangeRings: []
    },

    // --- Blue Force ---
    'blue-hq': {
        name: 'Bunnings Shed Joint HQ',
        shortName: 'Blue HQ',
        force: 'blue',
        category: 'land',
        classification: 'land',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/208/208379.png',
        rangeRings: []
    },
    'mort-ddg': {
        name: 'HMAS Yass Mort Class DDG',
        shortName: 'DDG',
        force: 'blue',
        category: 'maritime',
        platformType: 'maritime',
        classification: 'non-manoeuvring',
        iconUrl: 'https://cdn-icons-png.flaticon.com/256/15455/15455562.png',
        movable: true,
        speedKph: 37, // 20 kts
        hardpoints: 8,
        mountableWeapons: ['throwing-axe'],
        rangeRings: [
            { type: 'movement', rangeNm: 3000, name: 'Travel Radius' }
        ]
    },
    'ea-30g': {
        name: 'EA-30G Flowler',
        shortName: 'EA-30G',
        force: 'blue',
        category: 'air',
        platformType: 'air',
        classification: 'fighter',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/15631/15631307.png',
        hardpoints: 0, // Assuming no weapons, just jammer
        role: 'Electronic Attack',
        jammerId: 'alq-77',
        eaRangeNm: 400,
        speedKph: 988, // Mach 0.8
        rangeRings: [
            { type: 'ea', rangeNm: 400, name: 'Jamming Radius' },
            { type: 'movement', rangeNm: 1000, name: 'Max Range' }
        ]
    },
    'f-55': {
        name: 'F-55 Flogger',
        shortName: 'F-55',
        force: 'blue',
        category: 'air',
        platformType: 'air',
        classification: 'fighter',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2089/2089910.png',
        hardpoints: 6,
        speedKph: 988, // Mach 0.8
        rangeRings: [
            { type: 'sensor', rangeNm: 100, name: 'Sensor (Large AC)' },
            { type: 'sensor', rangeNm: 50, name: 'Sensor (Fighter)' },
            { type: 'movement', rangeNm: 1100, name: 'Max Range (External)'},
            { type: 'movement', rangeNm: 800, name: 'Max Range (Internal)'},
        ]
    },
    'e-17a': {
        name: 'E-17A Wedge-Snail',
        shortName: 'Wedge-Snail',
        force: 'blue',
        category: 'air',
        platformType: 'air',
        classification: 'non-manoeuvring',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/7893/7893970.png',
        speedKph: 617, // Mach 0.5
        hardpoints: 0,
        rangeRings: [
            { type: 'sensor', rangeNm: 150, name: 'Surveillance Radar' },
            { type: 'movement', rangeNm: 2000, name: 'Max Range' }
        ]
    },
    'sf-76': {
        name: '76th SF',
        shortName: '76th SF',
        force: 'blue',
        category: 'land',
        classification: 'land',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/9924/9924283.png',
        rangeRings: [
            { type: 'weapon', rangeNm: 150, name: 'Land Strike' },
            { type: 'ea',     rangeNm: 5,   name: 'Acca Dacca EA' }
        ]
    },
    'mgm-666': {
        name: 'MGM-666 Long Pole',
        shortName: 'Long Pole',
        force: 'blue',
        category: 'weapons',
        classification: 'hypersonic',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2369/2369415.png',
        ammo: 4, // Assumed
        rangeRings: [
            { type: 'weapon', rangeNm: 1000, name: 'Land Strike' }
        ]
    },
    'counter-air': {
        name: 'Counter Air Weapons',
        shortName: 'CAW',
        force: 'blue',
        category: 'weapons',
        platform: 'aircraft',
        classification: 'cruise-missile',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/7165/7165074.png',
        ammo: 1,
        rangeRings: [ { type: 'weapon', rangeNm: 20, name: 'Weapon Range' } ]
    },
    'throwing-axe': {
        name: 'RGM-209 Throwing Axe',
        shortName: 'RGM-209',
        force: 'blue',
        category: 'weapons',
        platform: 'ship',
        classification: 'cruise-missile',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/7165/7165074.png',
        ammo: 1,
        weaponSpeedMach: 0.8,
        rangeRings: [ { type: 'weapon', rangeNm: 325, name: 'Weapon Range' } ]
    },
    'agm-258-lcrm': {
        name: 'AGM-258 Long Range Cruise Missile (LCRM)',
        shortName: 'AGM-258',
        force: 'blue',
        category: 'weapons',
        platform: 'aircraft',
        classification: 'cruise-missile',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/7165/7165074.png',
        ammo: 1,
        weaponSpeedMach: 0.8,
        rangeRings: [ { type: 'weapon', rangeNm: 100, name: 'Weapon Range' } ]
    },
    'aam': {
        name: 'Air-to-Air missiles',
        shortName: 'AAM',
        force: 'blue',
        category: 'weapons',
        platform: 'aircraft',
        classification: 'cruise-missile',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/7165/7165074.png',
        ammo: 1,
        rangeRings: [] // Range would depend on the specific missile
    }
};

export { unitLibrary };
