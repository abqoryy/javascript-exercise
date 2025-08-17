function battery() {
    let batteryLevel = 50;     // starting battery level

    return {
        charge: () => {
            let chargeLevel = 10;
            batteryLevel += chargeLevel;
            console.log(`Charging... Battery now at ${batteryLevel}%`);
        },
        checkBattery: () => {
            console.log(`Battery now at ${batteryLevel}%`);
        }
    };
}

function camera(battery) {
    let photoEnergy = 1;
    let videoEnergy = 2;
    return {
        takePhoto: () => {
            battery.use(photoEnergy);
        },
        recordVideo: () => {
            battery.use(videoEnergy);
        },
    };
}

function apps() {
    let installedApps = [];
    return {
        install: (appName) => {
            console.log(`Installing ${appName}`);
            installedApps.push(appName);
        },
        listApps: () => {
            console.log(`Here is your Apps`, installedApps.join(', '));
        }
    };
}

function createSmartphone(name, model) {
    const phone = {
        name: name,
        model: model,
        battery: battery(),
        camera: camera(),
        apps: apps(),
    }

    return Object.assign(phone, battery(), camera(), apps());
}

const phone = createSmartphone(`Samsung`, `S25`);
phone.charge();