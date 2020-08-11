let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe("  countAllPaarl function ", function () {

  it("should return  for 'CJ 123-223'", function () {
   assert.equal(1,countAllPaarl("CJ123-223"))
  })
});
