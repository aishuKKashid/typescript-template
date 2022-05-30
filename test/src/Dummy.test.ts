import { dummyOutput } from '../../src/Dummy'

describe("Dummy Test", () => {
    // it("should assert on the dummy output", () => {
    //     const dummyOutputReturned = dummyOutput("hello")
    //     expect(dummyOutputReturned).toBe("hellohello")
    // })

    it("should return prime factors of number 1 as [1]", () => {
        const dummyOutputReturned = dummyOutput(1)
        expect(dummyOutputReturned).toEqual([1])
    })
})