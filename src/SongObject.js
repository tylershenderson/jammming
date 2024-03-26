import React, { useState, useEffect } from "react";

export default function SongObject(props){
    const [src, title, artist] = props
        return(
            <div>
                <img src={src}></img>
                <div>
                <p>{title}</p>
                <p>{artist}</p>
                </div>
            </div>
        )
}