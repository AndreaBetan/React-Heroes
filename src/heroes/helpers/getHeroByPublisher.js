import { heroes } from "../data/heroes.js";

// Crear una fx para verificar que los editores sean de DC y Marvel ya que son los que estoy usando para la App
export const getHeroByPublisher = ( publisher ) => {
    
    const validPublishers = ['DC Comics','Marvel Comics'];

    // Si validPublisher no incluye el publisher que estoy enviando como argumento (Es decir, si no es de DC o Marvel) genere un error
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }
    
    // Si existe, filtro siempre y  cuando el heroe sea igual al publisher que estoy enviando como argumento
    return heroes.filter( heroe => heroe.publisher === publisher);
}
