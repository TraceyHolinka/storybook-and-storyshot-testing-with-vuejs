import { apDate } from '@/filters'

describe('filter/index.js', () => {
  test('Convert date to friendly format', () => {
    expect(apDate('2018-03-09T19:28:23Z')).toEqual('March 9, 2018')
  })
})
