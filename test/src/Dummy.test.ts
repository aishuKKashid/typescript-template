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

    it("should return 2 and 3 as prime factors of 6", () => {
        const dummyOutputReturned = dummyOutput(6)
        expect(dummyOutputReturned).toEqual([2,3])
    })
    it("should return 5 and 3 as prime factors of 15", () => {
        const dummyOutputReturned = dummyOutput(15)
        expect(dummyOutputReturned).toEqual([3, 5])
    })

    it("should return 2, 3 and 5 as prime factors of 30", () => {
        const dummyOutputReturned = dummyOutput(30)
        expect(dummyOutputReturned).toEqual([2,3,5])
    })

    it("check whether the given number is prime number or not", () => {
        const dummyOutputReturned = dummyOutput(11)
        expect(dummyOutputReturned).toEqual([11])
    })

    it("should return 2, 3 and 5 as prime factors of 12456", () => {
        const dummyOutputReturned = dummyOutput(12456)
        expect(dummyOutputReturned).toEqual([2,2, 2,3, 3, 173])
    })

    it("should return [] as prime factors of 0", () => {
        const dummyOutputReturned = dummyOutput(0)
        expect(dummyOutputReturned).toEqual([])
    })

    it("should return [] as prime factors of negative number", () => {
        const dummyOutputReturned = dummyOutput(-6)
        expect(dummyOutputReturned).toEqual([])
    })

})