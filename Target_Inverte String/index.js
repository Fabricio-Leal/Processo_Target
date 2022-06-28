
function converter(){
    let stringOriginal = document.getElementById('original').value
    let novaString = document.getElementById('transformada')

    
    let stringTransformada = []    

    for(i = 0; i <= stringOriginal.length - 1; i++) {
        
        stringTransformada.unshift(stringOriginal[i])

    }
    
    novaString.innerHTML += stringTransformada   

}
