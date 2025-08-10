document.querySelector('#startScreen button').addEventListener('click', () => {
    const startButton = document.querySelector('#startScreen button');
    startButton.style.pointerEvents = 'none';
    const startScreen = document.getElementById('startScreen');
    startScreen.classList.add('fade-out');
    const gradient = document.getElementById('gradient');
    gradient.classList.add('fade-up');
    const black = document.getElementById('black');
    black.classList.add('fade-in');

    document.getElementById('backgroundimg').style.display = 'flex';

    const audio = new Audio('sparkle.mp3');
    audio.play();
    const bgm = new Audio('Tommorow.mp3');
    bgm.loop = true;
    bgm.play();

    document.body.style.animationPlayState = 'running';
});

function changeBackground(imageUrl) {
    const flashbang = document.getElementById('flashbang');
    const backgroundimg = document.getElementById('backgroundimg');

    const audio = new Audio('sparkle.mp3');
    audio.play();

    flashbang.style.opacity = '1';
    setTimeout(() => {
        backgroundimg.style.backgroundImage = `url('${imageUrl}')`;
        flashbang.style.opacity = '0';
    }, 500);
}

document.getElementById('kazuma').addEventListener('click', () => {
    changeBackground('kazuma.jpg');
    document.getElementById('descText').innerHTML = 
        '<span>Kazuma Satou</span>, usually known as just <span>Kazuma</span>, is the main protagonist of the KonoSuba series. He was a shut-in who spent his days playing video games until he died in a pathetic way, reincarnating into the Parallel World alongside the Goddess of Water, Aqua, in order to slay the Devil King.';
});

document.getElementById('aqua').addEventListener('click', () => {
    changeBackground('aqua.png');
    document.getElementById('descText').innerHTML = 
        '<span>Aqua</span> is the deuteragonist of the KonoSuba series and with whom Kazuma started his party. Before she went to the Parallel World, Aqua was the elite Goddess of Water who guided young Japanese to the Afterlife, as well as the Axis Order\'s patron goddess, and is Emperor Zel\'s owner.';
});

document.getElementById('darkness').addEventListener('click', () => {
    changeBackground('darkness.png');
    document.getElementById('descText').innerHTML = 
        '<span>Lalatina Ford Dustiness</span>, usually known as <span>Darkness</span>, is one of the main heroines of the KonoSuba main series. She is a crusader who joined Kazuma\'s party, as well as a noble of the prestigious Dustiness House.';
});

document.getElementById('megumin').addEventListener('click', () => {
    changeBackground('megumin.jpg');
    document.getElementById('descText').innerHTML = 
        '<span>Megumin</span> is an Arch Wizard of the Crimson Demons in the Parallel World, and was the first person to join Kazuma\'s party. She is one of the main heroines of the KonoSuba main series, as well as the protagonist of the Explosion spinoff series. Megumin is also Chomusuke\'s owner.';
});

const sidebar = document.getElementById('sidebar');
const backgroundimg = document.getElementById('backgroundimg');
