
//variables global
//Eléments mémoire et écran 
function calculer(nbr1,nbr2,operation){
    
    nbr1 = parseFloat(nbr1);
    nbr2= parseFloat(nbr2);
    if(operation === "+" ) return  nbr1 + nbr2;
    if(operation === "-" ) return  nbr1 - nbr2;
    if(operation === "*" ) return  nbr1 * nbr2;
    if(operation === "/" ) return  nbr1 / nbr2;
    
    
    
}


const memoireE = document.querySelector("#memoire");
const ecranE = document.querySelector("#ecran");

//On stock l'operation 
let operation = null;
//On stock l'affichage
let affichage = "";

//On stock la valeur de l'écran "precedent "
let precedent = 0;

//On intialise la memoire 
let memoire ;

window.onload = () => {
    //On ecoute les clics sur les touches 
    let touches = document.querySelectorAll("span");
    for(let touche of touches){
        touche.addEventListener("click",gererTouches);
        
    }
    
    
}
// cette fonction reagit au clic sur les touches

function gererTouches(){
    
    let   touche = this.innerText;
    console.log(touche);
    //On vérifier si chiffre ou '.'
    if(parseFloat(touche) >= 0 || touche === "." ){
        console.log(touche);
//On met a jour la valuer d'affichage et on affiche sur l'ecran
//pour amaliore affichage : si affichage est vide dans ce cas la en recupperer la touche
//sinon on concatine  avec ce qui deja en affichage
affichage = (affichage === "")?touche.toString():affichage + touche.toString();
ecranE.innerText =affichage;
}else{
    
    switch(touche) {
        //Touch C réinitialise tout
        case"C":
        precedent = 0;
        affichage = "";
        operation = null;
        ecranE.innerText = 0;
        break;
        
        //Calculs
        case "/":
            case "+":
                
                case "-":
                    case "*":
                        //calcule la valeur resultat de etape precedent
                        precedent = (precedent === 0)? parseFloat(affichage):calculer(precedent,parseFloat(affichage),operation);
                        //on met a jour l'ecran
                        ecranE.innerText = precedent;
                        //on stocke l'operation
                        operation = touche;
                        //on einitialise la varaible d'afficage
                        affichage="";
                        
                        
                        break;
                        
                        case "=":
                            //calcule la valeur resultat de etape precedent
                            precedent = (precedent === 0)?  (affichage):calculer(precedent,parseFloat(affichage),operation);
                            //on met a jour l'ecran
                            ecranE.innerText = precedent;
                            
                            //on stock le resultat dans la variable d'affichage pour relancer le calcule derriere
                            affichage=precedent;
                            //On reilitialise precedent
                            
                            
                            precedent = 0 
                            
                            
                            break;
                            
                            
                            
                            
                            
                            
                        }
                        
                    }
                    
                }
                
                
                
                
                
                