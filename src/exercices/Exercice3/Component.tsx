import React from 'react';
import Miroir from "./Miroir";
import aventurierImage from '../../../public/aventurier.jpg';


export default function Exercice3(){

    return(
        <div className="card bg-dark border border-warning-subtle miroir">
            <Miroir imageSrc={aventurierImage} /> {/* Utilisation du composant Miroir */}
        </div>
    );
    
}