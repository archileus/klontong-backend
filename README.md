This is a Test Development of Express.js API project using PostgreSQL as database for Klontong Backend

## Getting Started

### 1. Install PostgreSQL Database

Please download and install postgresql according to your OS [Here](https://www.postgresql.org/download/).

This project is using postgresql 15, but it should be alright to use the latest version.

Refer to `.env` file for detail credential for the database setting, if you install set with different data, change the file `.env` accordingly.

### 2. Install npm dependencies

Within this project root folder, run:

```bash
npm install
```

### 3. Database Schema Migration

Run database migration using:

```
npx prisma migrate dev --name init
```

This should create table schema into your PostgreSQL database.

### 4. Seed Table

```
npm run seed
```

To populate data into database table.

Please refer to file `prisma/seed/index.ts` to see the details of data being populated.

### 5. Run Server

```
npm run dev
```

When server is up, default running at http://localhost:3030
