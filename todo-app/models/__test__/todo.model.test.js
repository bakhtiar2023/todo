const generateTitle = require("../../business/generateTestTitle")
const {generateNotFinishedId, generateRandomIdFromDb} = require("../../business/generateTestId")
const { isDuplicate, isExist, getAll, create, update, drop } = require("../todo.model")

const testTitle = generateTitle()
const testCompleted = false
describe('todo.model', () => {

    test("getAll should return array", async() => {
        const data1 = {
            "id": 3,
            "title": "lorem",
            "completed": true,
            "createdAt": "2023-08-27T16:29:16.832Z",
            "updatedAt": "2023-08-27T17:28:14.496Z"
        }
        const rawData = await getAll()
        const stringData = JSON.stringify(rawData)
        const data = JSON.parse(stringData)
        expect(data[0]).toEqual(expect.objectContaining(data1))
    })

    test("isDuplicate should return false", async() => {
        const result = await isDuplicate('update ticket');
        expect(result).toBe(false)
    })
    
    test("isDuplicate should return true", async() => {
        const result = await isDuplicate('lorem');
        expect(result).toBe(true)
    })

    test("isExist should return false", async() => {
        const result = await isExist(100)
        expect(result).toBe(false)
    })

    test("isExist should return true", async() => {
        const result = await isExist(3)
        expect(result).toBe(true)
    })

    test("create should return true", async() => {
        const result = await create(testTitle, testCompleted)
        expect(result).toBe(true)
    })

    test("create should return false", async() => {
        const result = await create(testTitle)
        expect(result).toBe(false)
    })

    test("update should return true", async() => {
        const testId = await generateNotFinishedId()
        const result = await update(testId, true)
        expect(result).toBe(true)
    })

    test('update should return false', async() => {
        const testId = 3
        const result = await update(testId, null)
        expect(result).toBe(false)
    })

    test('drop should return true', async() => {
        const testId = await generateRandomIdFromDb()
        const result = await drop(testId)
        expect(result).toBe(true)
    })

    test('drop should return false', async() => {
        const result = await drop(undefined)
        expect(result).toBe(false)
    })
})