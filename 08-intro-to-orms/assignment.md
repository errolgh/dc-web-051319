With a partner/group:

1.  Write the SQL to create tables for Books (id, title, author_id) and Authors (id, name)

CREATE TABLE books (id integer PRIMARY KEY, title TEXT, author_id INTEGER);
CREATE TABLE authors (id integer PRIMARY KEY, name TEXT);

2.  Write the SQL to get all Books

SELECT * FROM books

3.  Write the SQL to get all Authors

SELECT * FROM authors

4.  Write the SQL to create a new book, given the title and author id

INSERT INTO books (title, author_id) VALUES ("Huckleberry Finn", 42)

5.  Write the SQL to create a new author, given the author's name

INSERT INTO authors (name) VALUES ("Mark Twain")

6.  Write the SQL to get all Books by a given author, given the author's id

SELECT * FROM books WHERE author_id = 42

7.  Write the SQL to get all Books by a given author, given the author's name

<<-SQL
SELECT * FROM books 
    INNER JOIN authors 
    ON books.author_id = author.id 
    WHERE book.author.name = "Mark Twain";
SQL

8.  Write the SQL to update a Book's title ("HP & The Philospher's Stone" <= "HP & The Sorcerer's Stone)"

UPDATE books SET title = "HP & The Philospher's Stone" WHERE title = "HP & The Sorcerer's Stone"



