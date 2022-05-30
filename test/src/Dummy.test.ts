import { dummyOutput } from '../../src/Dummy'

describe("Dummy Test", () => {

    it("should return 2 as a prime factor of 2", () => {
        const dummyOutputReturned = dummyOutput(2)
        expect(dummyOutputReturned).toEqual([2])
    })

    it("should return 3 as a prime factor of 3", () => {
        const dummyOutputReturned = dummyOutput(3)
        expect(dummyOutputReturned).toEqual([3])
    })
})