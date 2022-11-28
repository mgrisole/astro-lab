/*
  Warnings:

  - The primary key for the `Planet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Astronaut` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Planet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "distance_from_eleven" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_Planet" ("distance_from_eleven", "id", "name") SELECT "distance_from_eleven", "id", "name" FROM "Planet";
DROP TABLE "Planet";
ALTER TABLE "new_Planet" RENAME TO "Planet";
CREATE UNIQUE INDEX "Planet_name_key" ON "Planet"("name");
CREATE TABLE "new_Astronaut" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "planet_id" TEXT NOT NULL,
    "has_pet" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Astronaut_planet_id_fkey" FOREIGN KEY ("planet_id") REFERENCES "Planet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Astronaut" ("firstname", "has_pet", "id", "lastname", "planet_id") SELECT "firstname", "has_pet", "id", "lastname", "planet_id" FROM "Astronaut";
DROP TABLE "Astronaut";
ALTER TABLE "new_Astronaut" RENAME TO "Astronaut";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
