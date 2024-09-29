import { describe, expect, test } from "vitest"
import { demo } from "../index"

describe("Test", () => {
  test("Demo Test", () => {
    expect(demo).toBeDefined()
    // expect(true).toBe(false)
    // expect(true).toBe(false)
  })
  test.todo("Write more tests!")
})
