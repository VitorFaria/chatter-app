#!/bin/bash
set -e

# Entra na pasta temporaria onde a aplicacao fica antes de subir
cd /var/app/staging

echo "==> Instalando Corepack para gerenciar o Yarn..."
npm install -g corepack

echo "==> Habilitando Corepack..."
corepack enable

echo "==> Executando yarn install de producao..."
yarn install --frozen-lockfile