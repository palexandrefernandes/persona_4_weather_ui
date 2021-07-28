/**
 * Creates a list with dates before and after today (included).
 * @param {number} beforeToday Number of day before today.
 * @param {number} afterToday Number of days after today.
 * @returns {Array<Date>} dates before and after today (included).
 */
const createDateList = (beforeToday, afterToday) => {
    const normalizedBeforeToday = Math.max(beforeToday, 0);
    const normalizedAfterToday = Math.max(afterToday, 0);
    const today = new Date();
    return [
        ...generateListOfDates(today, normalizedBeforeToday, -1).reverse(),
        today,
        ...generateListOfDates(today, normalizedAfterToday, 1)
    ];
};

/**
 * Creates a list of dates from a given starting point.
 * @param {Date} startPoint Starting date.
 * @param {number} count Number of items to add to list.
 * @param {number} temporalUnit Singed unit for before or after
 * @returns {Array<Date>} a list of dates from a given starting point.
 */
const generateListOfDates = (startPoint, count, temporalUnit) => {
    const normalizedUnit = Math.sign(temporalUnit);
    return Array(count).fill(undefined).map((_, index) => {
        const timeToAdd = (3600 * 24 * 1000 * normalizedUnit * (index + 1));
        return new Date(startPoint.getTime() + timeToAdd);
    });
};

/**
 * Creates a new date days after the provided date.
 * @param {Date} date The base date to add days.
 * @param {number} addDays Number of days to add.
 * @returns {Date} A date "daysAfter" the provided date.
 */
const skipDaysFromDate = (date, addDays) => {
    const normalizedAddDays = Math.floor(addDays);
    return new Date(date.getTime() + 3600 * 24 * 1000 * normalizedAddDays);
};

const WEEK_DAY_TABLE = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT'
};

/**
 * Converts a date week day to a string.
 * @param {number} weekDay 
 * @returns {string} a date week day to a string.
 */
const convertWeekDayToString = weekDay => WEEK_DAY_TABLE[weekDay];

module.exports = {
    createDateList,
    convertWeekDayToString,
    skipDaysFromDate
};
