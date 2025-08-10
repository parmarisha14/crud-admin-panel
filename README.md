http://localhost:8083
---
# 📚 Book Admin Panel - Documentation

## 📌 Overview
The **Book Admin Panel** is a CRUD (Create, Read, Update, Delete) web application that allows administrators to manage book records efficiently.  
Admins can add new books, view all books in a table format, update existing records, and delete books from the database.

---

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Template Engine:** EJS

---

## 🚀 Features
1. **Add Book** – Store book details like title, author, price, category, and ISBN.
2. **View Books** – Display all stored books in a table.
3. **Edit Book** – Update book details when needed.
4. **Delete Book** – Remove unwanted or outdated books.
5. **Responsive Design** – Works on desktop, tablet, and mobile.

---

## 📂 Project Structure

Book-Admin-Panel/
│
├── docs/ # Documentation files
│ └── documentation.md
├── models/ # Mongoose schemas
│ └── bookSchema.js
├── public/ # Static assets (CSS, JS, images)
├── routes/ # Route handling
│ └── bookRoutes.js
  |___index.js
├── views/ # EJS templates
│ ├── index.ejs
│ ├── pages/
│ │ ├── addBook.ejs
│ │ ├── editBook.ejs
│ │ └── viewBooks.ejs
├── app.js # Main server file
├── package.json
└── README.md
