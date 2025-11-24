🚀 Testes de API ServeRest com Cypress
https://github.com/Maiconcdz/desafio-cypress-api-QA/workflows/CI/badge.svg
https://img.shields.io/badge/tests-10%2520passed%252F0%2520failed-brightgreen
https://img.shields.io/badge/coverage-100%2525-success

Automação completa de testes de API para ServeRest com Cypress.

📊 Status
Testes: 10/10 passando (100%)

Cobertura: 100%

CI/CD: ✅ Funcionando

Tempo de Execução: ~1 segundo

🧪 Funcionalidades Testadas
Área	Testes	Status
🔐 Autenticação	2	✅
👥 Usuários	2	✅
🛍️ Produtos	2	✅
🛒 Carrinhos	2	✅
⚡ Performance	2	✅
🚀 Como Usar
Pré-requisitos
Node.js 18+

npm ou yarn

Git

Instalação
bash
git clone https://github.com/Maiconcdz/desafio-cypress-api-QA.git
cd desafio-cypress-api-QA
npm install
Executar Testes
bash
# Interface visual
npm run cy:open

# Todos os testes (terminal)
npm run test:api

# Testes com browser visível
npm run test:api:headed

# Testes de performance
npm run test:performance
📁 Estrutura
text
cypress/e2e/api/
├── authentication.cy.js  # 🔐 Autenticação
├── users.cy.js          # 👥 Usuários
├── products.cy.js       # 🛍️ Produtos
├── carts.cy.js          # 🛒 Carrinhos
└── performance.cy.js    # ⚡ Performance
🔧 CI/CD
Execução automática a cada push/PR

10 testes na nuvem

Badge de status automático

🛠️ Tecnologias
Cypress 13.17.0

JavaScript ES6+

GitHub Actions

Desenvolvido por Maicon
📧 testeMaicon@gmail.com
🔗 https://github.com/Maiconcdz

Status: ✅ 100% Funcional