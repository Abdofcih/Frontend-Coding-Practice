import React from "react";
import "./App.css";
import Form from "./components/Form";
import UsersList from "./components/UsersList";
function App() {
  return (
    <main className="App">
      <h2 data-testid="title" className="title bg-color-main">
        Testing Redux
      </h2>
      <Form />
      <UsersList />
    </main>
  );
}

export default App;
