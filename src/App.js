import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import SearchResults from './SearchResults' 

export default function App() {
  return (
    <>
      <Header />
      <SearchResults />
    </>
  );
}

