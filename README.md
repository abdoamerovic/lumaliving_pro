# Luma Living

**Luma Living** is a modern bilingual furniture e-commerce application built with **Next.js**.

The project is a practical learning and development project focused on building a real-world application using modern Next.js concepts, reusable components, responsive UI, internationalization, state management, and e-commerce features.

The goal is to create a clean and scalable furniture shopping experience while continuously improving the application's structure, design, and functionality.

## ✨ Features

- 🌍 **Bilingual support** — English and Arabic.
- 🛋️ **Furniture product listing** — browse furniture and home products by category.
- 🔎 **Product details** — view product images, descriptions, specifications, ratings, reviews, prices, colors, and availability.
- 🛒 **Shopping cart** — add products, update quantities, remove items, clear the cart, and view the order summary.
- ❤️ **Wishlist** — save favorite products for later.
- 🖼️ **Product gallery** — view multiple product images with thumbnails.
- 📱 **Responsive design** — designed for desktop, tablet, and mobile screens.
- 🧭 **Localized routing** — language-aware routes and navigation.
- 🎨 **Modern UI** — clean, minimal furniture-focused design.
- ⚡ **Next.js App Router** — built using the modern Next.js application structure.
- 🧩 **Reusable components** — UI is divided into reusable and maintainable components.
- 🖥️ **Server and Client Components** — uses Next.js Server Components by default and `"use client"` where client-side interaction and state are required.
- 📦 **State management** — Zustand is used for client-side shopping-cart and wishlist state.

## 🛠️ Technologies

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **next-intl** — internationalization and English/Arabic localization
- **Zustand** — client-side state management
- **Next.js Image** — optimized image handling

## 📚 What This Project Practices

Luma Living is not only a furniture UI project. It is also a practical project for learning how to structure and develop a modern Next.js application.

The project covers concepts such as:

- Next.js App Router
- `app` directory architecture
- Dynamic routes
- Dynamic `[locale]` routes
- Server Components
- Client Components
- `"use client"`
- Server-side and client-side rendering concepts
- Reusable React components
- Props and component composition
- TypeScript types
- State management with Zustand
- Internationalization with `next-intl`
- Responsive design with Tailwind CSS
- Next.js `Image`
- Product data organization
- Cart and wishlist logic
- Product detail pages
- Localized navigation
- Route handling and middleware
- Building reusable UI sections
- Organizing a scalable project structure

## 📁 Project Structure

```text
app/
├── [locale]/
│   ├── Category/
│   ├── cart/
│   ├── login/
│   ├── products/
│   └── ...
│
├── components/
│   ├── cart/
│   ├── details/
│   ├── navbar/
│   └── ...
│
├── lib/
│   └── data/
│       └── products/
│
├── store/
│   └── cartStore.ts
│
├── types/
│   └── products/
│
├── i18n/
│   ├── routing.ts
│   └── request.ts
│
└── messages/
    ├── en/
    └── ar/
```

> The project structure is continuously being improved as the application develops.

## 🌐 Localization

Luma Living supports:

- **English (`en`)**
- **Arabic (`ar`)**

Examples of localized routes:

```text
/en
/ar
/en/login
/ar/login
```

Translations and localized content are handled with **next-intl**.

## 🛒 State Management

**Zustand** is used for client-side state management.

The cart store handles operations such as:

- Add product to cart
- Increase/decrease quantity
- Remove a product
- Clear the cart
- Manage cart items
- Calculate cart-related data

Wishlist functionality is also implemented on the client side.

## 🛍️ Product Details

Products can contain information such as:

- Product name
- Price
- Images
- Category/type
- Rating
- Number of reviews
- Availability
- Available colors
- Description
- Specifications
- Materials
- Dimensions
- Care instructions

The product details page is designed to present this information in a clear and organized way.

## 🎨 Product Categories

The project focuses on furniture and home products, including:

- Sofas
- Chairs
- Tables
- Beds
- Floor lamps
- Pendant lights
- Other furniture and lighting products

## 📱 Responsive Design

The interface is being developed to work across different screen sizes:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive layouts are implemented using **Tailwind CSS** and are continuously refined as the project develops.

## 🧩 Server & Client Components

One of the important parts of the project is learning how Next.js handles **Server Components** and **Client Components**.

The project uses Server Components where possible and adds:

```tsx
"use client";
```

only to components that require client-side features such as:

- React state
- Event handlers
- Browser APIs
- Zustand stores
- Interactive UI

This helps keep the application structure aligned with the Next.js App Router architecture.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📦 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs the project's linting checks.

## 📸 Screenshots

Screenshots can be added here to demonstrate the main parts of the application:

- Home page
- Product listing
- Product details
- Shopping cart
- Wishlist
- English version
- Arabic version
- Responsive mobile layout

Example:

```md
![Home Page](./screenshots/home.png)
```

## 🎯 Project Goals

The main goals of Luma Living are to:

1. Build a realistic furniture e-commerce application.
2. Practice modern Next.js development.
3. Understand the `app` directory and App Router architecture.
4. Learn when to use Server Components and Client Components.
5. Build reusable and maintainable React components.
6. Support both English and Arabic users.
7. Implement responsive and accessible UI patterns.
8. Manage shopping-cart and wishlist state efficiently.
9. Practice TypeScript in a real-world application.
10. Continuously improve the project's architecture, UI, and functionality.

## 🚧 Development Status

Luma Living is an **ongoing development project**.

The current version focuses on the application's frontend architecture, UI, localization, product browsing, product details, cart, wishlist, and state management.

The design and functionality are still being refined, and additional features and improvements may be added as development continues.

This project is intended to demonstrate the process of building and improving a modern Next.js application rather than presenting a final production-ready e-commerce platform.

## 🔮 Future Improvements

Possible future improvements include:

- Backend and database integration
- Real user authentication
- Persistent cart and wishlist
- Real payment processing
- Order management
- Admin dashboard
- Product search
- Advanced filtering and sorting
- User-submitted product reviews
- Inventory management
- Improved accessibility
- Additional UI and performance improvements

## 👨‍💻 Author

**Abdo Amer**

Computer Science Graduate

---

**Luma Living — Modern furniture, thoughtfully presented.**
