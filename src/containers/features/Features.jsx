import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: "Mensagens Rápidas",
    text: "Crie um banco de mensagens salvas e envie com um só clique, áudios, textos, fotos e arquivos de maneira prática  e rápida."
  },
  {
    title: "Funis Programados",
    text: "Á um clique de distância para o envio do seu funil automátizado, prepare seus fluxos de envio de mensagens programadas e deixe o resto com o software."
  },
  {
    title: "Filas de Atendimento",
    text: "Configure sua fila de atendimento para o setor que desejar, adicione quem serão os atendentes dessa fila e pronto, quando o cliente chamar, automaticamente será direcinado para as filas."
  },
  {
    title: "CRM Kanban",
    text: "Organize toda a sua base de clientes e contatos, faça a sua gestão, analise os relatórios, tudo isso com o nosso CRM Kanban."
  }
]

const Features = () => {
  return (
    <div className='tpro__features section__padding' id='features'>
      <div className="tpro__features-heading">
        <h1 className='gradient__text'>O futuro é agora e você só precisa realizá-lo. Entre no futuro hoje e faça acontecer.</h1>
        <a href="#plans"><p>Solicite acesso antecipado para Começar</p></a>
        
      </div>
      <div className="tpro__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features