const config = {
  meta: 6500,
  arrecadado: 730
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
    progressPercent.textContent = porcentagem.toFixed(1).replace(".", ",") + "%";
  }
}











document.addEventListener("DOMContentLoaded", () => {
  atualizarBarra();
});

// Copiar Pix
const copyPixBtn = document.getElementById("copyPixBtn");
const pixKey = document.getElementById("pixKey");

if (copyPixBtn && pixKey) {
  copyPixBtn.addEventListener("click", () => {
    const chave = pixKey.value;

    navigator.clipboard.writeText(chave).then(() => {
      alert("Chave Pix copiada!");
    });
  });
}

// Galeria
const imagens = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeLightboxBtn");

imagens.forEach((img) => {
  img.addEventListener("click", () => {
    if (lightbox && lightboxImg) {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    }
  });
});

if (closeBtn && lightbox) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}

// Música
const musica = document.getElementById("musicaFamilia");

if (musica) {
  musica.volume = 0.5;

  const iniciarMusica = async () => {
    try {
      await musica.play();
      console.log("Música iniciada com sucesso.");

      document.removeEventListener("click", iniciarMusica);
      document.removeEventListener("touchstart", iniciarMusica);
      document.removeEventListener("pointerdown", iniciarMusica);
    } catch (erro) {
      console.log("Ainda bloqueado. Tente outro clique na página.", erro);
    }
  };

  document.addEventListener("click", iniciarMusica);
  document.addEventListener("touchstart", iniciarMusica);
  document.addEventListener("pointerdown", iniciarMusica);
}
