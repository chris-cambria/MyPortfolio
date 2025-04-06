
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const projects = {
    "Environmental monitoring with warning system | Arduino and DHT 11 Sensor": "This project monitors temperature and humidity using DHT11 sensor, displaying real-time data. LED warnings indicate high/low temperature thresholds.",
    "Mini windmill to light LEDs | Dynamo generator and windmill": "This project uses wind energy to generate electricity to light the LEDs using a dynamo generator.",
    "ColourChaser - HW 531 Sensor | Arduino and RGB LED": "This project uses a color sensor to detect the frequency of a color and sends the data to an Arduino for processing.",
    "Home Automation System | Arduino Uno": "This project automates common household
