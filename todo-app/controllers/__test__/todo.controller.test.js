const todoController = require("../todo.controller")
const {describe, test, expect, afterAll} = require('@jest/globals')
const todoModel =require('../../models/todo.model')
const mockTodoArray = require("../../__mocks__/mockData")
const httpMocks = require('node-mocks-http')
jest.mock('../todo.controller')
jest.mock('../../models/todo.model.js')

const mockGetTodoFromDb = jest.spyOn(todoModel,"getAll")

describe('todo.controller', () => {
    test('getTodo should 200 return', async() => {
        const request = httpMocks.createRequest()
        const response = httpMocks.createResponse()
        const mockTodoList = jest.fn(async () => ({
            __esModule: true,
            todos: mockTodoArray}
        ))
        mockGetTodoFromDb.mockImplementation(mockTodoList)
        await todoController.getTodo(request,response)
        expect(mockGetTodoFromDb).toHaveBeenCalledTimes(1)
        // expect(response.todos).toBeDefined()
    })
    afterAll(() => {
        jest.clearAllMocks();
    })
})