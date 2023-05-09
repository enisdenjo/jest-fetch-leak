describe("should not leak", () => {
  for (let i = 0; i < process.env.ITERATIONS; i++) {
    test("does it?", async () => {
      await fetch("http://localhost:58080");
    });
  }
});
