import React from "react";
import {useHistory} from "react-router-dom";

export const AboutPage: React.FC = () => {

    const history = useHistory()

    return (
        <>
            <h1>
                Страница информации
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ducimus iusto nulla, omnis possimus provident quibusdam sapiente sint temporibus voluptatum!</p>
            <button onClick={() => history.push('/')} className="btn">Обратно к списку дел</button>
        </>
    )
}