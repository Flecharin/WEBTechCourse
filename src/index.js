import React from "react";
import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";

//const element = React.createElement('hi', null, 'Hello React World');
const ToDoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Study Machine Learning</li>
            <li>Get job in AirAstana</li>
            <li>Have fun!</li>
        </ul>
    )
}
const AppHeader = () => {
    return <h1>My Todo List</h1>
}
const SearchPanel = () => {
    return <input placeholder="Search..." />
}
const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ToDoList />
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);