// bike racing game engine and logic

class BikeRacer {
    constructor(name) {
        this.name = name;
        this.speed = 0;
        this.position = 0;
    }

    accelerate(increment) {
        this.speed += increment;
    }

    brake(decrement) {
        this.speed = Math.max(0, this.speed - decrement);
    }

    move() {
        this.position += this.speed;
    }
}

class Race {
    constructor(distance) {
        this.distance = distance;
        this.racers = [];
    }

    addRacer(racer) {
        this.racers.push(racer);
    }

    startRace() {
        while (!this.isRaceOver()) {
            for (let racer of this.racers) {
                racer.move();
            }
            console.log(this.getPositions());
        }
        console.log(this.getWinner());
    }

    isRaceOver() {
        return this.racers.some(racer => racer.position >= this.distance);
    }

    getPositions() {
        return this.racers.map(racer => `${racer.name}: ${racer.position} m`);
    }

    getWinner() {
        const winner = this.racers.reduce((prev, current) => (prev.position > current.position) ? prev : current);
        return `${winner.name} wins the race!`;
    }
}

// Example Usage
const race = new Race(100);
const racer1 = new BikeRacer('Racer 1');
const racer2 = new BikeRacer('Racer 2');

race.addRacer(racer1);
race.addRacer(racer2);

// Simulation
racer1.accelerate(5);
racer2.accelerate(4);

race.startRace();