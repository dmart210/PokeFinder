import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useEffect,useState } from "react";
import axios from "axios";
import Navbar from "./components/layout/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import PokeDisplay from "./pages/PokeDisplay";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function App() {

  const [backendData, setBackendData] = useState("");
  const [pokemon, setPokemon] = useState("charizard");

  console.log(backendData);
  useEffect (()=>{
    axios.get(`/${pokemon}`).then((response)=>{
      setBackendData(response.data);
    })
  },[pokemon])


  return (
    <Router>
        <div className="flex flex-col justify-between h-screen ">
          <Navbar/>
          <Container fluid style={{display: "flex", justifyContent: "center"}}>
            <Row>
              <Col>
                {/* <main className = "container mx-auto px-auto pb-12 align-items-start"> */}
                  <Routes>
                    <Route path = "/" element = {<Home
                      backendData = {backendData} 
                      setBackendData = {setBackendData}
                      pokemon = {pokemon}
                      setPokemon = {setPokemon} />} />
                    <Route path = "/about" element = {<About />} />
                    <Route path = "/pokemonDisplay" element = {<PokeDisplay pokemon = {pokemon} backendData = {backendData}/>}/>
                  </Routes>
                {/* </main> */}
              </Col>
              </Row>
            </Container>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
