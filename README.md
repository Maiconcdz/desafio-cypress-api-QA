# 🚀 Testes de API ServeRest com Cypress

Automação de testes de API para ServeRest utilizando Cypress com 8 cenários críticos.

## 🧪 Cenários Implementados

### 🔐 Autenticação (2 cenários)
- Login com credenciais válidas
- Login com credenciais inválidas

### 👥 Usuários (2 cenários)  
- Listar todos os usuários
- Buscar usuário com ID inválido

### 🛍️ Produtos (2 cenários)
- Listar todos os produtos
- Buscar produto com ID inexistente

### 🛒 Carrinhos (2 cenários)
- Listar todos os carrinhos
- Buscar carrinho com ID inválido

## 🛠️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar todos os testes de API
npm run test:api

# Executar testes específicos
npm run test:auth
npm run test:users  
npm run test:products
npm run test:carts

# Abrir interface do Cypress
npm run cy:open

# 🚀 Testes de API ServeRest com Cypress

![CI Status](https://github.com/Maiconcdz/desafio-cypress-api-QA/workflows/CI/badge.svg)
![Tests](https://img.shields.io/badge/tests-8%20passed%2F0%20failed-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-success)

## 🧪 8 Cenários de Teste - 100% Passando

### ✅ Resultados dos Últimos Testes:
- **🔐 Autenticação**: 2/2 passando
- **👥 Usuários**: 2/2 passando  
- **🛍️ Produtos**: 2/2 passando
- **🛒 Carrinhos**: 2/2 passando

## 🚀 CI/CD Automático
Os testes rodam automaticamente a cada push via GitHub Actions