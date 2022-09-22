import React from 'react';
import Card from './StoreCard';

const Store = () => {

    let data = [
        {
            "id": 118,
            "name": "Evil Morty",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
        },
        {
            "id": 21,
            "name": "Aqua Morty",
            "status": "unknown",
            "species": "Humanoid",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
        },
        {
            "id": 165,
            "name": "Investigator Rick",
            "status": "Dead",
            "species": "Human",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/165.jpeg",
        },
        {
            "id": 254,
            "name": "Octopus Man",
            "status": "Alive",
            "species": "Humanoid",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/254.jpeg",
        },
        {
            "id": 128,
            "name": "Frankenstein's Monster",
            "status": "Dead",
            "species": "Alien",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/128.jpeg",
        }]


    return (
        <>
            <main className='container my-3'>

                <h4 className='fw-normal mb-3'>Todas las Cards</h4>

                {/* Cards-conteiner */}
                <section className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-2 g-md-3'>

                    {data.map((item, i) => <Card key={i} {...item} />)}

                </section>
                {/* --Cards-conteiner */}
    
            </main>
        </>
    );
}

export default Store;
