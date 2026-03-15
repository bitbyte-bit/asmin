# ASMIN (Arise and Shine Ministries)

The site has been refactored into a **single page application (SPA)** with a Node.js/Express backend and a SQLite database for storing offices, donations, beneficiaries and contact messages.

## Repository Layout

```
asmin/
├── backend/
│   ├── server.js           # entrypoint for Express server
│   ├── db.js               # SQLite initialization helper
│   ├── seed.js             # simple seeding script for initial data
│   └── routes/             # REST API routes (offices, donors, donees, contacts)
├── public/
│   ├── index.html          # SPA front end with Bootstrap modals
│   ├── styles.css          # application styles
│   └── script.js           # client‑side JavaScript logic
├── package.json            # project metadata & scripts
└── README.md               # project documentation (this file)
```

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Initialize and seed the database (first time only):
   ```bash
   node backend/seed.js
   ```
3. Launch the application:
   ```bash
   npm run start       # production
   npm run dev         # development with nodemon
   ```
4. Open your browser to http://localhost:4040/

*You can override the port by setting the `PORT` environment variable.*

## API Endpoints

| Method | Path              | Description                                    |
|--------|-------------------|------------------------------------------------|
| GET    | /api/offices      | Retrieve collection offices                    |
| GET    | /api/donees       | Retrieve beneficiary list                      |
| POST   | /api/donors       | Submit a donation form                         |
| POST   | /api/contacts     | Send a contact message                         |
| GET    | /api/contacts     | List received contact messages (admin)         |

## Frontend Overview

- Uses **Bootstrap 5** for layout and modals.
- All navigation items open modal dialogs rather than separate pages.
- Forms send data to the backend via `fetch` and provide feedback to users.

## Notes

This modernization cleans up the UI, centralizes logic in a single page, and provides a simple but robust server/database for future feature expansions.

This project is open-source and available for modification and distribution.