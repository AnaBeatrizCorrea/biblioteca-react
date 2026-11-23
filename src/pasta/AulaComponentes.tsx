import Header from "../components/Header"
import CardLivros from "../components/CardLivros"

function App() {
  return(
    <div className="min-h-screen bg-gray-350">
      <Header/>
      <CardLivros titulo="1984" autor="George Orwell" categoria="Ficção Científica"/>
      <CardLivros titulo="O Senhor dos Anéis" autor="J.R.R. Tolkein" categoria="Fantasia"/>
      <CardLivros titulo="O Pequeno Príncipe" autor="Antoine de Saint-Exupéry" categoria="Infantil"/>
      <CardLivros titulo="O Hobbit" autor="J.R.R. Tolkein" categoria="Fantasia"/>
    </div>
  )
}

export default App