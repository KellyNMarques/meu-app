import React, { useEffect, useState } from 'react';

function Relogio() {
  const [horarioAtual, setHorarioAtual] = useState('');

  useEffect(() => {
    const atualizarRelogio = () => {
      const agora = new Date();
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const segundos = String(agora.getSeconds()).padStart(2, '0');
      setHorarioAtual(`${horas}:${minutos}:${segundos}`);
    };

    atualizarRelogio();
    const intervalId = setInterval(atualizarRelogio, 1000);

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div>
      <h2>Meu Relógio</h2>
      <div>{horarioAtual}</div>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
}

export default Relogio;

