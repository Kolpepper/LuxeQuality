describe('website testing telnyx.com ', () => {

  it('#1 test button "sing up"', () => {
    cy.visit('https://telnyx.com/');
    cy.get('[class$="UnEoi itIjRb"]').click();
  });

  it('#2 test button "sing up"', () => {
    cy.visit('https://telnyx.com/');
    cy.viewport(2560, 1440);
    cy.get('li [class$="hBNXWZ mchNoDecorate sign-up-link"]').click();
    cy.url().should('eq', 'https://telnyx.com/sign-up');
  });

  it('#3 test button "Talk to an expert"', () => {
    cy.visit('https://telnyx.com/');
    cy.viewport(2560, 1440);
    cy.get('[class$="byuCMl"] [class$="mchNoDecorate"] ').click();
    cy.url().should('eq', 'https://telnyx.com/contact-us');
  });

  it('#4 test Button "Explore our products"', () => {
    cy.visit('https://telnyx.com/')
    cy.viewport(2560, 1440)
    cy.get('a[class$="hBNXWZ mchNoDecorate"]').scrollIntoView().click();
    cy.url().should('eq', 'https://telnyx.com/products');
  });

  it('#5 test logo URL ', () => {
    cy.visit('https://telnyx.com/sign-up')
    cy.viewport(2560, 1440)
    cy.get('#Logo-Dark_svg__Layer_1').click();
    cy.url().should('eq', 'https://telnyx.com/');
  });

  it('#6 test Button "Try for free" ', () => {
    cy.visit('https://telnyx.com/')
    cy.viewport(2560, 1440)
    cy.get('[type="email"]').should('have.value', '').type('test@gmail.com');
    cy.get('[class="sc-5d3a275a-2 krPznm"]').click();
    cy.url().should('eq', 'https://telnyx.com/sign-up?email=test@gmail.com');
    cy.get('#email').should('have.value', 'test@gmail.com');
  });

  it('#7 test Button "Start you free trail"', () => {
    cy.visit('https://telnyx.com/')
    cy.viewport(2560, 1440)
    cy.get('[class$="m mchNoDecorate sign-up-link"]').scrollIntoView().click();
    cy.url().should('eq', 'https://telnyx.com/sign-up');
    cy.get('#email').should('have.value', '').type('test@gmail.com').should('have.value', 'test@gmail.com');
    cy.get('#full_name').should('have.value', '').type('test').should('have.value', 'test');
    cy.get('#password').should('have.value', '').type('test123');
    cy.screenshot('Test 7 screen');
  });

  it('#8 test Menu bar in phone size', () => {
    cy.visit('https://telnyx.com/')
    cy.viewport('iphone-xr')
    cy.get('[role="button"]').click();
    cy.get('[class="sc-6ef4e600-12 hCNcWq"]').eq(0).click();
    cy.get('[class="sc-6ef4e600-12 hCNcWq"]').eq(8).click();
    cy.url().should('eq', 'https://telnyx.com/products');
  });

  it('#9 Checking for  h2 elements', () => {
    cy.visit('https://telnyx.com/')
    cy.viewport(2560, 1440)
    cy.get('[class="sc-9ba6bac9-0 dzvaHj"]').find('h2').should('exist');

  });

  it('#10 test Button "Try for free" ', () => {
    cy.visit('https://telnyx.com/')
    cy.viewport(2560, 1440)
    cy.contains('Network').click();
    cy.url().should('eq', 'https://telnyx.com/solutions/global-ip-network');
    cy.contains('Try Our Network').click();
    cy.url().should('eq', 'https://telnyx.com/sign-up');
  });


})


