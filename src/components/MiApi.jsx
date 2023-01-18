import { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"


const Leerapi = () => {

// declaracion de variables par useState
const [infoApi, setInfoApi] = useState([]) // variable que consulta Api
const [buscarPersonaje, setBuscarPersonaje] = useState('') // Variable del personaje que busca el usuario
const [listaFiltrada, setListaFiltrada] = useState([]) // resultado de busqueda del usuario

useEffect(() => {
    consultarApi()
    
}, [])

//Función que lee API
const consultarApi = async () => {

    const url = 'https://rickandmortyapi.com/api/character'
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    const dataOrdenada = data.results.sort((a, b) => a.name.localeCompare(b.name)) //variable con funcion que ordena la informacion
    setInfoApi(dataOrdenada)
    console.log(dataOrdenada)
}

//Función para buscar personaje
const buscar = (e) => {

    setBuscarPersonaje(e.target.value)
    const nuevoListado = infoApi
    const buscado = nuevoListado.filter(personaje => personaje.name === buscarPersonaje)
    setListaFiltrada(buscado)
}

return (
    
    <div className='principal'>
        <div className='buscador'>
            <strong>Escribe el Nombre del Personaje que buscas: </strong><input type='text' placeholder="buscar..." onChange={buscar} />
        </div>
        <hr></hr>
        <div className='tarjetas'>
            {listaFiltrada.length === 0 ?
            infoApi.map(personaje => // muestra card de todos los personajes si no estan filtrado
                <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" key={personaje.id} style={{ width: "21rem" }}>
                <Card.Img className="rounded-circle m-2" variant="top" src={personaje.image} style={{ width: "286px", height: "300px"}}/>
                <Card.Body>
                <Card.Title><strong>{personaje.name}</strong></Card.Title>
                <Card.Text className="bg-success rounded text-light">
                <p>{personaje.species}</p>
                <p>{personaje.gender}</p>
                </Card.Text>
                </Card.Body>
                </Card>
                ) : listaFiltrada.map(personaje => // muestra card del personaje filtrado
                <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" key={personaje.id} style={{ width: "21rem" }}>
                <Card.Img className="rounded-circle m-2" variant="top" src={personaje.image} style={{ width: "286px", height: "300px"}}/>
                <Card.Body>
                <Card.Title><strong>{personaje.name}</strong></Card.Title>
                <Card.Text className="bg-success rounded text-light">
                <p>{personaje.species}</p>
                <p>{personaje.gender}</p>
                </Card.Text>
                </Card.Body>
                </Card>)}
        </div>
    </div>
)
}

export default Leerapi;