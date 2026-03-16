class DigitalClock {
    constructor(timezone) {
        this.timezone = timezone;
        this.formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: this.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }

    start() {
        this.update();
        setInterval(() => this.update(), 1000);
    }

    update() {
        const date = new Date();
        const formattedTime = this.formatter.format(date);
        console.log(`Current time in ${this.timezone}: ${formattedTime}`);
    }
}

// Example usage:
const clock = new DigitalClock('America/New_York');
clock.start();

const clockLA = new DigitalClock('America/Los_Angeles');
clockLA.start();

const clockLondon = new DigitalClock('Europe/London');
clockLondon.start();