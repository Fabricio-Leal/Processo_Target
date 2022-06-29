const faturamento = require('./dados.json')


function menorValor(){

    let menorValor = 0
    
    faturamento.forEach(elemento =>{
        if(menorValor == 0){
            menorValor = elemento.valor
            

        }else if(menorValor > elemento.valor && elemento.valor != 0){           

            menorValor = elemento.valor            
        }
    })

    return menorValor
}

function maiorValor(){
    let maiorValor = 0
    
    faturamento.forEach(elemento =>{
        if(maiorValor < elemento.valor){
            maiorValor = elemento.valor
        }
    })

    return maiorValor
}


function mediaValor(){
    let diasAcimaMedia = 0
    let diasContabilizar = 0

    let fatMensal = 0
    
    
    faturamento.forEach(elemento =>{

        if(elemento.valor != 0) {
            fatMensal +=elemento.valor
            diasContabilizar += 1
        }        
    
    })

    let mediaFaturamento = fatMensal / diasContabilizar

    faturamento.forEach(elemento =>{
       
        if(elemento.valor > mediaFaturamento){
            diasAcimaMedia += 1
        }
    })

    return diasAcimaMedia

}

console.log(`O menor valor de faturamento ocorrido em um dia foi de R$ ${menorValor(faturamento).toFixed(2)}.`)
console.log(`O maior valor de faturamento ocorrido em um dia foi de R$ ${maiorValor(faturamento).toFixed(2)}.`)
console.log(`O faturamento diário ficou acima da média mensal em ${mediaValor(faturamento)} dias.`)
