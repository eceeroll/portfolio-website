# Personal Portfolio

A personal portfolio project built to showcase my work, skills, and experience as a software developer.

## Tech Stack

- TypeScript
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Zod

## Features

- Project management (CRUD operations)
- Request validation with Zod
- PostgreSQL integration with Prisma
- Layered architecture (Routes → Controllers → Services → Database)

## Getting Started

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio_db"
PORT=3000
```

### Run migrations

```bash
npx prisma migrate dev
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Start the development server

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | `/api/projects`     |
| GET    | `/api/projects/:id` |
| POST   | `/api/projects`     |
| PUT    | `/api/projects/:id` |
| DELETE | `/api/projects/:id` |

## Project Structure

```text
src/
├── config/
├── controllers/
├── middlewares/
├── routes/
├── services/
├── validators/
└── app.ts
```
