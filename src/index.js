import React from "react";
import ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client";

//const element = React.createElement('hi', null, 'Hello React World');
const ToDoList = () => {
    const items = ['Learn React', 'Study Machine Learning', 'Get job in AirAstana', 'Have fun!']
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
            <li>{items[3]}</li>
        </ul>
    )
}
const AppHeader = () => {
    return <h1>My Todo List</h1>
}
const SearchPanel = () => {
    const searchText = 'Type here to search...';
    const searchStyle = {
        fontSize: '14px',
    };

    return <input style={searchStyle} placeholder={searchText} disabled={true} />;
}
const App = () => {
    //const value = '<script>alert ("")</script>';
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