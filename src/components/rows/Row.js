import React from "react";
import "../../styling/row/Row.css";

function Row(props) {

    const { imagePath, altPath, className, key, onClick } = props;

    return (

        <img id={key} onClick={onClick} className={className} src={imagePath} alt={altPath} />

    );
}

export default Row;


/* {movies.map((movie) => {
return <img src={`${baseURL}${movie.poster_path}`} alt="" />
})} */