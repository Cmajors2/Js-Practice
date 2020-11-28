
import * as flights from './Main2.0.js';

function displayFuelCapacity() {
    flights.aircrafts.forEach(function(element) {
        console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
    })
};

let displayStaffStatus = () => {
    flights.aircrafts.forEach(function(element) {
        
        console.log(`${element.name} meets staff requirements: ${flights.meetsStaffReqs(element.availableStaff, flights.flightReqs.requiredStaff)}`);
    })
};

function displaySpeedRangeStatus() {
    flights.aircrafts.forEach(function(element) {
        console.log(`${element.name} meets speed range requirements: ${flights.meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flights.flightReqs.requiredSpeedRange)}`);
    })
};

displaySpeedRangeStatus();

console.log(flights);