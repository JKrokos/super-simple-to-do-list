# Super Simple To Do List

A clean and simple todo app built with Next.js and TypeScript.

## Features

- ✅ Add tasks with user assignment
- 📋 Three-column Kanban board (To Do → In Progress → Completed)
- 💾 Data persists in browser localStorage
- 🎨 Clean, responsive design with Tailwind CSS
- ⚡ Move tasks between states
- 🗑️ Delete tasks

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Local Storage** - Data persistence

## Usage

1. Add a task using the form at the top
2. Select a user from the dropdown
3. Click "Add Task" to create the todo
4. Use the arrow button (→) to move tasks between columns
5. Use the X button to delete tasks

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page component
│   └── layout.tsx        # App layout
├── components/
│   ├── AddTaskForm.tsx   # Task creation form
│   ├── TodoBoard.tsx     # Main board container
│   ├── TodoColumn.tsx    # Individual columns
│   └── TodoItem.tsx      # Task cards
└── utils/
    └── constants.ts      # App constants and types
```
