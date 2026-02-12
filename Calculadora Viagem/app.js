function calcularViagem() {
    let km = 929; // Distância de Campo Grande (Cariacica) até Valença (BA)
    let consumo = document.getElementById('consumo').value;
    let preco = document.getElementById('preco').value;

    if (consumo > 0 && preco > 0) {
        let totalLitros = km / consumo;
        let custoTotal = totalLitros * preco;

        let mensagem = `Para chegar na Bahia vamos gastar ${totalLitros.toFixed(1)} litros. O custo total da gasolina será de ${custoTotal.toFixed(2)} reais.`;

        // Mostra na tela
        document.getElementById('resultado').innerHTML = mensagem;
        
        // Faz o computador falar (com Z em Brazilian!)
        responsiveVoice.speak(mensagem, 'Brazilian Portuguese Female', {rate:1.1});
    } else {
        alert("Pai, preencha os valores primeiro!");
    }
}