import React, { useState, useEffect } from 'react'
import { Link, Outlet, useSearchParams} from "react-router-dom"; 

export default function Buscar() {

    let [searchParams, setSearchParams] = useSearchParams();
    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [load, setLoad] = useState('true');
    const arr = [];
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=400')
            .then((response) => response.json())
            .then((data) => setResult(
                data.results.map((item) => {
                    fetch(item.url)
                        .then((response) => response.json())
                        .then((allpokemon) => arr.push(allpokemon));
                    setPoke(arr);
                }),
            ));
    }, []);

    setTimeout(() => {
        setLoad(false);
    }, 2000);

      return (
        <main>
           <div className='pokemon'>
           <h1>Busca un pokemon por su Nombre :
           <input style={{width:"200px", height:"40px"}} value={searchParams.get('filter') || ""}
                onChange={(event) =>{
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    }else{
                        setSearchParams({});
                    }
                }}
            />
           </h1>
            
            { load ? (
              <h1>Cargando...</h1>
            ) :  (
              poke.filter((pokemon) => {
                let filter = searchParams.get('filter');
                if (!filter) return true;
                let name = pokemon.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
              }).map((pokemon, i) => (
                  <div className='tarjetaPoke'>
                    <Link to={"/buscarPokemon/" + pokemon.id}>
                      <div className='card' id={pokemon.types[0].type.name}  
                      name={pokemon.types[0].type.name}>
                        <p>ID: {pokemon.id} </p>
                        <p>TYPE: {pokemon.types[0].type.name.toUpperCase()}</p>
                        <br></br>
                        <h3><b>{pokemon.name.toUpperCase()}</b></h3>
                        <img className='imagen' src={pokemon.sprites.other.dream_world.front_default}/>
                      </div>
                    </Link>
                  </div>
              ))
            )}
            <Outlet/>
          </div>
          </main>  
      );
    }