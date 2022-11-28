-- CreateTable
CREATE TABLE "Planet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "distance_from_eleven" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Astronaut" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "planet_id" INTEGER NOT NULL,
    CONSTRAINT "Astronaut_planet_id_fkey" FOREIGN KEY ("planet_id") REFERENCES "Planet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
