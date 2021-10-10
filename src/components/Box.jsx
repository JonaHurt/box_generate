import React, { useState } from 'react'

export const Box = ({div}) => {
    console.log(div)

    return (
        <>
        { div?.map((div,l)=>(
            <div className="d-inline-block">
            <div key={l} style={ { backgroundColor: div.bgcolor, height: div.heightdiv+'px', width: div.widthdiv+'px', margin:10}}>    
            </div>
            </div>
        ))}
        
        </>
        
    )
}
