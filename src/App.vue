<script setup>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
</script>

<template>
  <div>
    <!-- Navbar e Banner ficam fixos na aplicação -->
    <Navbar />
    <Banner />
    <!-- Aqui será carregado o conteúdo das páginas -->
    <router-view />
  </div>
</template>
