describe('Single-Page-App', () => {
 beforeEach(() => {
  cy.visit('http://localhost:3000/pizza')
 })
 it('sanity check', () => {
  expect(1+1).to.equal(2)
 })
// Test UNO //

describe("Getting Customer name and filling it out", () => {

  it('can type in the customerName input', () => {
    const customer = cy.get('input[name=customerName')
    customer.type('Coltons ZZA').should('have.value', 'Coltons ZZA')
  })
})
// Test DOS//

describe("Getting dropdown and, selecting the size", () => {

  it('can select the size', () => {
    const dropdown = cy.get(`[id='size-dropdown']`)
      .select('extra-small')
      .select('small')
      .select('medium')
      .select('large').should('have.value', 'large')
  })
})

// Test TRES //

describe("Getting add-ons and checking values", () => {

  it('can check the add-on boxes', () => {
    const checkboxes = cy.get('input[type="checkbox"]').check()
  })
})

//Test CUATRO //

describe('Can fill out special instructions', () => {

  it('can type in special instructions', () => {
    const instructions = cy.get(`[id='special-text']`)
    instructions.type('boneless').should('have.value', 'boneless')
  })
})

// Test CINCO //

describe('Getting the submit button and clicking it', () => {

  it('can submit', () => {
    const submit = cy.get('button[id="order-button"]').click()
  })
})


















})
