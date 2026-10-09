Chatter App
A real-time chat application built to demonstrate and reinforce concepts in full-stack web development using NestJS, GraphQL, React, and MongoDB.

Users can create public chat rooms, view messages, and interact in real time via WebSockets.

🛠️ Stack & Technologies
Language: TypeScript 5.1.3

Backend: NestJS 10.0.0, GraphQL 16.11.0, graphql-subscriptions 3.0.0

Frontend: React 19.1.0

Database: MongoDB 6.17.0

Storage: AWS SDK Client-S3 (@aws-sdk/client-s3 3.1141.0)

Containerization: Docker & Docker Compose

✨ Features
Users
Sign up, login, and logout.

Profile photo upload integrated with Amazon S3.

Chats
Create public chat rooms accessible to logged-in users.

Messages
Real-time messaging powered by WebSockets / GraphQL Subscriptions.

📐 Architecture Overview
Backend (chatter-api)
Controllers: Handle HTTP endpoints, validate input, and delegate requests to services when direct REST routes are required.

Services: Encapsulate core business logic and manage data access.

Resolvers: Connect client GraphQL queries, mutations, and subscriptions to underlying services and MongoDB.

Frontend Client
Components: Reusable UI components and page layouts.

Constants: Static values, configurations, and shared display text.

GQL: Centralized GraphQL operation files (queries, mutations, subscriptions).

Fragments: Reusable GraphQL entity field sets integrated with custom hooks.

Hooks: Encapsulate GraphQL operations, API calls, and local UI logic.

Utils: Shared helper functions and utility routines.

🌐 Endpoints
Authentication
POST /api/auth/login — Authenticate user

POST /api/auth/logout — End user session

Users
POST /api/users/image — Upload user profile avatar to Amazon S3

Chats & Messages
GET /api/chats/count — Retrieve total count of available chats

GET /api/messages/count/:chatId — Retrieve total message count for a specific chat room

🚀 Getting Started
Prerequisites
Docker

Docker Compose

Installation
Clone the repository:

Bash
git clone https://github.com/VitorFaria/chatter-app.git
Navigate to the root directory:

Bash
cd chatter-app
Set up environment variables:

Bash
cp .env.example .env
Start the application with Docker:

Bash
docker compose up -d
📝 Important Notes
AWS S3 Configuration: The .env.example file contains placeholder variables for Amazon S3. To enable profile image uploads, configure an active AWS account, create an S3 bucket, and populate your .env file with your credentials.

Production Readiness: The repository includes deployment configuration files at the root and inside chatter-api for automated AWS build pipelines:

buildspec.yml (AWS CodeBuild)

Procfile (AWS Elastic Beanstalk)

.platform/hooks/prebuild/01_yarn_install.sh (Deployment script hooks)