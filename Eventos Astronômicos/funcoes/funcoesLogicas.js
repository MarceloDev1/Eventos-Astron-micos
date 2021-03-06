export const verificaChuvaOcorrendo = (chuva, data) => {
    const anoAtual = data.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    if ( dataInicio.getMonth() + 1 > dataFim.getMonth() + 1) {
        const anoFinal = dataFim.getFullYear();
        dataFim.setFullYear(anoFinal +1);
    }

    return ( data >= dataInicio && data <= dataInicio);
}

export const verificaProximaChuva = (chuva, data) => {
    const anoAtual = data.getFullYear();
    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataInicioLimite = new Date(data);

    if (data.getMonth() > dataInicio.getMonth()) {
        const anoFinal = dataInicio.getFullYear();
        dataInicio.setFullYear(anoFinal +1);        
    }

    dataInicioLimite.setMonth(dataInicioLimite.getMonth() + 2);

    return (data < dataInicio && dataInicio < dataInicioLimite);
}

export const inverteMesAno = (mesDia) => {
    const dataInvertida = mesDia.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0];
}


export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';

    if ( intensidade.indexOf('Forte') >= 0 ) {
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}

export const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';