# TechStore - Next.js E-commerce Application

A simple yet professional e-commerce application built with Next.js 15 (App Router) and Express.js. This project features a modern UI, mock authentication, and a functional product management system.

## Features

- **Landing Page**: 7 distinct sections including Hero, Stats, Product Showcase, and Testimonials.
- **Product Listing**: Fetch and display products from an Express API.
- **Product Details**: Detailed view of each product.
- **Authentication**: Cookie-based mock authentication (Email/Password).
- **Protected Routes**: Middleware protection for proper access control.
- **Add Item**: Protected form to add new products to the backend.
- **Responsive Design**: Built with Tailwind CSS v4 for all devices.

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4.
- **Backend**: Express.js, Node.js.
- **Data**: JSON file storage (mock database).

## Submission Details

- **GitHub Repository**: [INSERT GITHUB LINK HERE]
- **Live Site**: [INSERT VERCEL LINK HERE]

### Mock Credentials
- **Email**: `admin@techstore.com`
- **Password**: `password123`

---

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/actions`: Server Actions for form handling.
- `src/utils`: Helper functions (Auth).
- `src/middleware.js`: Edge middleware for route protection.
- `backend`: Express server and data storage.

## Setup & Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Servers**
    This command runs both the Next.js frontend (Proy: 3000) and Express backend (Port: 5000) concurrently.
    ```bash
    npm run dev:all
    ```

3.  **Access the App**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Mock Credentials

To use the protected features, log in with:

- **Email**: `admin@techstore.com`
- **Password**: `password123`

## API Routes

- `GET /api/items`: Get all items.
- `GET /api/items/:id`: Get item by ID.
- `POST /api/items`: Add a new item.
