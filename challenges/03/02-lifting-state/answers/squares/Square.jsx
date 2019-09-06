import React from "react";

const Square = ({ selected, handleClick, colour }) => (
    <div
        style={{
            width: 200,
            height: 200,
            background: selected ? colour : "red",
        }}
        onClick={ handleClick }
    />
);

export default Square;
