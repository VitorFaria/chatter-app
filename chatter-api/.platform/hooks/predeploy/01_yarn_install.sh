#!/bin/bash
set -e

# Entra na pasta temporaria de staging do Beanstalk
cd /var/app/staging

echo "==> Módulos de produção pré-instalados via CodeBuild detectados."
echo "==> Pulando yarn install no servidor para preservar as dependências de runtime."