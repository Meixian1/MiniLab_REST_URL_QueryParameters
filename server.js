//Part1: Setting up the express server 

const express = require('express');
const PORT = 3000;
const app = express();

const books = [
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
    { id: 3, title: "1984" }
];


app.get('/books/long', (req, res) => {
    res.send("List of long books")
})

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b) => b.id === bookId);

    if (!book) {
        return res.status(404).send("Book not found");
    } else {
        res.send(`Book Title: ${book.title}`);
    }
});

//Part1: Handling Errors
//As I observed: GET http://localhost:3000/books/error-example/:id 404 (Not Found)

app.get('/error-example/:id', (req, res) => {
    res.send(`Book ID: ${req.params.id}`);
    res.send('This is an error example');
});

app.get('/fixed-example/:id', (req, res) => { 
    const bookId = parseInt(req.params.id); 
    const book = books.find((b) => b,id === bookId); 
    if(!book){
        return res.status(404).send("Book not found");
    }else{
        res.send('Book Title: ${book.title}'); }
    }); 

//Part4: Managing Route Order 


//Part5: Handling Multiple Parameters 

app.get('/greet/:firstname/:lastname', (req, res) => {
    res.send(`Hello ${req.params.firstname} ${req.params.lastname}`); 
}); 

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

