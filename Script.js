// menuList for Header
const m = document.getElementById("menu_icon");
const m_l = document.getElementById("menu");

m.addEventListener("click", openmenu);

if(window.innerWidth <= 600){
    m_l.style.display = "none";
}

function openmenu() {
  if (m_l.style.display == "none") {
    m_l.style.display = "flex";
  } else {
    m_l.style.display = "none";
  }
}

// mainSection Typewriter effect
let t = "";
let i = 0;
let text = "Pay Tolls Easily!";
let tE = document.getElementById("tEffect");
let speed = 100;

function typeWriter() {
    if (i == text.length) {
        i = 0;
        t = "";
        tE.innerText = t;
        setTimeout(typeWriter, speed); // Pass a reference, not an invocation
    } else if (i < text.length) {
        t += text[i];
        i++;
        tE.innerText = t;
        setTimeout(typeWriter, speed); // Pass a reference, not an invocation
    }
}

typeWriter();