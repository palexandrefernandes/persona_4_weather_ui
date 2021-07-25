const dates = require('../src/utils/dates');
const MockDate = require('mockdate');

test('if number of returned dates is the expected', () => {
    const dateList1 = dates.createDateList(5, 10); // With today its 16
    const dateList2 = dates.createDateList(50, 10); // 61
    const dateListNegative = dates.createDateList(-1, 1); // 2
    const dateListToday = dates.createDateList(0, 0); // 1

    expect(dateList1).toHaveLength(16);
    expect(dateList2).toHaveLength(61);
    expect(dateListNegative).toHaveLength(2);
    expect(dateListToday).toHaveLength(1);
});

test('if today is well positioned', () => {
    const today = new Date();
    const dateList = dates.createDateList(5, 5);
    expect(dateList[5].getDate()).toBe(today.getDate());
});

const expectedDateList = [
    new Date(1627073458431),
    new Date(1627159858431),
    new Date(1627246258431),
    new Date(1627332658431),
    new Date(1627419058431),
];

test('if dates are well positioned', () => {
    MockDate.set(1627246258431);
    const dateList = dates.createDateList(2, 2);
    expect(dateList.toString()).toBe(expectedDateList.toString());
    MockDate.reset();
});


test('if dates are well positioned', () => {
    MockDate.set(1627246258431);
    const date = new Date();
    const convertedWeekDay = dates.convertWeekDayToString(date.getDay());
    expect(convertedWeekDay).toBe('SUN');
    MockDate.reset();
});