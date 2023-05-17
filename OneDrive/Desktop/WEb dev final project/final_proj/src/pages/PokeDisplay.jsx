import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button"

import { useNavigate } from "react-router-dom"

function PokeDisplay(props) {
    const navigate = useNavigate();
    const home = () =>{
        navigate("/")
    }
    let pokeLink = `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`

  return (
    <Container>
        <Card style={{width: '18rem', justifyItems: "center" }}>
        <Card.Img variant="top" src={props.backendData.sprites.front_default} />
        <Card.Body style={{display:"inline", justifyItems: "center", alignItems: "start"}}>
            <Card.Title style={{textAlign: "center"}}>{props.pokemon}</Card.Title>
            <Card.Text style={{textAlign:"center"}}>
                ID: {props.backendData.id}
                <br/>
                WEIGHT: {props.backendData.weight}
                <br/>
                FIRST GAME: {props.backendData.game_indices[0].version.name}
            </Card.Text>
            <Button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={home} style={{justifyItems:"center", marginLeft: "90px"}}>Home</Button>
        </Card.Body>
        <Card.Link style={{textAlign: "center", paddingRight: "15px"}} href = {pokeLink}>Link Here</Card.Link>
        </Card>
    </Container>
  )
}

export default PokeDisplay