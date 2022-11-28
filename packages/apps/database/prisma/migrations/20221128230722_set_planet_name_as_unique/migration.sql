/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Planet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Planet_name_key" ON "Planet"("name");
