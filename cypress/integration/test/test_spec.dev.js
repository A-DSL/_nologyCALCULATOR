"use strict";

describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true);
  });
});
describe('The Main Page', function () {
  it('successfully loads', function () {
    cy.visit('http://127.0.0.1:5500/index.html');
  });
});
describe('Basic Operations', function () {
  it("Should check 5+4 equals 9", function () {
    // Arrange; visit the live hosted website
    cy.visit("http://127.0.0.1:5500/index.html"); // Act; simulate interactions with HTML events

    cy.get(".five").click();
    cy.get(".plus").click();
    cy.get(".four").click();
    cy.get(".equals").click(); // Assert; check the function works as expected

    cy.get(".calculator__topdisplay").should("have.html", "9");
  });
  it("Should check 7-3 equals 4", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".seven").click();
    cy.get(".minus").click();
    cy.get(".three").click();
    cy.get(".equals").click(); // Assert

    cy.get(".calculator__topdisplay").should("have.html", "4");
  });
  it("Should check 11*20 equals 220", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".one").click();
    cy.get(".one").click();
    cy.get(".multiply").click();
    cy.get(".two").click();
    cy.get(".zero").click();
    cy.get(".equals").click(); // Assert

    cy.get(".calculator__topdisplay").should("have.html", "220");
  });
  it("Should check 120/3 equals 40", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".one").click();
    cy.get(".two").click();
    cy.get(".zero").click();
    cy.get(".divide").click();
    cy.get(".three").click();
    cy.get(".equals").click(); // Assert

    cy.get(".calculator__topdisplay").should("have.html", "40");
  });
});
describe('Percentage, decimal, positive/negative', function () {
  it("Should check 0.5*0.5 equals 0.25", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".decimal").click();
    cy.get(".five").click();
    cy.get(".multiply").click();
    cy.get(".decimal").click();
    cy.get(".five").click();
    cy.get(".equals").click(); // Assert

    cy.get(".calculator__topdisplay").should("have.html", "0.25");
  });
  it("Should check 1% x 5 equals 0.05", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".one").click();
    cy.get(".percent").click();
    cy.get(".multiply").click();
    cy.get(".five").click();
    cy.get(".equals").click(); // Assert

    cy.get(".calculator__topdisplay").should("have.html", "0.05");
  });
  it("Should check -5 * 3 equals -15", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".five").click();
    cy.get(".posneg").click();
    cy.get(".multiply").click();
    cy.get(".three").click();
    cy.get(".equals").click(); // Assert

    cy.get(".calculator__topdisplay").should("have.html", "-15");
  });
  it("Should check 5 * 3 equals 15", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".five").click();
    cy.get(".posneg").click();
    cy.get(".posneg").click();
    cy.get(".multiply").click();
    cy.get(".three").click();
    cy.get(".equals").click(); // Assert

    cy.get(".calculator__topdisplay").should("have.html", "15");
  });
  it("Should check -5 * -3 equals 15", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act; check that posneg resets upon display switch

    cy.get(".five").click();
    cy.get(".posneg").click();
    cy.get(".multiply").click();
    cy.get(".three").click();
    cy.get(".posneg").click();
    cy.get(".equals").click(); // Assert

    cy.get(".calculator__topdisplay").should("have.html", "15");
  });
});
describe('Multiple Operations', function () {
  it("Should check 120/3 + 5 equals 45", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".one").click();
    cy.get(".two").click();
    cy.get(".zero").click();
    cy.get(".divide").click();
    cy.get(".three").click();
    cy.get(".equals").click();
    cy.get(".plus").click();
    cy.get(".five").click();
    cy.get(".equals").click(); // Assert

    cy.get(".calculator__topdisplay").should("have.html", "45");
  });
  it("Should check %1+5 * 3.2 equals 16.032", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".one").click();
    cy.get(".percent").click();
    cy.get(".plus").click();
    cy.get(".five").click();
    cy.get(".equals").click();
    cy.get(".multiply").click();
    cy.get(".three").click();
    cy.get(".decimal").click();
    cy.get(".two").click();
    cy.get(".equals").click(); // Assert

    cy.get(".calculator__topdisplay").should("have.html", "16.032");
  });
});
describe('AC/C Button', function () {
  it("Should show AC as C after a button press that isn't AC/C", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".one").click(); // Assert

    cy.get(".AC").should("have.html", "C");
  });
  it("Should show AC as C after a button press + operator", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".one").click();
    cy.get(".plus").click(); // Assert

    cy.get(".AC").should("have.html", "C");
  });
  it("Should show AC as C after a completed operation", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".one").click();
    cy.get(".plus").click();
    cy.get(".one").click();
    cy.get(".equals").click(); // Assert

    cy.get(".AC").should("have.html", "C");
  });
  it("Should show AC as AC after pressing it as C, and set display to 0", function () {
    // Arrange
    cy.visit("http://127.0.0.1:5500/index.html"); // Act

    cy.get(".one").click();
    cy.get(".plus").click();
    cy.get(".one").click();
    cy.get(".equals").click();
    cy.get(".AC").click(); // Assert

    cy.get(".AC").should("have.html", "AC");
    cy.get(".calculator__topdisplay").should("have.html", "0");
  });
});