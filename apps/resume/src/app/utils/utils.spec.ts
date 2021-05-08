import { getAge } from './utils';

describe('Utils test', () => {
  let result:{
    years: number,
    months: number,
    days: number,
  };
  beforeEach(async () => {
    const dateStart = new Date(2000,1,1);
    const dateEnd = new Date(2021,3,3);
    result = getAge(dateStart , dateEnd);
  });
  it('test year ', () => {
    expect(result.years).toBe(21);
  })

  it('test month ', () => {
    expect(result.months).toBe(2);
  })

  it('test date ', () => {
    expect(result.months).toBe(2);
  })
});
