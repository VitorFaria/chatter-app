#!/bin/sh

set -e

echo "📦 Sincronizando dependências..."
yarn install --silent

echo "⏳ Aguardando MongoDB..."

until nc -z db 27017; do
  sleep 1
done

echo "✅ MongoDB disponível."

echo ""
echo "🚀 Iniciando NestJS..."
echo ""

exec "$@"