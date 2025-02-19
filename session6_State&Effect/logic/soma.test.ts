import soma from "./logic"

test("Deve somar dois números", () => {
    expect(soma(2,3)).toBe(5)
})