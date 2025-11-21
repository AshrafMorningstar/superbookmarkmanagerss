export function generateTodoList() {
    const files = new Map();

    // Python implementation
    files['python/todo.py'] = `from typing import List, Dict
import json
from datetime import datetime

class TodoList:
    def __init__(self):
        self.tasks: List[Dict] = []
    
    def add_task(self, title: str, description: str = "") -> Dict:
        task = {
            "id": len(self.tasks) + 1,
            "title": title,
            "description": description,
            "completed": False,
            "created_at": datetime.now().isoformat()
        }
        self.tasks.append(task)
        return task
    
    def complete_task(self, task_id: int) -> bool:
        for task in self.tasks:
            if task["id"] == task_id:
                task["completed"] = True
                return True
        return False
    
    def remove_task(self, task_id: int) -> bool:
        for i, task in enumerate(self.tasks):
            if task["id"] == task_id:
                self.tasks.pop(i)
                return True
        return False
    
    def get_tasks(self, filter_completed: bool = None) -> List[Dict]:
        if filter_completed is None:
            return self.tasks
        return [t for t in self.tasks if t["completed"] == filter_completed]
    
    def save_to_file(self, filename: str) -> None:
        with open(filename, "w") as f:
            json.dump(self.tasks, f, indent=2)
    
    def load_from_file(self, filename: str) -> None:
        try:
            with open(filename, "r") as f:
                self.tasks = json.load(f)
        except FileNotFoundError:
            self.tasks = []

# Example usage
if __name__ == "__main__":
    todo = TodoList()
    todo.add_task("Complete project", "Finish the todo list implementation")
    todo.add_task("Write tests", "Add unit tests for the TodoList class")
    todo.complete_task(1)
    print(todo.get_tasks())`;

    // JavaScript/Node.js implementation
    files['javascript/todo.js'] = `class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(title, description = "") {
        const task = {
            id: this.tasks.length + 1,
            title,
            description,
            completed: false,
            createdAt: new Date().toISOString()
        };
        this.tasks.push(task);
        return task;
    }

    completeTask(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    }

    removeTask(taskId) {
        const index = this.tasks.findIndex(t => t.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    getTasks(filterCompleted = null) {
        if (filterCompleted === null) {
            return this.tasks;
        }
        return this.tasks.filter(t => t.completed === filterCompleted);
    }

    toJSON() {
        return JSON.stringify(this.tasks, null, 2);
    }

    fromJSON(json) {
        this.tasks = JSON.parse(json);
    }
}

// Example usage
if (require.main === module) {
    const todo = new TodoList();
    todo.addTask("Complete project", "Finish the todo list implementation");
    todo.addTask("Write tests", "Add unit tests for the TodoList class");
    todo.completeTask(1);
    console.log(todo.getTasks());
}

module.exports = TodoList;`;

    // React Frontend
    files['javascript/frontend/src/App.jsx'] = `import React, { useState } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                title: newTask,
                completed: false
            }
        ]);
        setNewTask('');
    };

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId 
                ? { ...task, completed: !task.completed }
                : task
        ));
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            
            <form onSubmit={addTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add new task..."
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        <span style={{ 
                            textDecoration: task.completed ? 'line-through' : 'none' 
                        }}>
                            {task.title}
                        </span>
                        <button onClick={() => removeTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;`;

    // CSS for React frontend
    files['javascript/frontend/src/App.css'] = `.App {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: Arial, sans-serif;
}

form {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

input[type="text"] {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
}

button {
    padding: 0.5rem 1rem;
    background: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background: #0052a3;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
}

li button {
    background: #dc3545;
    margin-left: auto;
}

li button:hover {
    background: #bb2d3b;
}`;

    // README
    files['README.md'] = `# Multi-Language Todo List Implementation

This project demonstrates a Todo List implementation in multiple programming languages.

## Features

- Task management (add, complete, remove)
- Persistence to JSON
- Multiple language implementations:
  - Python backend
  - Node.js/JavaScript backend
  - React frontend

## Getting Started

### Python Version
\`\`\`bash
cd python
python todo.py
\`\`\`

### JavaScript Version
\`\`\`bash
cd javascript
node todo.js
\`\`\`

### React Frontend
\`\`\`bash
cd javascript/frontend
npm install
npm start
\`\`\`

## Credits

Generated by GitHub Activity Bot
Created by: Ashraf Morningstar
GitHub: https://github.com/AshrafMorningstar`;

    return files;
}