/*
  Warnings:

  - Added the required column `rating` to the `book_reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book_reviews" ADD COLUMN     "rating" INTEGER NOT NULL;
