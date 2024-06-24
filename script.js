function generateMonster() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const monsterNameElement = document.getElementById('monsterName');
    const monsterImageElement = document.getElementById('monsterImage');
    const loadingElement = document.getElementById('loading');
    const resultElement = document.getElementById('result');

    if (nameInput === '') {
        alert('Silakan masukkan nama Anda.');
        return;
    }

    resultElement.style.display = 'none';
    loadingElement.style.display = 'flex';

    setTimeout(() => {
        const { name: monsterName, photo } = getMonsterNameAndImage(nameInput);
        loadingElement.style.display = 'none';
        monsterNameElement.textContent = `Selamat! Khodam Anda adalah: ${monsterName}`;
        monsterImageElement.src = photo;
        monsterImageElement.style.display = 'block';
        resultElement.style.display = 'block';
        
        // Reset animation
        monsterImageElement.style.opacity = '0';
        monsterImageElement.style.animation = 'none';
        setTimeout(() => {
            monsterImageElement.style.animation = '';
        }, 10); // Waktu singkat untuk memastikan animasi terulang
    }, 2000);
}

function getMonsterNameAndImage(name) {
    const monsters = [
        { name: 'Skibidi Toilet', photo: 'jpg/tl.jpg' },
        { name: 'Siluman Api', photo: 'jpg/sma.jpg' },
        { name: 'Siluman Air', photo: 'jpg/smi.jpg' },
        { name: 'Ulat Roko', photo: 'jpg/UR.png' },
        { name: 'Pria Tampan', photo: 'jpg/ii.jpg' },
        { name: 'Putri Salju', photo: 'jpg/ps.jpg' },
        { name: 'Putri Sampah', photo: 'jpg/pts.jpg' },
        { name: 'Setan Kepala 4', photo: 'jpg/st.jpg' },
        { name: 'PESSI', photo: 'jpg/Messi.jpg' },
        { name: 'Burger hytam', photo: 'jpg/bg.jpg' },
        { name: 'Ultraman', photo: 'jpg/UT.jpg' },
        { name: 'badut', photo: 'jpg/bd.jpg' },
        { name: 'Raja Iblis', photo: 'jpg/raja.jpg' },
        { name: 'Mobil Aneh', photo: 'jpg/MB.jpg' },
        { name: 'Raja Kelabu', photo: 'jpg/rk.jpg' },
        { name: 'Jalangkung', photo: 'jpg/jk.jpg' },
        { name: 'Cacing Mati', photo: 'jpg/cm.jpg' },
        { name: 'manusia tampan', photo: 'jpg/ii.jpg' },
        { name: 'Penaldo', photo: 'jpg/CR.jpg' },
        { name: 'Maling Kejam', photo: 'jpg/maling.jpg' }
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    const index = Math.abs(hash % monsters.length);

    return monsters[index];
}
