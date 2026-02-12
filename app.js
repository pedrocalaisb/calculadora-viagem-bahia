function calcular() {
    const consumo = document.getElementById('consumo').value;
    const preco = document.getElementById('preco').value;
    const distancia = 929; // Distância configurada

    if (consumo > 0 && preco > 0) {
        const total = (distancia / consumo) * preco;
        const totalFormatado = total.toFixed(2).replace('.', ',');

        // Atualiza a tela
        document.getElementById('resultado').innerHTML = 
            `Custo para Valença: <br><span style="color: #1e3c72; font-size: 24px;">R$ ${totalFormatado}</span>`;

        // VOZ NATIVA (Não precisa de biblioteca externa)
        const mensagem = new SpeechSynthesisUtterance();
        mensagem.text = `Para chegar em Valença na Bahia, o custo será de ${totalFormatado} reais.`;
        mensagem.lang = 'pt-BR';
        mensagem.rate = 1.0; 
        
        window.speechSynthesis.cancel(); // Para qualquer fala anterior
        window.speechSynthesis.speak(mensagem); // Fala a resposta

    } else {
        alert("Preencha todos os campos corretamente!");
    }
}