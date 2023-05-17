import PokeSearch from "../users/PokeSearch"
function Home(props) {
  return (
    <div style={{paddingLeft: "32rem"}}>
      <h1 className="text-6xl"><PokeSearch 
        backendData ={props.backendData} 
        setBackendData = {props.setBackendData}
        pokemon = {props.pokemon}
        setPokemon = {props.setPokemon}
        /></h1>

    </div>
  )
}

export default Home