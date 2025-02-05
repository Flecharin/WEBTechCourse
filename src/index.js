import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from "react-dom/client";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemList from "./components/item-status-filter";
import ItemStatusFilter from "./components/item-status-filter";

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Implement React App', important: true, id: 2},
        {label: 'Make notes from ur stud', important: false, id: 3},
        {label: 'Do not drink alcohol', important: false, id:4},
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);