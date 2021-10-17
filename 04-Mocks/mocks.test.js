const axios = require("axios")

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  )
  return results.data
}

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i])
  }
}
describe("example tests", () => {
  it("to make calls", () => {
    const mockCallback = jest.fn((x) => 42 + x)

    forEach([0, 1], mockCallback)

    expect(mockCallback.mock.calls.length).toBe(2)
  })

  it("call to be", () => {
    const mockCallback = jest.fn((x) => 42 + x)

    forEach([0, 1], mockCallback)

    expect(mockCallback.mock.calls[0][0]).toBe(0)
  })

  it("result to be", () => {
    const mockCallback = jest.fn((x) => 42 + x)

    forEach([0, 1], mockCallback)

    expect(mockCallback.mock.results[0].value).toBe(42)
  })
})

describe("mock", () => {
  const mock = jest.fn()

  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("Hello")

  const result = mock()
  const result2 = mock()
  const result3 = mock()

  it("mock return value to be true", () => {
    expect(result).toBe(true)
  })
  it("mock return value to be false", () => {
    expect(result2).toBe(false)
  })
  it("mock return value to be Hello", () => {
    expect(result3).toBe("Hello")
  })
})

describe("axios", () => {
  it("mock axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
      data: {
        id: "1",
        todo: "Get 1 billion $",
      },
    })
    const result = await fetchData(1)
    expect(result.todo).toBe("Get 1 billion $")
  })
})
