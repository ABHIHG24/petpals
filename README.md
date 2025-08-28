# Petpals - Pet Adoption & Community Platform

Petpals is a full-featured web application designed to connect stray and abandoned animals with loving homes. It provides a comprehensive platform for users to find and adopt pets, share their experiences through articles, and support the cause through donations.

This repository contains the **Frontend** code for the Petpals platform.

## 🚀 Live Demo

You can view the live, deployed version of the application here:

**[https://petpals-xqqz.onrender.com/](https://petpals-xqqz.onrender.com/)**

*(Please note: The backend on the free Render hosting tier may take a moment to spin up if it has been inactive.)*

## Repositories
This project is split into two separate repositories:
* **🐾 Frontend (Client):** https://github.com/ABHIHG24/petpals
* **⚙️ Backend (Server):** https://github.com/ABHIHG24/petpalsBackend

## ✨ Features

### 👤 User Features
* **🐾 Find & Adopt Pets:** Browse a gallery of available pets, view detailed profiles, and submit adoption requests.
* **📧 Email Confirmation:** Receive an email confirmation via **EmailJS** upon successfully submitting an adoption request.
* **📝 Article/Story Sharing:** A full CRUD (Create, Read, Update, Delete) module for users to write, publish, and manage their own articles and stories about their pets.
* **🛍️ Shopping:** A dedicated section that links to external pet supply websites.
* **💰 Secure Donations:** An integrated donation system using the **Stripe API** for secure payments.
* **👤 User Profiles:** A dedicated profile page for users to manage their information.
* **🔐 Authentication:** Secure login and registration system for users using **JWT (JSON Web Tokens)**.

### 👑 Admin Dashboard Features
* **🐾 Pet Management:** Full CRUD (Create, Read, Update, Delete) functionality for all pet listings.
* **👥 User Management:** View a list of all registered users and the ability to delete user accounts.
* **📈 Donation History:** View a complete history of all donations made through the platform.
* **📄 Article Management:** View and delete any articles submitted by users to maintain community standards.
* **✅ Adoption Request Management:** View all incoming adoption requests, with the ability to approve or reject them.

## 💻 Tech Stack

This project is built using the MERN stack and other modern web technologies.

* **Frontend:**
    * **React:** A JavaScript library for building the user interface.
* **Backend:**
    * **Node.js:** A JavaScript runtime environment.
    * **Express.js:** A web application framework for Node.js.
* **Database:**
    * **MongoDB:** A NoSQL database (hosted on MongoDB Atlas).
* **Authentication:**
    * **JWT (JSON Web Tokens):** For secure user authentication and session management.
* **Payments:**
    * **Stripe API:** To handle secure online donations.
* **Email Services:**
    * **EmailJS:** For sending email confirmations directly from the client-side.

## 🚀 Getting Started

To get the full application running locally, you will need to set up both the backend and frontend services.

### 1. Backend Setup (This Repository)
1.  Clone this repository:
    ```sh
    git clone https://github.com/ABHIHG24/petpalsBackend.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd petpalsBackend
    ```
3.  Install dependencies:
    ```sh
    npm install
    ```
4.  Create a `.env` file and add the following environment variables:
    ```
    MONGO_URI=your_mongodb_connection_string
    STRIPE_SECRET_KEY=your_stripe_secret_key
    JWT_SECRET=your_jwt_secret_key
    ```
5.  Start the backend server:
    ```sh
  node index.jx or nodemon index.js
    ```
    The server will be running on `http://localhost:PORT` (e.g., port 5000).

### 2. Frontend Setup
1.  Clone the frontend repository in a **new terminal window**:
    ```sh
    git clone https://github.com/ABHIHG24/petpals.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd petpals
    ```
3.  Install dependencies:
    ```sh
    npm install
    ```
4.  Start the frontend development server:
    ```sh
    npm start
    ```
    The React application will be available at `http://localhost:3000`.

## 📋 Usage

Once both services are running, you can:
* Open `http://localhost:3000` in your browser.
* Register a new user account to access the user-facing features.
* Log in with demo credentials to access the admin dashboard.
    admin username - admin 
    password - 12345678
