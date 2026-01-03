const texto = "Minha princesa, sei que hoje o dia parece estar pesando um pouco mais nos seus ombros e que o mundo talvez pareça barulhento demais... ou silencioso demais. Eu não preciso que você me explique nada, nem que tente sorrir se o seu coração não estiver pronto para isso agora. \n\nEstou escrevendo isso apenas para que, toda vez que você olhar para esta tela, se lembre de que nunca estará sozinha. Eu sou o seu porto seguro, o seu lugar de paz e a pessoa que vai segurar sua mão com a mesma força, tanto no sol quanto na tempestade. \n\nÀs vezes, a vida nos pede uma pausa, e tudo bem. Respire no seu tempo. Eu estarei aqui, exatamente ao seu lado, cuidando de você e esperando o seu brilho voltar, porque ele é a coisa mais linda que eu conheço. Se Cuida minnha princesa , Seu Tomatinho está com Saudade.";

let i = 0;
const velocidade = 60; // Velocidade da digitação

function digitar() {
    if (i < texto.length) {
        const char = texto.charAt(i);
        // Transformar quebras de linha em <br> para o HTML
        document.getElementById("mensagem").innerHTML += (char === '\n') ? "<br>" : char;
        i++;
        setTimeout(digitar, velocidade);
    }
}

function criarCoracao() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    // Alternar entre corações e flores
    heart.innerHTML = Math.random() > 0.5 ? '❤️' : '🌸';
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.animationDuration = Math.random() * 4 + 4 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(criarCoracao, 400);
window.onload = digitar;