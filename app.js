const config = {
  meta: 6500,
  arrecadado: 0
};

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function atualizarBarra() {
  const porcentagem = Math.min((config.arrecadado / config.meta) * 100, 100);

  const progressFill = document.getElementById("progressFill");
  const raisedValue = document.getElementById("raisedValue");
  const goalValue = document.getElementById("goalValue");
  const progressPercent = document.getElementById("progressPercent");

  if (progressFill) {
    progressFill.style.width = porcentagem + "%";
  }

  if (raisedValue) {
    raisedValue.textContent = formatarMoeda(config.arrecadado);
  }

  if (goalValue) {
    goalValue.textContent = formatarMoeda(config.meta);
  }

  if (progressPercent) {
    progressPercent.textContent = porcentagem.toFixed(0) + "%";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarBarra();
});

// Copiar Pix
document.getElementById("copyPixBtn").addEventListener("click", () => {
  const chave = document.getElementById("pixKey").innerText;

  navigator.clipboard.writeText(chave).then(() => {
    alert("Chave Pix copiada!");
  });
});























// Galeria (clique para ampliar)
const imagens = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("lightboxClose");

imagens.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Inicializar
atualizarBarra();

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});