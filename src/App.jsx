import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const cards = [
    {
      url: "https://hips.hearstapps.com/hmg-prod/images/raza-perro-pequen-o-yorkipoo-646c6df595f5c.jpeg",
      nombre: "rosco",
      descripcion: "Perro adorable, familiar, jugueton y sociable.",
      tags: [{text: "Mestizo", color: "primary"}]
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_NP_653967-MLA26837100193_022018-O.webp",
      nombre: "puppy",
      descripcion: "Perro jugueton, inquieto, mordelon, sociable.",
      tags: [{text: "mestizo", color: "success"}]
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_NP_936609-MLA72340042514_102023-O.webp",
      nombre: "Panzer",
      descripcion: "Perro mañoso, independiente, dormilon.",
      tags: [{text: "puddle toy", color: "danger"}]
    }
  ]


  return (
    <>
      <div>
        <Header title="Adopta un Perrito"/>
        <div className='container mt-3'>
          <div className='row'>
            {cards.map((card, index) => (
              <div className='col-md-4' key={index}>
                <MyCard {...card}/>
              </div>
            ))}
          </div>
        </div>
        <Footer 
          ending="Somos una organización dedicada a encontrar hogares amorosos para mascotas sin hogar. Creemos que cada animal merece una segunda oportunidad y trabajamos incansablemente para asegurarnos de que cada mascota encuentre el hogar perfecto."
          copyright="&copy; 2024 Adopta una Mascota. Todos los derechos reservados."
        />
      </div>

    </>
  )
}

export default App
