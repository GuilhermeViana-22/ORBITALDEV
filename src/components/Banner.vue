<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const videoRef = ref(null);
let resetInterval = null;

onMounted(() => {
  if (videoRef.value) {
    resetInterval = setInterval(() => {
      videoRef.value.currentTime = 0;
      videoRef.value.play();
    }, 6000); // Reinicia a cada 6 segundos
  }
});

onUnmounted(() => {
  clearInterval(resetInterval);
});

// cria o script de para acompnahr o dom com moue
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector('.banner');
  const glow = document.createElement('div');
  glow.classList.add('mouse-glow');
  banner.appendChild(glow); // Adiciona o efeito dentro da .banner

  banner.addEventListener('mousemove', (e) => {
    const bannerRect = banner.getBoundingClientRect();

    // Verifica se o mouse está dentro da .banner
    if (
      e.clientX >= bannerRect.left &&
      e.clientX <= bannerRect.right &&
      e.clientY >= bannerRect.top &&
      e.clientY <= bannerRect.bottom
    ) {
      glow.style.left = `${e.clientX - bannerRect.left}px`;
      glow.style.top = `${e.clientY - bannerRect.top}px`;
    }
  });
});


</script>

<template>
  <div class="banner">
    <div class="banner-text">
      <h1 class="font-bold"><strong>Orbital <span class="gradient-color">Dev</span></strong></h1>
      <p class="">
        Acompanhe a evolução do desenvolvimento. <span class="gradient-color">Tecnologia, inovação e jogabilidade se
          encontram aqui.</span>
      </p>
    </div>
  </div>
</template>
