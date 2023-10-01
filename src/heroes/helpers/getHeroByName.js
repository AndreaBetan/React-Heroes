import { heroes } from "../data/heroes";

// Funcion creada para verificar si el nombre buscado en search se encuentra en la data de heroes
export const getHeroByName = ( name = '' ) => {

    // name es el valor ingresado, se pasa a miniscula y se quitan los espacios en blanco adelante y atras
    name = name.toLocaleLowerCase().trim();
    
    // Si name no tiene longitud retorna un arreglo vacio
    if (name.length === 0) return [];

    // Se recorre heroes filtrando el nombre (superhero) en miniscula y comparandolo con el name enviado
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ))
}