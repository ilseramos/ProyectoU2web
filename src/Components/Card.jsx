import React from "react";

const Card = ({ pokemon, Cargando,infoPokemon}) => {
    return (
        <>
        {
            Cargando ? <h1>Cargando...</h1> :
            pokemon.map((item) => {
            return (
                <>
                <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                <h1>{item.id}</h1>
                <img src={item.sprites.front_default} alt="" />
                <h2>{item.name}</h2>
                </div>
                </>
                   )
                })
        }
        </>
    )
}
export default Card;