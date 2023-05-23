function timeWord(time) {
    const timeKey = {
         0: 'twelve',
         1: 'one',
         2: 'two',
         3: 'three',
         4: 'four',
         5: 'five',
         6: 'six',
         7: 'seven',
         8: 'eight',
         9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
    }
    const tensKey = {
        0: 'oh',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty'
    }
    const exceptionKey = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }
    const accVals = [':', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const hrs = parseInt(time.split(':')[0])
    const mins = time.split(':')[1]

    // Check time is in correct range
    if (hrs < 0 || hrs > 23) { return 'Submitted time is out of range' }
    if (mins < 0 || mins > 59) { return 'Submitted time is out of range' }
    // Check time has valid format 
    if (time.length != 5) { return 'Invalid time format' }
    if (time.indexOf(':') != 2) { return 'Invalid time format' }
    // Check there are no invalid characters submitted
    const badChar = time.split('').map( char => { if (accVals.indexOf(char) == -1) { return true } })
    if (badChar.indexOf(true) != -1) { return 'Invalid character in time' }

    // Check for midnight
    if (hrs === 0 && mins === '00') { return 'midnight' }
    // Check for noon
    if (hrs === 12 && mins === '00') { return 'noon' }

    let str = '';
    let timeStr;
    let timeFrame;

    // Convert to 12 hr time and set am/pm
    hrs <= 12 ? (timeStr = str.concat(timeKey[hrs]), timeFrame = 'am')  : 
                (timeStr = str.concat(timeKey[hrs-12]), timeFrame = 'pm')
    // Return time if mins = 00
    if (mins === '00') { return timeStr.concat(" o'clock ", timeFrame) }
    // Return time if mins is in exceptionKey
    if (mins[0] == 1) { return timeStr.concat(' ', exceptionKey[mins]).concat(' ', timeFrame) }
    // Concat mins string if not in exceptionKey
    mins[1] == 0 ? (timeStr = timeStr.concat(' ', tensKey[mins[0]])) : 
                   (timeStr = timeStr.concat(' ', tensKey[mins[0]]).concat(' ', timeKey[mins[1]]))

    return timeStr.concat(' ', timeFrame)
}

module.exports = { timeWord }