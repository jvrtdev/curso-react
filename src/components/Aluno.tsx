import "./Aluno.css"

interface AlunoProps{
    nome: string;
    idade: number;
}

function Aluno({ nome, idade }: AlunoProps) {
    return(
    <div className="container">
      <h1>Aluno: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </div>
  )
}

export default Aluno