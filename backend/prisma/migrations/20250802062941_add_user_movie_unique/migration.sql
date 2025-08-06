/*
  Warnings:

  - A unique constraint covering the columns `[user_id,movie_id]` on the table `user_movies` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_movies_user_id_movie_id_key" ON "user_movies"("user_id", "movie_id");
