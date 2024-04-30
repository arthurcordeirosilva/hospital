// Importa a função de triagem
import { triagem } from './hospital-lib';


// Filas de triagem para cada setor médico
const triagemClinicoGeral = [];
const triagemOrtopedista = [];
const triagemCardiologista = [];

// Função para encaminhar pacientes para triagem

function encaminharParaTriagem(paciente) {
    switch (paciente.setor) {
        case 'Clínico Geral':
            triagemClinicoGeral.push(triagem(paciente));
            break;
        case 'Ortopedista':
            triagemOrtopedista.push(triagem(paciente));
            break;
        case 'Cardiologista':
            triagemCardiologista.push(triagem(paciente));
            break;
        default:
            console.log('Setor médico inválido');
    }
}

 //Função para simular a consulta

function realizarConsulta(paciente) {
    console.log(`Paciente ${paciente.nome} está sendo atendido pelo médico ${paciente.setor}`);
    //Lógica da consulta e diagnóstico final
}

 //Simulação do fluxo de pacientes
const pacientes.forEach(paciente => {
    encaminharParaTriagem(paciente);
});

 //Simulação da chamada para consulta
 //Supondo que todos os pacientes da fila de triagem serão atendidos imediatamente
triagemClinicoGeral.forEach(realizarConsulta);
triagemOrtopedista.forEach(realizarConsulta);
triagemCardiologista.forEach(realizarConsulta);