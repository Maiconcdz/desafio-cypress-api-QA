Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Info($m){ Write-Host "[INFO] $m" -ForegroundColor Cyan }
function Warn($m){ Write-Host "[WARN] $m" -ForegroundColor Yellow }
function Err($m){ Write-Host "[ERROR] $m" -ForegroundColor Red }

# checar ambiente
Info("Verificando Node/NPM...")
try {
  node -v | Out-Null
  npm -v | Out-Null
} catch {
  Err("Node.js / npm nao encontrado no PATH. Instale antes de prosseguir.")
  exit 1
}

# listar specs
Info("Arquivos de spec (cypress/e2e/api):")
Get-ChildItem -Path .\cypress\e2e\api -Recurse -Filter *.js | ForEach-Object {
  "{0} ({1} bytes)" -f $_.FullName, $_.Length
}

# checar cypress.env.json
if (Test-Path .\cypress.env.json) {
  Info("cypress.env.json encontrado:")
  Get-Content .\cypress.env.json -Raw | ConvertFrom-Json | ConvertTo-Json -Depth 3
} else {
  Warn("cypress.env.json nao encontrado - tests usarao valores padrao do codigo.")
}

# formatar
Info("Executando prettier (format)...")
try {
  npm run format
} catch {
  Warn("format falhou. Continue se quiser, ou corrija arquivos manualmente.")
}

# lint (tenta auto-fix)
Info("Executando eslint (lint) - aplicando --fix se possivel...")
try {
  npx eslint "cypress/**/*.{js,ts,cy.js,cy.ts}" --ext .js,.ts --fix
  npm run lint
} catch {
  Warn("Lint reportou problemas. Rode npx eslint 'cypress/**/*.{js,ts}' --ext .js,.ts para detalhes.")
}

# rodar testes rapidos (local)
Info("Rodando testes (headless)...")
try {
  npm run test
} catch {
  Warn("Alguns testes podem falhar - verifique logs acima.")
}

# gerar relatorio completo (limpa -> run reporter -> merge -> generate)
Info("Gerando relatorio completo (report:full)...")
try {
  npm run report:full
} catch {
  Err("Falha ao gerar relatorio (report:full). Confira saida acima.")
  exit 1
}

# validar combined.json
$combined = ".\mochawesome-report\combined.json"
if (Test-Path $combined) {
  try {
    Get-Content $combined -Raw | ConvertFrom-Json | Out-Null
    Info("combined.json valido.")
  } catch {
    Warn("combined.json invalido. Tente recriar com: npm run merge:reports")
  }
} else {
  Warn("combined.json nao encontrado em mochawesome-report.")
}

# abrir relatorio
$reportHtml = ".\mochawesome-report\report.html"
if (Test-Path $reportHtml) {
  Info("Abrindo relatorio: $reportHtml")
  Start-Process -FilePath $reportHtml
} else {
  Warn("report.html nao encontrado. Verifique mochawesome-report/.")
}

Info("Concluido.")