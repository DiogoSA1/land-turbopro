import React from 'react'
import './WhatPRO.css'
import Feature from '../../components/feature/Feature'

const WhatPRO = () => {
  return (
    <div className='tpro__whattpro section__margin' id='whttpro'>
      <div className="tpro__whattpro-feature">
        <Feature title="O que é TurboPROO" text="Na TurboProo, acreditamos que o futuro dos negócios é moldado pela inteligência, inovação e agilidade. Somos uma equipe de visionários e especialistas, dedicados a criar soluções que transformam a maneira como empresas se conectam, crescem e alcançam seus objetivos. Nosso propósito é simples, mas poderoso: acelerar o sucesso de nossos clientes." />
      </div>
      <div className="tpro__whattpro-heading">
        <h1 className='gradient__text'>As possibilidades estão além da sua imaginação</h1>
        {/* <p>Explorar a Insights</p> */}
      </div>  
      <div className="tpro__whattpro-container">
        <Feature title="Chatbots" text="Transforme a experiência do seu cliente com chatbots de atendimento inteligentes! Proporcionando respostas rápidas, atendimento 24/7 e integração perfeita com suas plataformas, nossos chatbots revolucionam a maneira como você se conecta com seu público."/>
        <Feature title="TURBOPROO CRM" text="Eleve o relacionamento com seus clientes a um novo patamar com um sistema de CRM poderoso e intuitivo! Centralize todas as interações, personalize atendimentos e tome decisões estratégicas baseadas em dados precisos. Com um CRM eficiente, você não apenas melhora a gestão do seu pipeline de vendas, mas constrói conexões duradouras"/>
        <Feature title="Kanban" text="Maximize a produtividade e o fluxo de trabalho da sua equipe com a metodologia Kanban! Visualize tarefas, gerencie prioridades e acompanhe o progresso de projetos em tempo real, garantindo eficiência e flexibilidade. Com o Kanban, você transforma processos complexos em etapas claras e organizadas, mantendo todos alinhados e focados no que importa."/>
      </div>
    </div>
  )
}

export default WhatPRO