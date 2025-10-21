const sons = {
    'A' : 'boom.wav',
    'S' : 'clap.wav',
    'D' : 'hithat.wav',
    'G' : 'kick.wav',
    'H' : 'openhat.wav',
    'I' : 'ride.wav',
    'J' : 'snare.wav',
    'K' : 'tink.wav',
    'L' : 'tom.wav',
};

const criarDiv = (texto) => {
    const div = document.createElement('div'); 
    div.classList.add('key');
    div.textContent = texto; 
    div.id = texto;

    // Evento de clique
    div.addEventListener('click', () => {//Criação das constantes de som
const sons = {
    'q' : 'boom.wav',
    'w' : 'clap.wav',
    'e' : 'hihat.wav',
    'r' : 'kick.wav',
    't' : 'openhat.wav',
    'y' : 'ride.wav',
    'u' : 'snare.wav',
    'i' : 'tink.wav',
    'o' : 'tom.wav',
}

//Função para criar uma div para cada tecla
const  criarDiv = (sons) => {
    div.classlist('key');
    div.textContent = texto;
}

exibir(sons);
document.getElementById('container')
        tocarSom(texto);
    });

    document.getElementById('container').appendChild(div); 
};

Object.keys(sons).forEach(criarDiv);

const adicionarEfeito = (letra) => {
    const div = document.getElementById(letra);
    if (!div) return;

    div.classList.add('active');
    setTimeout(() => div.classList.remove('active'), 150);
};

const tocarSom = (letra) => {
    const som = sons[letra];
    if (!som) return;
    const audio = new Audio(`BATERIA-MAIN/${som}`);
    audio.play();
    adicionarEfeito(letra);
};

document.addEventListener('keydown', (event) => {
    const letra = event.key.toUpperCase();
    tocarSom(letra);
});

