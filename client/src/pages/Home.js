import React from "react";
import Input from "../components/cards/Input";
import Profile from "../components/cards/Profile";
import List from "../components/cards/List";

const Home = () => {
  return (
    <div className="container">
      <div className="dashboard">
        <Input />
        <Profile />
      </div>
      <div className="list">
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default Home;
