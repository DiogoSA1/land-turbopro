import React from 'react';
import './plans.css'; // Opcional: para estilização

const Plans = () => {
  const plans = [
    {
      name: 'Plano Básico',
      price: 'R$ 127/mês',
      from: 'R$ 197/mês',   
      features: ['2 usuários por licença', '1 conexão com whatsapp', '*R$49,90 conexão extra', 'Acesso ao Kanban', 'Máximo de 2 filas', 'Envio de funis programados', 'Acesso ao CHAT GPT', 'Agendamentos de mensagem']
    },
    {
      name: 'Plano Pro',
      price: 'R$ 297/mês',
      from: 'R$ 397/mês',
      features: ['6 usuários por licença', '2 conexão com whatsapp', '*R$49,90 conexão extra', 'Acesso ao Kanban', 'Máximo de 4 filas', 'Envio de funis programados', 'Acesso ao CHAT GPT', 'Agendamentos de mensagem']
    },
    {
      name: 'Plano Premium',
      price: 'R$ 397/mês',
      from: 'R$ 497/mês',
      features: ['12 usuários por licença', '3 conexão com whatsapp', '*R$49,90 conexão extra', 'Acesso ao Kanban', 'Filas Ilimitadas', 'Envio de funis programados', 'Acesso ao CHAT GPT', 'Agendamentos de mensagem']

    },
  ];

  return (
    <div id="plans" className="plan-section">
      <div className="tpro__footer-heading">
        <h2 className='gradient__text'>Escolha Seu Plano</h2>
      </div>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card" id={"plano-" + index}>
            <h3>{plan.name}</h3>
            <span>De <del>{plan.from}</del> por apenas</span>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="select-plan-button">Selecionar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
