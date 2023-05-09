describe("should not leak", () => {
  const iterations = 300;
  for (let i = 0; i < iterations; i++) {
    test("does it?", async () => {
      await fetch("http://localhost:58080");
    });
  }
});
