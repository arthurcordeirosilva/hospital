interface Paciente{
    nome : string
    setor: string 
    prioridade?: "emergência" | "urgente"  | "preferencial"| "comum"

}


interface Ala{
    nome:string
    fila: Paciente []

}

interface Consultorio{
    nome:string
    pacientes:Paciente[]
    alas:Ala[]
    setor:Setor[]
}
interface Setor{
    setor:string
    pacientes: Paciente[]
}