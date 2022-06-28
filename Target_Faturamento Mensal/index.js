let faturamentoSP = parseFloat('67836.43')
let faturamentoRJ = parseFloat('36678.66')
let faturamentoMG = parseFloat('29229.88')
let faturamentoES = parseFloat('27165.48')
let faturamentoOutros = parseFloat('19849.53')

function representacao(faturamento){
    let faturamentoGeral = null

    faturamentoGeral += faturamentoES + faturamentoMG + faturamentoOutros + faturamentoRJ + faturamentoSP
    
    return (faturamento / faturamentoGeral) * 100

}

console.log('A representaçação do faturamento de SP é de: ' + representacao(faturamentoSP).toFixed(2) + '%\n' + 
            'A representaçação do faturamento do RJ é de: ' + representacao(faturamentoRJ).toFixed(2) + '%\n' + 
            'A representaçação do faturamento de MG é de: ' + representacao(faturamentoMG).toFixed(2) + '%\n' + 
            'A representaçação do faturamento do ES é de: ' + representacao(faturamentoES).toFixed(2) + '%\n' + 
            'A representaçação do faturamento dos Outros é de: ' + representacao(faturamentoOutros).toFixed(2) + '%')