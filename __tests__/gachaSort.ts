import gachaSort from '../index'

describe("Gacha Sort", () => {
    it("should sort asynchronously", async () => {
        let sorted = await gachaSort([2,1,3])

        expect(sorted).toEqual([1,2,3])
    })
})