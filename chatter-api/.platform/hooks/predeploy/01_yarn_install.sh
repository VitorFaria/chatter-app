#!/bin/bash
set -e

# Entra na pasta temporaria onde a aplicacao fica antes de subir
cd /var/app/staging

echo "==> Ativando o Corepack para utilizar o Yarn..."
corepack enable

echo "==> Instalando dependencias de producao com Yarn..."
yarn install --production --frozen-lockfile