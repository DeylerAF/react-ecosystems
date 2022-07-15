import React from "react";
import { hot } from "react-hot-loader";
import styled, { createGlobalStyle, injectGlobal } from "styled-components";
import TodoList from "./todos/TodoList";




const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #d0d0d0;
  width: 100vw;
  height: 100vh;
`;

const App = () => (
    <AppContainer>  
      <TodoList />
    </AppContainer>
  
);

export default hot(module)(App);
