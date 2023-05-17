import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import { useState } from "react"

import {useNavigate } from "react-router-dom";
function PokeSearch(props) {

    const navigate = useNavigate();
    const pokeDis = () =>{
        navigate("/pokemonDisplay")
    }

    const[text,setText]= useState('');
    const handleChange = (e) => setText(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()

        if(text == ''){
            alert('Please Enter something!')
        }
        else {
           console.log(text);
           props.setPokemon(text);
            setText('');
            pokeDis();
        }
    }

    let pokeLink = "https://pokeapi.co/api/v2/pokemon/charizard";
  return (
    <div className="flex justify-items-center grid 2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-8 gap-8">
        <div className="w-100">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input size="65" type="text" className="m-1 bg-gray-200 input input-lg text-black" placeholder="Search" value = {text} onChange={handleChange} />
                        <button className="absolute top-0 right-0 rounded-l-none width-36 btn btn-lg mt-4"  type="submit" onSubmit={handleSubmit}>Go</button>
                    </div>
                </div>
            </form>
        </div>
        <br/>

    </div>
  )
}

export default PokeSearch