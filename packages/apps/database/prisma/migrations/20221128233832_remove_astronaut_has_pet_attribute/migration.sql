/*
  Warnings:

  - You are about to drop the column `has_pet` on the `Astronaut` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Astronaut" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "planet_id" TEXT NOT NULL,
    CONSTRAINT "Astronaut_planet_id_fkey" FOREIGN KEY ("planet_id") REFERENCES "Planet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Astronaut" ("firstname", "id", "lastname", "planet_id") SELECT "firstname", "id", "lastname", "planet_id" FROM "Astronaut";
DROP TABLE "Astronaut";
ALTER TABLE "new_Astronaut" RENAME TO "Astronaut";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
