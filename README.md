# 💰 Expense Tracker

Welcome to the **Expense Tracker**! This is a web application designed to help you manage and track your expenses and income.
It's built with Node.js, Express, and MongoDB, and provides a clean interface for adding, editing, and viewing your transactions.

## 🚀 Features

- **Add Transactions:** Easily add new income or expense records.
- **Edit Transactions:** Update existing transactions with new details.
- **Delete Transactions:** Remove transactions that are no longer needed.
- **Transaction History:** View a comprehensive list of all your transactions.

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database to store transaction data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **EJS**: Embedded JavaScript templating for rendering HTML.
- **Bootstrap**: CSS framework for styling and responsive design.

## 🧩 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jencyy/e-tracker.git
  
2. **Navigate to the project directory:**
   ```bash
   cd ExpenseTracker

   
3.**Install the dependencies:**
  ```bash
  install
  ```

4.**Set Up Environment Variables**
Create a .env file in the root directory with the following content:

MONGO_URI=mongodb+srv://jencysodvadiya:KKCOSxdWYnYWvYyK@cluster0.n9ylx.mongodb.net/

5.**Start the application:**
Access the application:
```bash
  npm start
```
6.**Open your web browser and visit:**

http://localhost:3003

You're all set! 🎉 You can now use the Expense Tracker application to manage your finances.

This guide covers all the essential steps in a straightforward format. Make sure to update the MongoDB connection string in the `.env` file with your own credentials.


📂 Project Structure
index.js: Main entry point of the application.
routes/: Contains route handlers for different endpoints.
views/: Contains EJS templates for rendering HTML.
models/: Contains Mongoose models for the database.
public/: Contains static files like CSS and JavaScript.
