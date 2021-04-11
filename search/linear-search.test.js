const {linearSearch, recLinearSearch} = require("./linear-search");

describe('Normal Linear search', () => {
    test('Should return true if has in list', () => {
        const list = [0, 1, 2, 3, 4]
        expect(linearSearch(list, 1)).toBe(true)
    })

    test('Should return false if dont has in list', () => {
        const list = [0, 1, 2, 3, 4]
        expect(linearSearch(list, 10)).toBe(false)
    })
})

describe('Recursive Linear search', () => {
    test('Should return index if has in list', () => {
        const list = [0, 1, 2, 3, 4]
        expect(recLinearSearch(list, 0, list.length -1, 2)).toBe(2)
    })

    test('Should return -1 if dont have in list', () => {
        const list = [0, 1, 2, 3, 4]
        expect(recLinearSearch(list, 0, list.length -1, 10)).toBe(-1)
    })
})
