const generateTitle = require("../generateTestTitle")

describe('generateTestTitle', () => {
    test('should return string', () => {
        const string = generateTitle()
        expect(string).toEqual(expect.stringContaining(string))
    })
})