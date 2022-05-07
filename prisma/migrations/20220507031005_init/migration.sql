/*
  Warnings:

  - You are about to alter the column `lang` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `missionCommander` on the `Student` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[name]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "lang" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "missionCommander" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_key" ON "Student"("name");
