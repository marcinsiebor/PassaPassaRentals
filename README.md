# Passa Passa Rentals: Next-Gen Car Rental Platform 🚗

**A modern, full-stack car rental web application built with Angular, Flask, and SQLite.**  
Developed as part of a Programming Languages Project at the University of Information Technology and Management, Rzeszów, Poland.

## 📌 Table of Contents
- [Overview](##overview)
- [Tech Stack](##tech-stack)
- [Features](##features)
- [System Architecture](##system-architecture)
- [Installation](##installation)
- [Usage](##usage)
- [Contributors](##contributors)

---

## 🌍 Overview
Passa Passa Rentals is a next-gen car rental platform that provides a seamless user experience for customers and administrators alike. It allows users to browse cars, register, log in, and make reservations, while admins can monitor reservations and users.

📅 Project Timeline: December 2023 – January 2024  
🎯 Goal: To automate car rentals and enhance user experience through a responsive SPA front end and a secure, RESTful backend&#8203;:contentReference[oaicite:0]{index=0}.

---

## 💻 Tech Stack

### Front End (Angular)
- Angular Core
- Angular Router
- Angular Forms
- PrimeNG (UI Components)
- Toastr (notifications)
- Bootstrap

### Back End (Flask)
- Python 3
- Flask Web Framework
- Flask-CORS
- SQLite Database
- RESTful API with endpoints:
  - `/register` (POST)
  - `/login` (POST)
  - `/logout` (POST)
  - `/make-reservation/<user_id>` (POST)
  - `/user-reservations/<user_id>` (GET)
  - `/openai-api-key` (GET)&#8203;:contentReference[oaicite:1]{index=1}

---

## ✅ Features

### User Features
- 🔐 **Authentication** – Register and log in securely.
- 🚗 **Available Cars** – Browse and filter cars with detailed info.
- 📝 **Reservations** – Make and view personal reservations.
- 💬 **Passa AI** – Get car suggestions via OpenAI API.
- 📧 **Contact Form** – Send inquiries using a styled contact form.
- ℹ️ **About Us** – Learn about the company’s mission and services.

### Admin Features (future scope)
- View all users and reservations
- Monitor activity logs

---

## 🏗️ System Architecture

### Angular Front End
- Components:
  - `HomeComponent`, `LoginComponent`, `SignUpComponent`
  - `MyAvailableCarsComponent`, `MyReservationsComponent`
  - `PassaAiComponent`, `AboutUsComponent`, `ContactsComponent`
- Services:
  - `AuthorizationService`, `ReservationService`, `PassaAiService`
  - `AvailableCarsService`, `HomeShowroomService`

### Flask Back End
- Uses SQLite to manage two tables: `users`, `reservations`
- Passwords stored securely with SHA-256 hashing
- Uses Flask sessions for login state&#8203;:contentReference[oaicite:2]{index=2}

## 🚀 Installation

### Backend (Flask)
```bash
# Navigate to the backend directory
cd backend/

# Install dependencies
pip install -r requirements.txt

# Run the backend server
python main.py
```

### Frontend (Angular)
```bash
# Navigate to the frontend directory
cd frontend/

# Install dependencies
npm install

# Start the development server
ng serve
```

---

## 🎮 Usage

1. Open your browser and navigate to: `http://localhost:4200`
2. Register for an account on the **Sign-Up** page.
3. Log in using your registered credentials.
4. Browse through the **Available Cars** page.
5. Make a reservation through the **My Reservations** page.
6. Use the **Passa AI** feature to receive car suggestions via natural language.
7. Explore additional pages like **About Us** and **Contact Us**.

---

## 👥 Contributors

| Name                   | Role       |
|------------------------|------------|
| Ahmed Alkali Mohammed  | Developer  |
| Muhammed Cham          | Developer  |
| Marcin Siębor          | Developer  |
