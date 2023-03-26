CREATE TABLE "user" (
  "id" bigserial PRIMARY KEY,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "title" varchar,
  "email" varchar NOT NULL,
  "image" varchar NOT NULL,
  "department" int NOT NULL
);

CREATE TABLE "department" (
  "id" bigserial PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" varchar
);

ALTER TABLE "user" ADD FOREIGN KEY ("department") REFERENCES "department" ("id");
