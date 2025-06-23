# 📝 React Todo List Component

A minimalist and functional Todo List built with **React** and styled using **Tailwind CSS**. This component allows users to add, remove, and reorder tasks easily.

---

## 🚀 Features

- ✅ Add todos with a **title** and **description**
- ❌ Remove specific todos from the list
- 🔼 Move todos **up** in the list
- 🔽 Move todos **down** in the list
- ⚛️ State management using React `useState`

---

## 📦 Tech Stack

- **React (Hooks)**
- **Tailwind CSS** for quick styling

---

## 🧱 Component Structure

**File:** `Todo.jsx`

### State Variables

- `todos`: Array of todo objects (`{ title, desc }`)
- `todo`: The current input for a new todo

---

## 💡 How It Works

### Add Todo
- Fill in the title and description
- Click **Submit Todo** to add it to the list

### Remove Todo
- Click the **Remove Todo** button next to an item

### Reorder Todos
- Click ☝ to move the item up
- Click 👇 to move the item down

---

## 🖼️ UI Example

[Title] [Description] [☝] [👇] [Remove Todo]

[Input Title] [Input Description] [Submit Todo]


---

## 🧪 Possible Enhancements

- Add validation to prevent blank todos
- Implement `localStorage` for persistent state
- Show todo creation timestamps
- Mark todos as "completed"
- Add sorting or filtering functionality

---

## ✅ Quick Setup

### Install React App (if not already):

npx create-react-app my-todo-app
cd my-todo-app

### Add Tailwind CSS (optional but recommended):

npm install -D tailwindcss
npx tailwindcss init


Configure `tailwind.config.js` and import Tailwind in `index.css`.

### Use the Component

Replace `App.js` content with:

```jsx
import Todo from "./Todo";

function App() {
  return <Todo />;
}

🙋‍♂️ Author
Mridul Garg
Frontend Developer | React Enthusiast
