describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(200);
  });

  it("the nav menu is displayed when the resources button is clicked", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-panel").should("be.visible");
    });
  });

  it("The Free Books link goes to the /subscribe page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-link").its(0).contains("Free Books").click();
    });

    cy.location("pathname").should("equal", "/subscribe");

    cy.wait(200);

    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-panel").should("be.visible");
    });
  });

  it("The Articles link goes to the /posts page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-link").its(1).contains("Articles").click();
    });

    cy.location("pathname").should("equal", "/posts");

    cy.wait(200);

    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-panel").should("be.visible");
    });
  });

  it("The Courses link goes to the /courses page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-link").its(2).contains("Courses").click();
    });

    cy.location("pathname").should("equal", "/courses");

    cy.wait(200);

    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-panel").should("be.visible");
    });
  });

  it("The Tutorials link goes to the /tutorials page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-link").its(3).contains("Tutorials").click();
    });

    cy.location("pathname").should("equal", "/tutorials");

    cy.wait(200);

    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-panel").should("be.visible");
    });
  });

  it("The Search link goes to the /search page", () => {
    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-link").its(4).contains("Search").click();
    });

    cy.location("pathname").should("equal", "/search");

    cy.wait(200);

    cy.getBySel("navigation").within(() => {
      cy.getBySel("open-nav-button").click();

      cy.getBySel("nav-menu-panel").should("be.visible");
    });
  });
});