import React, { useState } from "react";
import { useDispatch } from "react-redux";

function SearchGiphy() {
  const dispatch = useDispatch();
  
  const [newGiphy, setNewGiphy] = useState([])

  function handleSubmit(event) {
    console.log("Handle that submit, foo!");
    event.preventDefault();
    dispatch({
      type: "GET_GIPHY",
      payload: newGiphy
    });
  }

function handleOnChange(event){
    setNewGiphy(event.target.value)
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} placeholder="Search"></input>
        <button type='submit'>SUBMIT</button>
      </form>
    </>
  );
}

export default SearchGiphy;

// make this into a form
// add payload to the dispatch
//create a var to capture input
//
