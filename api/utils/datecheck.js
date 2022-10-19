const timeRange = {
    MIN_DAY: 1,
    MAX_DAY: 31,
    MIN_MONTH: 1,
    MAX_MONTH: 12,
    MIN_YEAR: 1000,
    MAX_YEAR: 3000,
};
const isValidDateFormat = (date = {}) => {
    let day = 0;
    let month = 0;
    let year = 0;
    try {
        var digitOnly = /^[0-9]+$/;
        if (digitOnly.test(date?.day)) {
            day = Number.parseInt(date?.day);
        } else throw "Input data for Day is incorrect format!";
        if (digitOnly.test(date?.month)) {
            month = Number.parseInt(date?.month);
        } else throw "Input data for Month is incorrect format!";
        if (digitOnly.test(date?.year)) {
            year = Number.parseInt(date?.year);
        } else throw "Input data for Year is incorrect format!";

        return {
            day,
            month,
            year,
        };
    } catch (err) {
        throw err;
    }
};
const isValidDateRange = (day = 0, month = 0, year = 0) => {
    try {
        if (day < timeRange.MIN_DAY || day > timeRange.MAX_DAY) {
            throw "Input data for Day is out of range";
        } else if (
            month < timeRange?.MIN_MONTH ||
            month > timeRange?.MAX_MONTH
        ) {
            throw "Input data for Month is out of range";
        } else if (year < timeRange.MIN_YEAR || year > timeRange.MAX_YEAR) {
            throw "Input data for Year is out of range";
        }
        return true;
    } catch (err) {
        throw err;
    }
};
const isLeapYear = (year = 0) => {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) return true;
    return false;
};
const dayInMonth = (month = 0, year = 0) => {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
            day = 31;
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11: {
            day = 30;
            break;
        }
        case 2: {
            if (isLeapYear(year)) {
                day = 29;
            } else day = 28;
            break;
        }
        default:
            break;
    }
    return day;
};

const isValidDate = (rawDate = {}) => {
    try {
        const date = isValidDateFormat(rawDate);
        const rangeCheck = isValidDateRange(date.day, date.month, date.year);
        if (rangeCheck) {
            if (
                dayInMonth(date.month, date.year) &&
                dayInMonth(date.month, date.year) >= date.day
            ) {
                return {
                    status: true,
                    message: `${date.day}/${date.month}/${date.year} is correct date time!`,
                };
            } else {
                return {
                    status: false,
                    message: `${date.day}/${date.month}/${date.year} is NOT correct date time!`,
                };
            }
        }
    } catch (err) {
        throw err;
    }
};
module.exports = { isValidDateFormat, dayInMonth, isValidDate };