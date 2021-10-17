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

describe("numbers", () => {
  it("two plust two", () => {
    const value = 2 + 2
    expect(value).toBeGreaterThanOrEqual(3)
    expect(value).toBeGreaterThan(-3)
    expect(value).toBeLessThan(32)
  })

  it("adding floats", () => {
    const value = 0.1 + 0.2
    expect(value).toBeCloseTo(0.299)
  })
})

describe("strings", () => {
  it("there is no d in team", () => {
    expect("team").not.toMatch(/d/)
  })

  it("there is t in team", () => {
    expect("team").toMatch(/t/)
  })
})

describe("arrays", () => {
  const shoppingList = ["cookies", "milk", "bananas", "cheese"]
  it("shoppingList contains milk", () => {
    expect(shoppingList).toContain("milk")
  })
})

function comileAndroidCode() {
  throw new Error("You are using the wrong Android version")
}

describe("exceptions", () => {
  it("comiling Android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow()
  })

  it("comiling Android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow(Error)
  })

  // not working with string but should work!!!
  //   it("comiling", () => {
  //     expect(() => compileAndroidCode()).toThrow(
  //       "You are using the wrong Android version"
  //     )
  //   })
})
