const getSleepHours = (day) => {
    if (day === 'monday'){
        return 8
    } else if (day === 'tuesday'){
        return 8
    } else if (day === 'wednesday'){
        return 8
    } else if (day === 'thursday'){
        return 8
    } else if (day === 'friday'){
        return 9
    } else if (day === 'saturday'){
        return 8
    } else if (day === 'sunday'){
        return 8
    }
}

const getActualSleepHours = () => {
    let sumHours = 0
    sumHours += getSleepHours('monday')
    sumHours += getSleepHours('tuesday')
    sumHours += getSleepHours('wednesday')
    sumHours += getSleepHours('thursday')
    sumHours += getSleepHours('friday')
    sumHours += getSleepHours('saturday')
    sumHours += getSleepHours('sunday')
    return sumHours
}

const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours){
        console.log('You got the perfect amount of sleep.')
    } else if (actualSleepHours > idealSleepHours){
        oversleptHours = actualSleepHours - idealSleepHours
        console.log('You got ' + oversleptHours + ' hour(s) of sleep than needed.')
    } else if (actualSleepHours < idealSleepHours){
        sleepDebtHours = idealSleepHours - actualSleepHours
        console.log('You should get rest, your sleep debt is '+ sleepDebtHours +' hour(s).')
    }
}

calculateSleepDebt()