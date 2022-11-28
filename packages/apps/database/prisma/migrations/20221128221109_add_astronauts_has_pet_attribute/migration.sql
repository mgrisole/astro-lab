-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Astronaut" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "planet_id" INTEGER NOT NULL,
    "has_pet" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Astronaut_planet_id_fkey" FOREIGN KEY ("planet_id") REFERENCES "Planet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Astronaut" ("firstname", "id", "lastname", "planet_id") SELECT "firstname", "id", "lastname", "planet_id" FROM "Astronaut";
DROP TABLE "Astronaut";
ALTER TABLE "new_Astronaut" RENAME TO "Astronaut";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
