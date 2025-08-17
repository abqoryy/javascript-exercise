class Smartphones {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    getDetails() {
        return `Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}`;
    }
}

class Android extends Smartphones {
    #price = 15000;
    constructor(brand, model, color, features) {
        super(brand, model, color);
        this.features = features;
    }   
    

    getDetails() {
        return `${super.getDetails()}, Features: ${this.features.join(',')}`;
    }
}

class Ios extends Smartphones {
    constructor(brand, model, color, features) {
        super(brand, model, color);
        this.features = features;
    }   

    getDetails() {
        return `${super.getDetails()}, Features: ${this.features.join(',')}`;
    }
}


const phone1 = new Android(`Samsung`, `S25`, `White`, [`Split Screen`, `Fingerprint Scanner`, `Waterproof up to 10m`]);
const phone2 = new Ios(`Ipad`, `Air M4`, `Gray Night`, [`Airdrop`, `Facescanner`, `Mini LED 4K Display`]);

console.log(phone1.getDetails(), phone2.getDetails());