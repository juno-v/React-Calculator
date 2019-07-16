CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "entries" (
    "id" SERIAL PRIMARY KEY,
    "calculation" VARCHAR(1000)
)