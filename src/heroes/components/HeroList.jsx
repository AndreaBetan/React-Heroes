import { useMemo } from "react";
import { getHeroByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";


export const HeroList = ({publisher}) => {

    // El useMemo guarda el valor del calculo de la fx, el cual solo se va a actualizar cada que el publisher cambie
    // Si no necesitara el use memo la constante se definiria asi:
    // const heroes = getHeroByPublisher (publisher)
    const heroes = useMemo( () => getHeroByPublisher (publisher), [ publisher ] );
        
    return (

        <div className="row rows-cols-1 row-cols-md-3 g-3">
        
            { 
                heroes.map( heroe => (
                    
                    <HeroCard 
                        key={heroe.id}
                        // Al hacer el ... envio todas las propiedades que tiene el objeto desestructurado (id, publisher.. etc)
                        {...heroe}
                    /> 
                
                ))
            }
        </div>
    )   
        
}
