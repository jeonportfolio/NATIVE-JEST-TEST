import { getMillisToDateString } from "./DateUtils"

describe('특정 millisecond를 받았을때', () => {
        test('해당하는 날짜의 문자열로 변경', () => {

            expect(getMillisToDateString(1732287600000)).toBe('2024-11-23')
        })

        test('10이하의 월, 10이하의 일수를 가진다면 0이 앞에 나온다', () => {
            expect(getMillisToDateString(1725202800000)).toBe('2024-09-02')
        })
})