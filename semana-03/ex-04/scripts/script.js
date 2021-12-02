// Exercicio 04

// Construa uma página HTML contendo um texto que informa o horário no momento de acesso, no formato “23:59” (HH:mm).

const imprimir = () => {
    const data = new Date();
    const horas = data.getHours();
    let minutos = data.getMinutes();
    const inserirTempo = document.getElementById("horario");

    minutos = minutos < 10 ? "0" + minutos : minutos;
    inserirTempo.value = `${horas}:${minutos}`;
};

imprimir();