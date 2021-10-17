let animals = []

beforeAll(() => {
  console.log("beforeAll")
  animals = ["elephant", "tiger", "bear", "zebra"]
})

beforeEach(() => {
  console.log("beforeEach")
  animals = ["elephant", "tiger", "bear", "zebra"]
})

// afterEach test
afterEach(() => {
  console.log("afterEach")
  animals = ["elephant", "tiger", "bear", "zebra"]
})

afterAll(() => {
  console.log("afterAll")
  animals = ["elephant", "tiger", "bear", "zebra"]
})

describe("Animals array", () => {
  it("should add animals to end of array", () => {
    animals.push("aligator")
    expect(animals[animals.length - 1]).toBe("aligator")
  })

  it("should add animals to beginning of array", () => {
    animals.unshift("monkey")
    expect(animals[0]).toBe("monkey")
  })

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4)
  })
})
