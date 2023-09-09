const { generateNotFinishedId, generateRandomIdFromDb } = require('../generateTestId')
describe('generateNotFinishedId', () => {
    test('should return number', async() => {
        const id = await generateNotFinishedId()
        expect(typeof id).toBe('number')
    })
})

describe('generateRandomIdFromDb', () => {
    test('should return number', async() => {
        const id = await generateRandomIdFromDb()
        expect(typeof id).toBe('number')
    })
})