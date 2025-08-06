/*
  Warnings:

  - You are about to drop the `_MovieToUserMovie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_WatchStatusUserMovies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MovieToUserMovie" DROP CONSTRAINT "_MovieToUserMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToUserMovie" DROP CONSTRAINT "_MovieToUserMovie_B_fkey";

-- DropForeignKey
ALTER TABLE "_WatchStatusUserMovies" DROP CONSTRAINT "_WatchStatusUserMovies_A_fkey";

-- DropForeignKey
ALTER TABLE "_WatchStatusUserMovies" DROP CONSTRAINT "_WatchStatusUserMovies_B_fkey";

-- DropTable
DROP TABLE "_MovieToUserMovie";

-- DropTable
DROP TABLE "_WatchStatusUserMovies";
