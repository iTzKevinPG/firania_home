import * as React from 'react';
import "./Items.css";

export default function Items(props){
    return(
        <div className="ItemsContainer">
            <a className={`Item ${ActiveItem(props.currentRoute, "Home")}-Item`} href="/Home">Home</a>
            <a className={`Item ${ActiveItem(props.currentRoute, "Garden")}-Item`} href="/Garden">Jardin</a>
            <a className={`Item ${ActiveItem(props.currentRoute, "Kitchen")}-Item`} href="/Kitchen">Cocina</a>
            <a className={`Item ${ActiveItem(props.currentRoute, "Living")}-Item`} href="/Living">Sala</a>
        </div>
    );
}

function ActiveItem(pathName, item) {
    if (pathName.includes("Home") && item === "Home") {
        return `active ${pathName}`;
    }
    if (pathName.includes("Garden") && item === "Garden") {
        return `active ${pathName}`;
    }
    if (pathName.includes("Kitchen")&& item === "Kitchen") {
        return `active ${pathName}`;
    }
    if (pathName.includes("Living")&& item === "Living") {
        return `active ${pathName}`;
    }
    return pathName;
}