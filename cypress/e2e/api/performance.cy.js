describe('⚡ API Performance Tests - ServeRest', () => {
  const baseUrl = 'https://serverest.dev';

  it('GET /usuarios - Deve responder em menos de 500ms', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/usuarios`,
      timeout: 500,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(500);
    });
  });

  it('GET /produtos - Deve responder em menos de 300ms', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/produtos`,
      timeout: 300,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(300);
    });
  });
});
