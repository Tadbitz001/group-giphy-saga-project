import React, {useState} from 'react';
import  {useDispatch} from 'react-redux';


function SearchGiphy(){

  const dispatch = useDispatch();

    function handleSubmit(){
        console.log('Handle that submit, foo!')

    
    }

    return(
        <>
       <div>

       <input type='text' placeholder="Search"></input>
        <button onClick={handleSubmit}>SUBMIT</button>
       </div>

        </>
    )
}

export default SearchGiphy;