const { PrismaClient } = require("@prisma/client");
const {
    placeholderUsers,
    placeholderBooks,
    placeholderBookReviews } = require("./placeholder-data");

const prisma = new PrismaClient();

async function main() {
    await Promise.all(
        placeholderUsers.map(async (user) => {
            console.log("Inserting user:", user);
            await prisma.user.create({ data: user });
            console.log("User inserted successfully");
        })
        );
        console.log("User insertion complete. Proceeding to insert books...");

    await Promise.all(
        placeholderBooks.map(async (book) => {
            const { slug, ...restOfBook } = book;
            console.log("Inserting book:", book);
            await prisma.book.upsert({
                where: {
                    slug: slug,
                },
                update: restOfBook,
                create: {
                    slug: slug,
                    ...restOfBook,
                },
            });
            console.log("Book inserted successfully");
        })
    );
 console.log("Book insertion complete. Proceeding to insert Reviews...");
    await Promise.all(
        placeholderBookReviews.map(async (review) => {
            console.log("Inserting Review:", review);
            await prisma.bookReview.create({ data: review });
            console.log("Review inserted successfully");
        })
    );
}

main()
    .catch((e) => {
        console.error("Error while seeding database:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });