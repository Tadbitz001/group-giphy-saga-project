import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function GiphyList(){
    const dispatch = useDispatch();

    const giphyList = useSelector(store => store.giphyList);

    useEffect(()=>{
       dispatch({type:'GET_GIPHY'})
    },[]);


    return (
        <>
        <div>
            <h3>LIST OF GIPHYS</h3>
            <ul>
                {giphyList.map((giphy) => {
                    return (<li key={giphy.id}>{giphy.name}</li>
                    )
                })}
            </ul>

        </div>
        </>
    )
}

export default GiphyList;