import React from "react";
import { useSelector } from "react-redux";
import "./ErrorPage.css"


function ErrorPage() {
    const {lang} = useSelector(state => state)

    return (
        <div >
            <div className="showError">
                {lang == "EN" ? "Oh! Something is wrong" : "¡Uy! Algo salió mal"}
                <button className="paperButton">{lang == "EN" ? "Back" : "Volver"}</button>
            </div>
        </div>
    );
}

export default ErrorPage;