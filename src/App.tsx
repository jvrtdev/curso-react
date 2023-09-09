import Header from "./components/Header";
import Aluno from "./components/Aluno";
import Footer from "./components/Footer";

function App() {
  return(
    <div>
        <Header title="Aprendendo do zero ao avançado!" />
        <Aluno nome="Vitoria Caroline" idade={18} />

        <Aluno nome="João Vitor" idade={20} />

        <Aluno nome="Thiagão" idade={37} />

        <Footer />
    </div>
  )
}
//para numeros é usado o {} para passar as props e para string " " 


export default App