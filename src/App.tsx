function App() {
  return(
    <div>
        <h1>Meu projeto</h1>
        <Aluno nome="Vitoria Caroline" idade={18} />

        <Aluno nome="João Vitor" idade={20} />

        <Aluno nome="Thiagão" idade={37} />
    </div>
  )
}
//para numeros é usado o {} para passar as props e para string " "
interface AlunoProps{
    nome: string;
    idade: number;
}

function Aluno({ nome, idade }: AlunoProps) {
    return(
    <div>
      <h1>Aluno: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </div>
  )
}

export default App