import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'; 

import { useForm } from "../../hooks/useForms"
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const Search = () => {
  
  const navigate = useNavigate(); //Navega entre las páginas de la aplicación
  const location = useLocation(); // Accede a la ubicación actual

  // queryString permite analizar y manipular parámetros de consulta en una URL.
  // para extraer el valor del parámetro de consulta q de la URL actual. Si no se proporciona q, se establece un valor predeterminado de cadena vacía ('') en q.
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroByName( q );  // buscar héroes cuyos nombres coincidan con el valor de q

  // showSearch y showError, se utilizan para controlar la visualización de mensajes de búsqueda. es verdadero si la cadena q está vacía o solo contiene espacios en blanco
  const showSearch = (q.trim().length === 0); // Es verdadera si q está vacía o solo contiene espacios en blanco
  const showError  = (q.length > 0) && heroes.length === 0; // Es verdadera q no está vacía y no se encontraron héroes que coincidan

  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  
  // Esta fx se llama cuando se envía el formulario de búsqueda
  const handleSubmit = (e) => {
    // Evita que el formulario realice una recarga completa de la página
    e.preventDefault();

    // Si searchText quitando los espacios es menor a 0 no retorna nada
    // if(searchText.trim().length <= 1) return;

    // Al usar el useNavigate aqui y enviarle el queryparametro (?q=) le estoy enviando la palabra escrita en searchText a la url
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1 className="text-center text-light mt-3">Search</h1>
      <hr className="text-light" />

      <div className="row text-light">

        <div className="col-5">
          <h4 className="text-center">Searching</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control" 
              style={{padding: '16px'}}
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4 className="text-center">Results</h4>
          <hr />

          {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}

          <div className="alert alert-primary animate__animated animate__fadeIn"
          // Con esta expresion controlo el estilo css del formulario
            // Si showSearch es true, se establecerá display en una cadena vacía '' lo que significa que el elemento será visible y se mostrará el alert.
            // Si showSearch es false, entonces se establecerá display en 'none'. Esto oculta el alert.
            style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{ q }</b>
          </div>
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
