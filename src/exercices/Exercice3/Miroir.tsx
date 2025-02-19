import React, { useState } from "react";


function Miroir({imageSrc}) {

    const [hasReflet, setReflet] = useState(false);

    const styleMiroir = hasReflet ? { opacity: 1 } : { opacity: 0 };

    return (
        <div className="card bg-dark border border-warning-subtle miroir">
            <img 
            src={imageSrc}
            className="card-img-top img-fluid"
            style={styleMiroir}
            onMouseEnter={() => setReflet(true)} 
            onMouseLeave={() => setReflet(false)} 
            />
            <div className="card-body">
            <h5 className="card-title">Miroir mon beau miroir</h5>
            <p className="card-text">Quel est mon reflet ?</p>
            </div>
        </div>
    );
}

        
export default Miroir;