import BoutonAppelArchibald from "./BoutonAppelArchibald "

export default function Exercice2(){
    return(
        <section id="exercice2">
            <h2>Si je ne suis pas là, faites sonner la cloche !</h2>
            <BoutonAppelArchibald  quandSorcierRepond={function (message) {alert(message)}}/>
        </section> 
    );
}