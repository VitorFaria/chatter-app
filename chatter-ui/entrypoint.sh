#!/bin/sh

set -e

echo "📦 Verificando dependências..."

yarn install --silent

echo "✅ Dependências sincronizadas."

echo "🚀 Iniciando aplicação..."

exec "$@"