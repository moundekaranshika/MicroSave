# MicroSave – Smart Round-Up Savings App

## Overview

MicroSave is a full-stack fintech web application that helps users build consistent saving habits by automatically rounding up daily transactions and saving the difference. The app provides a real-time dashboard to track savings, transaction count, and recent activity.

---

## Features

* Automatic round-up savings on transactions
* Real-time dashboard with total savings and transaction count
* Recent transaction history
* REST API integration for seamless frontend-backend communication
* Cloud database using MongoDB Atlas

---

## Tech Stack

**Frontend:** React.js, HTML, CSS
**Backend:** Node.js, Express.js
**Database:** MongoDB Atlas
**Other:** REST APIs, Git, GitHub

---

## Project Structure

```
microsave/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── App.jsx
│   └── main.jsx
```

---

## How It Works

1. User enters a transaction amount
2. The system rounds it up to the nearest 10
3. The difference is saved automatically
4. Data is stored in MongoDB
5. Dashboard updates in real time

---

## Example

```
Transaction: ₹92  
Rounded: ₹100  
Saved: ₹8  
```

---

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/microsave.git
cd microsave
```

---

### 2. Setup Backend

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```
node server.js
```

---

### 3. Setup Frontend

```
cd frontend
npm install
npm run dev
```

---

### 4. Open App

```
http://localhost:5173
```

---

## API Endpoints

### ➤ Add Transaction

```
POST /api/transactions
```

### ➤ Get Summary

```
GET /api/summary
```

---

## Future Enhancements

* User authentication (JWT)
* Savings analytics with charts
* Monthly savings goals
* Mobile app version

---

## Key Learnings

* Built a full-stack web application
* Designed REST APIs and integrated frontend with backend
* Worked with cloud database (MongoDB Atlas)
* Implemented real-time data updates

---
