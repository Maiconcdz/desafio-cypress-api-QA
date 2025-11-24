// Comando para login com validação automática
Cypress.Commands.add('loginAPI', (email, password) => {
  return cy.request({
    method: 'POST',
    url: '/login',
    body: { email, password },
    failOnStatusCode: false
  })
})

// Comando para validar estrutura de usuário
Cypress.Commands.add('validateUserStructure', (user) => {
  expect(user).to.have.property('nome')
  expect(user).to.have.property('email')
  expect(user).to.have.property('password')
  expect(user).to.have.property('administrador')
  expect(user).to.have.property('_id')
})

// Comando para validar estrutura de produto
Cypress.Commands.add('validateProductStructure', (product) => {
  expect(product).to.have.property('nome')
  expect(product).to.have.property('preco')
  expect(product).to.have.property('descricao')
  expect(product).to.have.property('quantidade')
  expect(product).to.have.property('_id')
})