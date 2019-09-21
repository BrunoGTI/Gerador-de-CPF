let cpf = []

function criarNumero() {
    return Math.floor(Math.random() * 9)
}
for (let i = 0; i <= 8; i++) {
    cpf.push(criarNumero())  
}

function calcularPrimeiro() {
    let multUm = [cpf[0] * 10, cpf[1] * 9, cpf[2] * 8, cpf[3] * 7, cpf[4] * 6, cpf[5] * 5, cpf[6] * 4,cpf[7] * 3, cpf[8] * 2 ]
    let somaUm = multUm[0] + multUm[1] + multUm[2] + multUm[3] + multUm[4] + multUm[5] + multUm[6] + multUm[7] + multUm[8]
    
    let restoUm = somaUm % 11
    if (restoUm <= 1) {
        restoUm = 0
    }

    let subtrairUm = 11 - restoUm
    if (subtrairUm >= 10){
        subtrairUm = 0
    }

    cpf.push(subtrairUm)
}

function calcularSegundo() {
    let multDois = [cpf[0] * 11, cpf[1] * 10, cpf[2] * 9, cpf[3] * 8, cpf[4] * 7, cpf[5] * 6, cpf[6] * 5, cpf[7] * 4, cpf[8] * 3, cpf[9] * 2]
    let somaDois = multDois[0] + multDois[1] + multDois[2] + multDois[3] + multDois[4] + multDois[5] + multDois[6] + multDois[7] + multDois[8] + multDois[9]
    
    let restoDois = somaDois % 11
    if (restoDois <= 1) {
        restoDois = 0
    }

    let subtrairDois = 11 - restoDois
    if (subtrairDois >= 10){
        subtrairDois = 0
    }

    cpf.push(subtrairDois)
}

criarNumero()
calcularPrimeiro()
calcularSegundo()
console.log("CPF", cpf.join([separador = '']))