import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function GiphyList(){
    const dispatch = useDispatch();

    const giphyList = useSelector(store => store.giphyList);

    useEffect(()=>{
       dispatch({type:'GET_GIPHY'})
   
    },[]);
    console.log('looking at giphy list', giphyList.data )
    
    return (
        <>
        <div>
            <h3>LIST OF GIPHYS</h3>
            {/* <img src={giphyList?.data[0]?.images?.original?.url}/> */}

            <ul>
                {giphyList.data && giphyList.data.map((giphy) => {
                    return ( <img src={giphy.images.original.url} />
                    )
                })}
            </ul>

        </div>
        </>
    )
}

export default GiphyList;