import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Dashboard} from './components/Dashboard'
import './App.css';

function App() {
  const Ul = styled.ul`
  list-style-type: none;
  padding: 0em;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 2rem;
  @media (max-width: 500px) {
    display: inline-flex;
    gap: 1rem;
  }
`;
const Li = styled.li`
  padding: 0.7rem 0rem;
  & > a {
    color: #000;
    font-weight: 600;
    text-decoration: none;
    
  }
  @media (max-width: 550px) {
    & > a {
      white-space: nowrap;
      background: #f7f7f7;
      padding: 0.2rem 1rem;
      border-radius: 1rem;
      border: 2px solid #d9d9d9;
      }
    }
  }
`;
  return (
    <div className="App">
      <h1>Toll Management System</h1>
      <Dashboard />

    </div>
  );
}

export default App;
