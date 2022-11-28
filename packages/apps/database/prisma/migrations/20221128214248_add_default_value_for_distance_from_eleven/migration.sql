-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Planet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "distance_from_eleven" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_Planet" ("distance_from_eleven", "id", "name") SELECT "distance_from_eleven", "id", "name" FROM "Planet";
DROP TABLE "Planet";
ALTER TABLE "new_Planet" RENAME TO "Planet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
