import React from "react";
import './Paginado.css'


export default function Paginado({ dogsPerPage, allDogs, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className='paginado'>
                {pageNumbers.length > 1 &&
                    pageNumbers.map(number => (
                        <li key={number}>
                            <button onClick={() => paginado(number)}><strong>{number}</strong></button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}