import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function GiphyList(){
    const dispatch = useDispatch();

    const giphyList = useSelector(store => store.giphyList);

    useEffect(()=>{
       dispatch({type:'GET_GIPHY'})
   
    },[]);
    console.log('looking at giphy list', giphyList.data[0].url )
    
    return (
        <>
        <div>
            <h3>LIST OF GIPHYS</h3>
            <img src={giphyList?.data?.index?.images?.original?.url}/>
            <ul>
                {/* {giphyList.map((giphy) => {
                    return (<li key={giphy.id}>{giphy.url}</li>
                    )
                })} */}
            </ul>

        </div>
        </>
    )
}

export default GiphyList;