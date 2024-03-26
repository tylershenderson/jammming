import React, { useState, useEffect } from "react";

export default function SearchBar(){
    const [search,setSearch] = useState("");
    function handleChange(e){
       setSearch(e.target.value)     
    } 
    return (
        <div>
           <form>
            <input type="text" onChange={handleChange} value={search}></input>
            <button type="submit">Search</button>
           </form>
        </div>
    )
}