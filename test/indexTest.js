const fs = require("file-system");
const jsdom = require("mocha-jsdom");
const path = require("path");
const babel = require("babel-core");

const js = fs.readFileSync(path.resolve(__dirname, "..", "index.js"), "utf-8");

//describe is a function provided by test library Mocha
describe("index.js", function () {
  //the first argument of describe is the programmer's own words. should be descriptive to help your testing purpose
  describe("companyName", function () {
    it("is set as Scuber", function () {
      //again, first argument for the programmer's understanding
      expect(companyName).to.equal("Scuber");
    });

    it("is defined as a const", function () {
      expect(js).to.match(
        /const companyName/,
        "Expected companyName to be a const"
      );
    });
  });

  describe("mostProfitableNeighborhood", function () {
    it("is declared as equal to Chelsea", function () {
      expect(mostProfitableNeighborhood).to.equal("Chelsea");
    });

    it("does not raise error if the mostProfitableNeighborhood is changed", function () {
      expect(function () {
        mostProfitableNeighborhood = "Upper West Side";
      }).to.not.throw(TypeError);
    });

    it("is not defined as a const", function () {
      expect(js).not.to.match(
        /const mostProfitableNeighborhood/,
        "Expected mostProfitableNeighborhood not to be a const"
      );
    });
  });

  describe("companyCeo", function () {
    it("is declared as equal to Susan Smith", function () {
      expect(companyCeo).to.equal("Susan Smith");
    });

    it("does not raise error if the companyCeo is changed", function () {
      expect(function () {
        companyCeo = "Lauren Hart";
      }).to.not.throw(TypeError);
    });

    it("is not defined as a const", function () {
      expect(js).not.to.match(
        /const companyCeo/,
        "Expected companyCeo not to be a const"
      );
    });
  });
});
