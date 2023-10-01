import { heroes } from "../data/heroes"

// Esta funcion me sirve para retornar toda la informacion que contiene el heroe en el id y pasarla a otro componente
export const getHeroById = (id) => {
    
    // Con el find busco un heroe en particular con id, si el id no se encuentra regresa un undefined
    return heroes.find( heroe => heroe.id === id)

}
