const sum = require("./sum")

describe("example tests", () => {
  it("should adds 1 + 2 to equal 3", () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })

  it("object toBeDefined", () => {
    const obj = {}
    expect(obj).toBeDefined()
  })

  it("object toEqual {}", () => {
    const obj = {}
    expect(obj).toEqual({})
  })
})

describe("Truthy or Falsy", () => {
  it("null", () => {
    const n = null
    expect(n).toBeFalsy()
  })
})
