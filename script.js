// ============ STATE MANAGEMENT ============
let envelopeState = 'closed'; // closed, open, pulled

// ============ ELEMEN DOM ============
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const popup = document.getElementById('popup');

// ============ INTERAKSI AMPLOP ============
envelope.addEventListener('click', function(e) {
    if (envelopeState === 'closed') {
        // Buka amplop
        envelope.classList.add('open');
        envelopeState = 'open';
    } else if (envelopeState === 'open') {
        // Tarik surat keluar
        envelope.classList.add('pulled');
        envelopeState = 'pulled';
    }
});

// Tap pada surat untuk menampilkan popup
letter.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent envelope click
    if (envelopeState === 'pulled') {
        showPopup();
    }
});

// ============ POP-UP FUNCTIONS ============
// Pesan-pesan yang akan ditampilkan dengan typing effect
const messages = {
    line1: "happy valentine cayankk..🤭💖🌹",
    line2: "Hari ini mungkin cuma tanggal biasa buat orang lain, tapi buat aku ini hari yang spesial karena ada kamu 🥰✨ Aku cuma mau bilang makasih yaa, udah jadi orang yang selalu sabar ngadepin aku, yang selalu dengerin cerita randomku, keluh kesahku, bahkan hal-hal kecil yang kadang gak penting tapi tetep kamu tanggepin dengan serius 🤍 Itu hal sederhana, tapi berarti banget buat aku 💌",
    line3: "soryy yahh, aku Ndak bisa kasi kamu coklat 🍫😔 Bukan karena aku gak mau, tapi karena menurutku yang lebih manis itu bukan coklatnya… tapi momen dan perasaan yang kita jalanin bareng 💕 Coklat bisa habis dalam beberapa menit, tapi perhatian, doa, dan rasa sayang itu semoga bisa tahan lama, bahkan makin hari makin kuat 🌷💫",
    line4: "Aku mungkin gak selalu pinter ngerangkai kata, gak selalu romantis, kadang juga ngeselin 🙈 Tapi satu hal yang pasti, aku selalu berusaha jadi versi terbaik dari diriku setiap kali sama kamu 💪💖 Karena kamu pantas dapet yang terbaik, bukan yang setengah-setengah 🌟",
    line5: "Semoga hari ini kamu senyum lebih banyak 😄🌸 ketawa lebih lepas 🤭✨ dan ngerasa disayang banget 💓 Jangan lupa jaga kesehatan yaa 💊🍀 jangan sering begadang 🌙 jangan lupa makan teratur 🍜 Aku pengen kamu bahagia, bukan cuma hari ini, tapi seterusnya 💞",
    line6: "Kalau suatu hari kamu lagi capek 😣 lagi down 😞 atau lagi ngerasa sendirian, inget ya… ada aku yang selalu dukung kamu 🤗💗 Mungkin gak selalu bisa hadir secara langsung, tapi doa dan perhatianku selalu buat kamu 🙏💕",
    signature: "Sekali lagi, happy valentine cayankk..🤭💘\nSemoga hari ini penuh cinta, penuh kebaikan, dan penuh cerita manis buat kita berdua 💑🌹✨"
};

function showPopup() {
    popup.classList.add('show');
    
    // Start typing animation after popup appears
    setTimeout(() => {
        startTypingAnimation();
    }, 800);
}

function autoScrollPopup() {
    const popupContent = document.querySelector('.popup-content');
    if (popupContent) {
        // Scroll otomatis ke bawah dengan smooth behavior
        setTimeout(() => {
            popupContent.scrollTo({
                top: popupContent.scrollHeight,
                behavior: 'smooth'
            });
        }, 1000);
    }
}

function startTypingAnimation() {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const line4 = document.getElementById('line4');
    const line5 = document.getElementById('line5');
    const line6 = document.getElementById('line6');
    const signature = document.getElementById('signature');
    
    // Set text content
    line1.textContent = messages.line1;
    line2.textContent = messages.line2;
    line3.textContent = messages.line3;
    line4.textContent = messages.line4;
    line5.textContent = messages.line5;
    line6.textContent = messages.line6;
    signature.textContent = messages.signature;
    
    // Add typing animation with faster delays
    setTimeout(() => {
        line1.classList.add('active');
        autoScrollPopup();
    }, 0);
    
    setTimeout(() => {
        line2.classList.add('active');
        autoScrollPopup();
    }, 600);
    
    setTimeout(() => {
        line3.classList.add('active');
        autoScrollPopup();
    }, 1200);
    
    setTimeout(() => {
        line4.classList.add('active');
        autoScrollPopup();
    }, 1800);
    
    setTimeout(() => {
        line5.classList.add('active');
        autoScrollPopup();
    }, 2400);
    
    setTimeout(() => {
        line6.classList.add('active');
        autoScrollPopup();
    }, 3000);
    
    setTimeout(() => {
        signature.classList.add('active');
        autoScrollPopup();
    }, 3600);
}

function hidePopup() {
    popup.classList.remove('show');
}

// ============ PREVENT ACCIDENTAL CLOSE ============
// Prevent default touch behaviors on mobile
document.addEventListener('touchmove', function(e) {
    if (e.target.closest('.envelope') || e.target.closest('.popup-content')) {
        e.preventDefault();
    }
}, { passive: false });
