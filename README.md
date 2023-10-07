## Live Link: https://book-catalog-backend-rho-seven.vercel.app/

## Application Routes:

### User

- Route: api/v1/auth/signup (POST)
- Route: api/v1/auth/signin (POST)
- Route: api/v1/users (GET)
- Route: api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET)
- Route: api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- Route: api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE)
- Route: api/v1/profile (GET)

### Category

- Route: api/v1/categories/create-category (POST)
- Route: api/v1/categories (GET)
- Route: api/v1/categories/6177a5b87d32123f08d2f5d4
- Route: api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- Route: api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE)

### Books

- Route: api/v1/books/create-book (POST)
- Route: api/v1/books (GET)
- Route: api/v1/books/:categoryId/category (GET)
- Route: api/v1/books/:id (GET)
- Route: api/v1/books/:id (PATCH)
- Route: api/v1/books/:id (DELETE)

### Orders

- Route: api/v1/orders/create-order (POST)
- Route: api/v1/orders (GET)
- Route: api/v1/orders/:orderId (GET)
