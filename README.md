# 📚 Books Finder

Books Finder is a modern, user-friendly digital library management system built with React, TypeScript, Redux Toolkit, and Tailwind CSS. It allows users to browse, create, borrow, and manage books efficiently through a clean and responsive interface.

---

## 🚀 Features

- 🔍 **Browse Books** – View all available books with real-time updates.
- ➕ **Create Book** – Add new books to the collection via a form with validation.
- ✏️ **Edit Book** – Update book information using a modal-based editor.
- 🗑️ **Delete Book** – Safely remove books with confirmation prompts.
- 📥 **Borrow Book** – Borrow available copies with quantity and due date.
- 📄 **Borrow Summary** – Track borrowing history and summary per book.
- 📖 **View Book Details** – See detailed info for each book on a separate route.
- 📱 **Responsive Design** – Optimized for desktop, tablet, and mobile.
- 💬 **FAQ & About** – Learn more about the platform and its purpose.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI, React Router
- **State Management**: Redux Toolkit + RTK Query
- **Form Handling**: React Hook Form + Zod
- **UI Enhancements**: SweetAlert2, Toastify, Embla Carousel
- **Backend (assumed)**: Node.js, Express, MongoDB (with Mongoose)

---

## 🧪 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/books-finder.git
   cd books-finder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Environment Variables**

   If applicable, create a `.env` file and add your API base URL or MongoDB URI.

---

## 📁 Folder Structure

```
src/
├── assets/              # Static assets
├── components/          # Reusable UI components
├── pages/               # Route pages (Home, Books, About, etc.)
├── redux/               # Redux slices and API setup (RTK Query)
├── types/               # TypeScript interfaces and types
├── App.tsx              # Main app structure
└── main.tsx             # Entry point
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
