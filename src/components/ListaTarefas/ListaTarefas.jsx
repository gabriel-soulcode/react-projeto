import React, { useState } from 'react';
import Tarefa from '../Tarefa/Tarefa';

const atividades = [
  { descricao: "Estudar React.js", concluida: false },
  { descricao: "Academia 06:30", concluida: false },
  { descricao: "Lavar o carro", concluida: true },
  { descricao: "Finalizar relatório", concluida: false },
]

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState(atividades);

  function concluirTarefa(index) {
    const tarefasCopia = [...tarefas];
    tarefasCopia[index].concluida = true;
    setTarefas(tarefasCopia);
  }

  return (
    <div>
      {tarefas.map((tarefa, index) => (
        // <Tarefa key={index} descricao={tarefa.descricao} concluida={tarefa.concluida} />
        <>
          <button onClick={() => concluirTarefa(index)}>Concluir</button>
          <Tarefa key={index} {...tarefa} />
        </>
      ))}
    </div>
  )
}
