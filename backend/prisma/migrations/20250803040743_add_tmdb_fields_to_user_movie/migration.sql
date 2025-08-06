/*
  Warnings:

  - You are about to drop the column `created_at` on the `user_movies` table. All the data in the column will be lost.
  - You are about to drop the column `movie_id` on the `user_movies` table. All the data in the column will be lost.
  - You are about to drop the column `status_id` on the `user_movies` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `user_movies` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user_movies` table. All the data in the column will be lost.
  - Added the required column `movieId` to the `user_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posterUrl` to the `user_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `user_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `user_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `user_movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `user_movies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user_movies" DROP CONSTRAINT "user_movies_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "user_movies" DROP CONSTRAINT "user_movies_status_id_fkey";

-- DropForeignKey
ALTER TABLE "user_movies" DROP CONSTRAINT "user_movies_user_id_fkey";

-- DropIndex
DROP INDEX "user_movies_user_id_movie_id_key";

-- AlterTable
ALTER TABLE "user_movies" DROP COLUMN "created_at",
DROP COLUMN "movie_id",
DROP COLUMN "status_id",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "movieId" INTEGER NOT NULL,
ADD COLUMN     "posterUrl" TEXT NOT NULL,
ADD COLUMN     "statusId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_MovieToUserMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MovieToUserMovie_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_WatchStatusUserMovies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_WatchStatusUserMovies_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MovieToUserMovie_B_index" ON "_MovieToUserMovie"("B");

-- CreateIndex
CREATE INDEX "_WatchStatusUserMovies_B_index" ON "_WatchStatusUserMovies"("B");

-- AddForeignKey
ALTER TABLE "user_movies" ADD CONSTRAINT "user_movies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_movies" ADD CONSTRAINT "user_movies_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "watch_statuses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToUserMovie" ADD CONSTRAINT "_MovieToUserMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToUserMovie" ADD CONSTRAINT "_MovieToUserMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "user_movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WatchStatusUserMovies" ADD CONSTRAINT "_WatchStatusUserMovies_A_fkey" FOREIGN KEY ("A") REFERENCES "user_movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WatchStatusUserMovies" ADD CONSTRAINT "_WatchStatusUserMovies_B_fkey" FOREIGN KEY ("B") REFERENCES "watch_statuses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
