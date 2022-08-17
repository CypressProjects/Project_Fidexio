/// <reference types='Cypress' />

class loginPage {
  loginFidexio() {
    const fidexio = require("../../../../fixtures/fidexioConf.json");
    cy.visit(fidexio.url, { failOnStatusCode: true });

    cy.get("#login").type(fidexio.email);
    cy.get("#password").type(fidexio.password);
    cy.get(".btn").click();
  }
  selectMenu(value) {
    cy.wait(1000);
    switch (value) {
      case "Discuss":
        cy.get(".active > .oe_menu_leaf > .oe_menu_text").click();
        break;
      case "Calender":
        cy.get(
          ".navbar-left > :nth-child(2) > .oe_menu_leaf > .oe_menu_text"
        ).click({ force: true });
        break;
      case "Notes":
        cy.get(
          ".navbar-left > :nth-child(3) > .oe_menu_leaf > .oe_menu_text"
        ).click({ force: true });
        break;
      default:
        cy.contains(value, { matchCase: false }).click({ force: true });
    }
  }

  verifySelectedMenu(menuOption) {
    switch (menuOption) {
      case "Discuss":
        cy.title().should("contain", "Inbox");
        break;
      case "Calendar":
        cy.title().should("contain", "Meetings");
        break;
      case "Notes":
        cy.title().should("contain", "Notes");
        break;
      case "Contacs":
        cy.title().should("contain", "Contacs");
        break;
      case "CRM":
        cy.title().should("contain", "Pipeline");
        break;
      case "Sales":
        cy.title().should("contain", "Quotations");
        break;
      case "Website":
        cy.title().should("contain", "Dashboard");
        break;
      case "Point of Sale":
        cy.title().should("contain", "Point of Sale");
        break;
      case "Purchases":
        cy.title().should("contain", "Requests for Quotation");
        break;
      case "Inventory":
        cy.title().should("contain", "Inventory");
        break;
      case "Manufacturing":
        cy.title().should("contain", "Manufacturing Orders");
        break;
      case "Repairs":
        cy.title().should("contain", "Repair Orders");
        break;
      case "Surveys":
        cy.title().should("contain", "Surveys");
        break;
      case "Employees":
        cy.title().should("contain", "Employees");
        break;
      case "Attendances":
        cy.title().should("contain", "Attendance");
        break;
      case "Expenses":
        cy.title().should("contain", "My Expenses to Submit");
        break;
      case "Fleet":
        cy.title().should("contain", "Vehicles");
        break;
    }
  }
}

export default loginPage;
