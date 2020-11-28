function getSleepHours(day) {
    day = day.toLowerCase();
        if (day === 'monday') {
            return 8;
        }else if (day === 'tuesday') {
            return 7.5;
        }else if (day === 'wednesday'){
            return 7;
        }else if (day === 'thursday'){
            return 7.2;
        }else if (day === 'friday'){
            return 8;
        }else {
            return 8.5
        }

}

const getActualSleepHours = () => {
    const sumOfSleep = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday')
    + getSleepHours('saturday') + getSleepHours('sunday');
    return sumOfSleep;
}

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}


const calculateSleepDebt = () => {
     actualSleepHours = getActualSleepHours();
     idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours){
        return console.log("Your sleep was ideal!");
    }else if (actualSleepHours > idealSleepHours){
        return console.log('You got more than your ideal sleep');
    }else {
        return console.log('You need more sleep');
    }
}

calculateSleepDebt();




