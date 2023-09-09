const generateRandInt = require('../generateRandInt')

describe('getRandomInt', () => {
    test('should return number', () => {
        const number = generateRandInt()
        expect(typeof number).toBe('number')
    })
})