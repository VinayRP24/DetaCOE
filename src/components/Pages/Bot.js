import React from 'react'
import './Bot.css'
import SearchPhotos from '../searchPhotos'

function Bot () {
    return(
        <>
            <div className="App">
                <div className="container">
                    <h1 className="title">Photo Search</h1>
                    <SearchPhotos />
                </div>
            </div>
        </>
    )
    
}

export default Bot;