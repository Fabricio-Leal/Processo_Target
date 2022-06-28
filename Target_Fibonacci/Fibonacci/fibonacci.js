
function fibonacci() {

    let numUsuario = document.getElementById('numero').value

    let fibo = []
    let resultado = 0
    let firstNum = 1
    let secondNum = 0
    for(i = 0; i < numUsuario; i++) {
       fibo.push(secondNum)    
       resultado = firstNum + secondNum
       secondNum = firstNum
       firstNum = resultado                     
    }
       
    let confirmacao = false
    fibo.forEach(valor => {        
        if(numUsuario == valor) {
            confirmacao = true
        }        
    })

    let fiboResultado = document.getElementById('resultado')

    if(confirmacao == true) {        
        fiboResultado.innerHTML = "O número informado pertence a sequência Fibonacci"
    }else {        
        fiboResultado.innerHTML = "O número informado não pertence a sequência Fibonacci"
    }    
}



