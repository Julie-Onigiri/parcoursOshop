BEGIN;

DROP TABLE IF EXISTS "category", "product", "role", "user";

CREATE TABLE "category" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "product" (
    "id"              INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ref"             TEXT NOT NULL,
    "title"           TEXT NOT NULL,
    "description"     TEXT NOT NULL,
    "image"           TEXT NOT NULL,
    "price"           INTEGER NOT NULL,
    "category_id"     INTEGER REFERENCES "category"("id"),
    "created_at"      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at"      TIMESTAMPTZ
);

CREATE TABLE "role" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT,
    "email"      TEXT NOT NULL,
    "password"   TEXT NOT NULL,
    "role_id"    INTEGER REFERENCES"role"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;