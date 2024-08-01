describe("Testing of the Leya Book Website", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("https://www.leyaonline.com/pt/", { timeout: 120000 });
  });

  it("Scenario #1: Search for George, Verify that 'O Triunfo dos Porcos' is displayed and confirm the description contains 'Quinta Manor'", () => {
    cy.get(".search-bar").type("George" + "{enter}");
    cy.contains("o triunfo dos porcos", {
      matchCase: false,
    }).should("be.visible");
    cy.get(".similar-books")
      .contains("o triunfo dos porcos", { matchCase: false })
      .click(); // can be applied the same as above for case insensitive
    cy.get(".show-more-button").eq(0).click();
    cy.get(".margin-bottom-2").should("include.text", "Quinta Manor");
  });

  it("Scenario #2: Search for book '1984', check if author is 'George Orwell', confirm ISBN number is '9789722071550', check if number of pages is '344', ensure that dimensions of the book are '235 x 157 x 23 mm'", () => {
    cy.get(".search-bar").type("1984" + "{enter}");
    cy.get(".book-card-container").contains("1984").click();
    cy.get(".nome_autor").contains("George Orwell", {
      matchCase: false,
    });
    cy.get("._sinpose-address ul").within(() => {
      cy.contains("li", "ISBN: 9789722071550").should("be.visible");
      cy.contains("li", "Páginas: 344").should("be.visible");
      cy.contains("li", "Dimensões: 235 x 157 x 23 mm").should("be.visible");
    });
  });

  it("Scenario #3: Search for the book '1984', Verify that 'Quinta dos Animais is by the same author'", () => {
    cy.get(".search-bar").type("1984" + "{enter}");
    cy.get(".book-card-container").contains("1984").eq(0).click();
    cy.get(".similar-books").eq(0).find(".vermais").click({ multiple: true });
    cy.get(".similar-books")
      .contains("a quinta dos animais", { matchCase: false })
      .should("be.visible")
      .parent()
      .contains("george orwell", { matchCase: false })
      .should("be.visible");
  });

  it("Scenario #4: Search for the book '1984', Add the book to the basket, Confirm that the number of items in the basket is '1'", () => {
    cy.get(".search-bar").type("1984" + "{enter}");
    cy.get(".book-card-container")
      .contains("1984")
      .parent()
      .find(".more.buy-button")
      .click();
    cy.get(".header-content")
      .find("#dropdownMenuButton100")
      .should("have.attr", "data-tag", "1")
      .and("be.visible");
    cy.get("#atc-dropdown.dropdown-menu.dropdown-menu-right.show")
      .find(".checkout-btn")
      .click();
    cy.get(".product-details-content")
      .should("be.visible")
      .find('input[name="qtd"]')
      .should("have.value", "1");
  });

  it("Scenario #5: Change the background to dark mode, Check if dark mode was successfully applied to the website", () => {
    cy.get(".header-content").within(() => {
      cy.get("#darkmode").click();
      cy.get(".nav-icon.icon-moon").should("be.visible");
    });
    cy.get("body#main")
      .should("have.css", "color", "rgb(251, 243, 229)")
      .and("have.css", "background-color", "rgb(30, 31, 30)");
    cy.get("header").should("have.css", "background-color", "rgb(36, 38, 37)");
  });

  it("Scenario #6: Click on the login button, Insert test account details (test email: testuseremail@gmail.com, password: 123123123), click login and confirm it was successfull", () => {
    cy.get(".header-content").find(".icon-login.nav-icon").click();
    cy.get(".login-info-form").within(() => {
      cy.get("#login-email").type("testuseremail@gmail.com");
      cy.get("#login-pass").type("123123123");
      cy.get("button.login-btn").click({ force: true });
    });
    cy.get(".header-content")
      .find("#dropdownMenuLink20", { timeout: 12000 })
      .should("be.visible")
      .and("have.attr", "data-tag", "testuser");
  });

  it("Scenario #7: Add an highlights book to cart, go to cart and remove the book, go to FAQ page and click on 'Registo', Click on logo at the top left of the page", () => {
    cy.get(".destaca").find(".more.buy-button").click();
    cy.get("#atc-dropdown.dropdown-menu.dropdown-menu-right.show")
      .find(".b-delete")
      .click();
    cy.get("footer").contains("Perguntas Frequentes").click();
    cy.get(".faqs").contains("Registo").click();
    cy.wait(2000);
    cy.get(".text.hide").should("be.visible");
    cy.get("header")
      .find(".header-logo.header-logo-big.align-self-end")
      .click({ multiple: true });
  });
});
