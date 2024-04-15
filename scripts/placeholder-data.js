const placeholderUsers = [
    {
        "username": "Amin",
        "email": "amin.sharifi45@gmail.com",
        "password": "password123"
    },
    {
        "username": "Kamyar",
        "email": "bozorgmehrkamyar@gmail.com",
        "password": "password456"
    }
]

const placeholderBooks = [
    {
        "slug": "harry_potter_and_the_philosophers_stone",
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K. Rowling",
        "category": "Fantasy",
        "description": "The first book in the Harry Potter series.",
        "bookCoverImg": "http://ecx.images-amazon.com/images/I/61YNkq4DE4L.jpg",
        "price": 20,
        "approved": true,
        "publisher": "Bloomsbury Publishing",
        "isbn": "9780747532743",
        "language": "English",
        "pages": 223,
        "rating": 4.5,
        "createdById": 1
    },
    {
        "slug": "to_kill_a_mockingbird",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "category": "Classic",
        "description": "A novel by Harper Lee, set in the American South during the 1930s.",
        "bookCoverImg": "http://ecx.images-amazon.com/images/I/51grMGCKivL.jpg",
        "price": 15,
        "approved": true,
        "publisher": "J.B. Lippincott & Co.",
        "isbn": "9780061120084",
        "language": "English",
        "pages": 281,
        "rating": 4.8,
        "createdById": 2
    }
]

const placeholderBookReviews = [
    {
        "bookId": 1,
        "userId": 1,
        "review": "A captivating story that introduced me to the magical world of Harry Potter."
    },
    {
        "bookId": 2,
        "userId": 2,
        "review": "A thought-provoking novel that explores important themes such as racial injustice and moral growth."
    }
]

module.exports = {
    placeholderUsers, placeholderBooks, placeholderBookReviews
};