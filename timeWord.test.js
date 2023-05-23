const {timeWord} = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('test midnight', () => {
    expect(timeWord('00:00')).toEqual('midnight')
  });

  test('test noon', () => {
    expect(timeWord('12:00')).toEqual("noon")
  });

  test('test morning times', () => {
    expect(timeWord('00:30')).toEqual("twelve thirty am")
    expect(timeWord('01:00')).toEqual("one o'clock am")
    expect(timeWord('02:05')).toEqual("two oh five am")
    expect(timeWord('03:10')).toEqual("three ten am")
    expect(timeWord('04:15')).toEqual("four fifteen am")
    expect(timeWord('05:20')).toEqual("five twenty am")
    expect(timeWord('06:25')).toEqual("six twenty five am")
  });

  test('test afternoon times', () => {
    expect(timeWord('14:35')).toEqual("two thirty five pm")
    expect(timeWord('15:40')).toEqual("three forty pm")
    expect(timeWord('16:45')).toEqual("four forty five pm")
    expect(timeWord('17:50')).toEqual("five fifty pm")
    expect(timeWord('18:55')).toEqual("six fifty five pm")
  });

  test('fails for invalid time', () => {
    expect(timeWord('24:35')).toEqual("Submitted time is out of range")
    expect(timeWord('15:60')).toEqual("Submitted time is out of range")
    expect(timeWord('-16:45')).toEqual("Submitted time is out of range")
    expect(timeWord('16:-45')).toEqual("Submitted time is out of range")
    expect(timeWord('*16:45')).toEqual("Invalid time format")
    expect(timeWord('16:*45')).toEqual("Invalid time format")
    expect(timeWord('1:045')).toEqual("Invalid time format")
    expect(timeWord('@1:45')).toEqual("Invalid character in time")
    expect(timeWord('08:%5')).toEqual("Invalid character in time")
  });
});