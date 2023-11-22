const dataDoEvento = new Date("Nov 28, 2023 00:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const diasEmMs = 86400000;
    const horasEmMs = 3600000;
    const minutosEmMs = 60000;
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diasEmMs / horasEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horasEmMs / minutosEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutosEmMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Evento Expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
