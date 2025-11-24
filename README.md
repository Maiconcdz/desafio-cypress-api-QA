🚀 Testes de API ServeRest com Cypress
https://github.com/Maiconcdz/desafio-cypress-api-QA/workflows/CI/badge.svg
https://img.shields.io/badge/tests-10%2520passed%252F0%2520failed-brightgreen
https://img.shields.io/badge/coverage-100%2525-success
https://img.shields.io/badge/status-production%2520ready-brightgreen

Automação completa de testes de API para ServeRest utilizando Cypress com 10 cenários e CI/CD integrado.

📈 Resultados dos Testes
✅ Status Atual: 100% Sucesso
Total de Testes: 10

Testes Passando: 10 (100%)

Tempo de Execução: ~1 segundo

CI/CD: ✅ Funcionando

Última Execução: 🟢 Sucesso

🧪 Cobertura de Testes
Funcionalidade	Testes	Status	Descrição
🔐 Autenticação	2	✅	Login válido e inválido
👥 Usuários	2	✅	Listar todos e buscar ID inválido
🛍️ Produtos	2	✅	Listar todos e buscar ID inexistente
🛒 Carrinhos	2	✅	Listar todos e buscar ID inválido
⚡ Performance	2	✅	Tempo de resposta dos endpoints
🚀 Como Executar
📋 Pré-requisitos
Node.js 18 ou superior

npm ou yarn

Git

🛠️ Instalação
bash
# Clonar repositório
git clone https://github.com/Maiconcdz/desafio-cypress-api-QA.git
cd desafio-cypress-api-QA

# Instalar dependências
npm install
🧪 Execução dos Testes
Desenvolvimento (Interface Visual)
bash
npm run cy:open  # Abre a interface do Cypress
Linha de Comando
bash
# Todos os testes (modo headless)
npm run test:api

# Todos os testes com browser visível
npm run test:api:headed

# Testes específicos no Chrome
npm run test:api:chrome

# Testes de performance
npm run test:performance
Testes Específicos por Funcionalidade
bash
# Testes de autenticação
npx cypress run --spec "cypress/e2e/api/authentication.cy.js"

# Testes de usuários
npx cypress run --spec "cypress/e2e/api/users.cy.js"

# Testes de produtos
npx cypress run --spec "cypress/e2e/api/products.cy.js"

# Testes de carrinhos
npx cypress run --spec "cypress/e2e/api/carts.cy.js"
📁 Estrutura do Projeto
text
desafio-cypress-api-QA/
├── .github/workflows/
│   └── ci.yml                    # CI/CD com GitHub Actions
├── cypress/
│   ├── e2e/api/
│   │   ├── authentication.cy.js  # 🔐 2 testes de autenticação
│   │   ├── users.cy.js          # 👥 2 testes de usuários
│   │   ├── products.cy.js       # 🛍️ 2 testes de produtos
│   │   ├── carts.cy.js          # 🛒 2 testes de carrinhos
│   │   └── performance.cy.js    # ⚡ 2 testes de performance
│   ├── support/
│   │   ├── e2e.js
│   │   └── commands.js          # Comandos customizados
│   └── fixtures/
├── cypress.config.js            # Configuração do Cypress
├── package.json                 # Dependências e scripts
└── README.md                    # Documentação
🧪 Cenários de Teste Implementados
🔐 Autenticação
POST /login - Login com credenciais válidas

Status 200

Token de autorização

Mensagem de sucesso

POST /login - Login com credenciais inválidas

Status 401

Mensagem de erro apropriada

👥 Usuários
GET /usuarios - Listar todos os usuários

Status 200

Estrutura correta do response

Lista contém usuários

GET /usuarios/{id} - Buscar usuário com ID inválido

Status 400

Mensagem de formato inválido

🛍️ Produtos
GET /produtos - Listar todos os produtos

Status 200

Estrutura correta do response

Lista contém produtos

GET /produtos/{id} - Buscar produto com ID inexistente

Status 400

Mensagem de formato inválido

🛒 Carrinhos
GET /carrinhos - Listar todos os carrinhos

Status 200

Estrutura correta do response

Validação de carrinhos existentes

GET /carrinhos/{id} - Buscar carrinho com ID inválido

Status 400

Mensagem de formato inválido

⚡ Performance
GET /usuarios - Resposta em menos de 500ms

GET /produtos - Resposta em menos de 300ms

🔧 CI/CD - GitHub Actions
O projeto possui integração contínua configurada:

✅ O que o CI faz:
Executa automaticamente a cada push ou pull request

Roda todos os 10 testes na nuvem

Gera relatórios detalhados

Badge de status automático no README

📊 Monitoramento:
Status do CI: https://github.com/Maiconcdz/desafio-cypress-api-QA/actions

Última execução: Verifique o badge no topo deste README

🛠️ Tecnologias Utilizadas
Cypress 13.17.0 - Framework de automação

JavaScript ES6+ - Linguagem de programação

GitHub Actions - CI/CD e automação

Chrome/Electron - Browsers para execução

📊 Scripts Disponíveis
json
{
  "scripts": {
    "test:api": "npx cypress run --spec \"cypress/e2e/api/**/*\"",
    "test:api:headed": "npx cypress run --spec \"cypress/e2e/api/**/*\" --headed",
    "test:api:chrome": "npx cypress run --spec \"cypress/e2e/api/**/*\" --browser chrome",
    "test:performance": "npx cypress run --spec \"cypress/e2e/api/performance.cy.js\"",
    "cy:open": "cypress open",
    "cy:verify": "cypress verify"
  }
}
🐛 Solução de Problemas
Erros Comuns:
bash
# Cypress não encontrado
npx cypress verify

# Dependências corrompidas
rm -rf node_modules package-lock.json
npm install

# Erro de permissão (Linux/Mac)
npx cypress install
Configuração do Ambiente:
Verifique se a API está online: https://serverest.dev/

Certifique-se de estar usando Node.js 18+

📞 Suporte
Repositório: https://github.com/Maiconcdz/desafio-cypress-api-QA

Issues: Abra uma issue no GitHub para reportar problemas

CI/CD: https://github.com/Maiconcdz/desafio-cypress-api-QA/actions

👨‍💻 Desenvolvido por
Maicon
Quality Assurance Engineer
📧 testeMaicon@gmail.com
🔗 https://github.com/Maiconcdz

🎯 Status do Projeto: ✅ 100% Funcional e Pronto para Produção

📅 Última Atualização: Novembro 2025
🔖 Versão: 1.0.0
🚀 Status CI/CD: 🟢 Verde - Todos os testes passando