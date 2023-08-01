import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Form from "../components/Form";
import TodoList from "../components/TodoList";

const Main: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <TodoList />
    </Layout>
  );
};

export default Main;
