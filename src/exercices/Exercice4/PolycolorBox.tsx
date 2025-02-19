import React, { useState } from 'react';
import './../../App.css';



// Définition du composant fonctionnel PolycolorBox
const PolycolorBox = () => {

    // Utilisation du hook useState pour gérer un tableau de couleurs, 
    // initialisé avec 3 couleurs grises ('grey')
    const [colors, setColors] = useState(['grey', 'grey', 'grey']);

    // Fonction pour changer la couleur d'une boîte spécifique
    const changeColor = (index, color) => {
        const newColors = [...colors];
        newColors[index] = color;
        setColors(newColors);
    };

    return (
        <div className="row mt-5 gap-5">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="boite"
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    );
};

const ColorButton = ({ color, indices, setColors }) => {
    return (
        <button
            className={`btn btn-${color}`}
            onClick={() => {
                indices.forEach(index => setColors(index, color));
            }}
        >
            🪄 Change {indices.length === 1 ? 'la' : 'les'} {indices.length} boîte{indices.length > 1 ? 's' : ''} en {color}
        </button>
    );
};

export default function Exercice4() {
    return (
        <section id="exercice4" className="my-5">
            <h2>Les boîtes polycouleurs</h2>
            
            <div className="row">
                <div className="col">
                    <ColorButton color="danger" indices={[0]} setColors={PolycolorBox.prototype.changeColor} />
                </div>
                <div className="col">
                    <ColorButton color="primary" indices={[0, 1]} setColors={PolycolorBox.prototype.changeColor} />
                </div>
                <div className="col">
                    <ColorButton color="success" indices={[0, 1, 2]} setColors={PolycolorBox.prototype.changeColor} />
                </div>
            </div>
            
            <PolycolorBox />
        </section>
    );
    
        }


