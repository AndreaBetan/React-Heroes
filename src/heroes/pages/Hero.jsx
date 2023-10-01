import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const Hero = () => {

    // Por medio del useParams puedo acceder al id que estoy enviando como parametro en el path para acceder a la url del heroe
    const { id } = useParams();
    const navegate = useNavigate();

    // Esta fx almacena toda la info del heroe por id, cuando le paso como parametro el id del params trae toda la info de ese heroe
    const hero = useMemo( () => getHeroById (id), [id]);
    // console.log(hero);

    
    // El -1 navega a la pg anterior
    const onNavigateBack = () => navegate(-1)


    if (!hero) {
        return (<Navigate to={'/marvel'} />)
    };


    return (
        <div className="container" style={{ maxWidth: '60%' }}>
            <div className="card bg-black m-5 text-white">
                <div className="row g-0 container">

                    <div className="col-md-6">
                        <img 
                            src={`/assets/heroes/${id}.jpg`} 
                            className="img-fluid rounded-start animate__animated animate__fadeInLeft" alt="Img Superhero"
                            style={{width: '100%', height: '100%'}} />
                    </div>

                    <div className="col d-flex flex-column justify-content-between m-3">
                        <div className="card-body">
                            <h2 className="card-title m-2">{hero.superhero}</h2>
                            <p className="card-text m-2"><strong> Alter ego: </strong>{hero.alter_ego}</p>
                            <p className="card-text m-2"><strong> First Appearance: </strong>{hero.first_appearance}</p>
                            <hr />
                            <h5 className="card-text m-2"><strong> Character: </strong> </h5>
                            <p className="card-text m-2"> {hero.characters} </p>
                        
                        </div>
                        <div className=" card-footer d-flex justify-content-end">

                            <button type="button" className="btn btn-outline-danger" onClick={onNavigateBack}>Back Home</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
