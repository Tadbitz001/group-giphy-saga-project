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
                {/* the below syntax would be the correct conditional rendering needed to get our images to show.  
                    what this is saying is giphyList has .data, then it is able to map() the list of giphies
                        we need this because of the useEffect
                            this reads 'if giphyList.data is true, then giphy.List.data will map(giphy)(loop**)because of using giphyList.data
                                we didnt need to return .data, just images.original.url */}
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