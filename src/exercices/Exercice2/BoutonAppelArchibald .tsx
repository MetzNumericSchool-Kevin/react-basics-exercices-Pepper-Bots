

export default function BoutonAppelArchibald({ quandSorcierRepond }){

    function onClickHandler(){

        quandSorcierRepond("🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !")
    }

        return (
        
        <button  className="btn btn-primary" onClick={onClickHandler}>🛎️ Appeler Archibald</button>
    );
    }












