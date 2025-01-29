import React from "react";
import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false},
        {label: 'Implement React App', important: true},
        {label: 'Make notes from ur stud', important: false},
        {label: 'Do not drink alcohol', important: false},
    ]
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = {todoData}/>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);