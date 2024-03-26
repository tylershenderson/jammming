import './App.css';
import React, {useState, useEffect} from 'react';
import Header from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults' 

export default function App() {
  return (
    <>
      <Header />
      <SearchResults />
    </>
  );
}

