function Exer_1(){
    
    let vetor = []
    let impares = []
    let pares = []
    
    for(let i=0;i<6;i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
   
    for(let i=0;i<6;i++){
        if (vetor[i] % 2 == 0) {
            
            pares.push(vetor[i])            
        }
        else {

            impares.push(vetor[i])       
        }
    }
    console.log(`Elementos pares ${pares} e qtde ${pares.length}`)
    console.log(`Elementos ímpares ${impares} e qtde ${impares.length}`)
}

function Exer_2(){
    
     let vetor = []
     let m2 = []
     let m3 = []
     let m23 = []
    
    for(let i=0;i<7;i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
     
    for(let i=0;i<7;i++){
        if (vetor[i] % 2 == 0) {
           
            m2.push(vetor[i])            
        }
        if (vetor[i] % 3 == 0) {
            
            m3.push(vetor[i])       
        }
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
            
            m23.push(vetor[i])       
        }
    }
    console.log(`Elementos múltiplos de 2: ${m2} e qtde ${m2.length}`)
    console.log(`Elementos múltiplo de 3: ${m3} e qtde ${m3.length}`)
    console.log(`Elementos múltiplo de 2 e 3: ${m23} e qtde ${m23.length}`)
    alert(`Elementos múltiplos de 2: ${m2} e qtde ${m2.length}`)
    alert(`Elementos múltiplo de 3: ${m3} e qtde ${m3.length}`)
    alert(`Elementos múltiplo de 2 e 3: ${m23} e qtde ${m23.length}`)
}

function Exer_3(){
   
    let vetCodigos = []
    let vetEstoque = []

    for(let i=0;i<10;i++){
        vetCodigos[i] = Number(prompt(`Informe o código do produto ${i+1}`))
        vetEstoque[i] = Number(prompt(`Informe o estoque do produto ${i+1}`))
    }

    let cliente = Number(prompt(`Informe o código do cliente`))
    do {
        let codigoCompra = Number(prompt(`Informe o código do produto para compra`))
        
        let achou = false 
        for(let i=0;i<10;i++){
            if (codigoCompra == vetCodigos[i]){ 
                achou = true
                
                let qtdeCompra = Number(prompt(`Informe a qtde da compra`))
                if (vetEstoque[i] - qtdeCompra >= 0){ 
                    vetEstoque[i] = vetEstoque[i] - qtdeCompra
                }
                else {
                    alert(`Qtde em estoque é insuficiente`)
                }
            }
        }
        if (!achou){ 
            alert(`Produto não comprado para venda`)
        }

        cliente = Number(prompt(`Informe o novo código do cliente. Digite 0 para encerrar`))
    }
    while(cliente != 0)
    alert(`Estoque atualizado ${vetEstoque}`)
}

function Exer_4() {

   
    let vetor = new Array(15) 
    let vetorR = []

    for(let i=0;i<15;i++){
        vetor[i] = Number(prompt(`Informe o valor do elemento ${i+1}`))
    }
   
    for(let i=0;i<15;i++){
        if (vetor[i] == 30){
            vetorR.push(i) 
        }
    }
    alert(`As posições contendo elementos igual a 30 é ${vetorR}`)
}

function Exer_5(){

    let vetLogica = new Array(15)
    let vetLp = new Array(10)
    let interseccao = []

    
    for(let i=0;i<15;i++){
        vetLogica[i] = Number(prompt(`Informe código de matrícula do aluno que faz Lógica`))
    }
     
     for(let i=0;i<10;i++){
        vetLp[i] = Number(prompt(`Informe código de matrícula do aluno que faz Linguagem de Programação`))
    }

    
    for(let i=0;i<15;i++){ 
        for(let j=0;j<10;j++){
            if (vetLogica[i] == vetLp[j]){
                interseccao.push(vetLogica[i])
            }
        } 
    }
    alert(`Alunos que fazem ambas as disciplinas ${interseccao}`)
}

function Exer_6() {
    
    let vetNomes = new Array(5) 
    let vetVendas = new Array(5) 
    let vetComissao = new Array(5) 

    for(let i=0;i<5;i++){
        vetNomes[i] = prompt(`Informe o nome do vendedor ${i+1}`)
        vetVendas[i] = Number(prompt(`Informe o total de vendas do vendedor ${i+1}`))
        vetComissao[i] = Number(prompt(`Informe o % de comissão do vendedor ${i+1}`))
    }
    let totalVendas = 0
    let maior = 0
    let nomeMaior = ""
    let menor = 100000
    let nomeMenor = ""
    for(let i=0;i<5;i++){
        let receber = (vetVendas[i] * vetComissao[i]) / 100 
        if (receber > maior){
            maior = receber 
            nomeMaior = vetNomes[i]
        }
        if (receber < menor){
            menor = receber 
            nomeMenor = vetNomes[i]
        }
        alert(`O vendedor ${vetNomes[i]} vai receber ${receber}`) 
        totalVendas = totalVendas + vetVendas[i] 
    }

    alert(`O total de vendas foi de ${totalVendas}`)
    alert(`O maior valor a receber é ${maior} do vendedor ${nomeMaior}`)
    alert(`O menor valor a receber é ${menor} do vendedor ${nomeMenor}`)

}