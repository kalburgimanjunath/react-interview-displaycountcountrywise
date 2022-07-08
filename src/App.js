import React from 'react';
import './style.css';
import { Sidebar, Container } from './components/index';
import { BrowserRouter } from 'react-router-dom';
export default function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content_area">
        <Container />
      </div>
    </div>
  );
}
