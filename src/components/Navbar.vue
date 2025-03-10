<script setup>
import { ref } from 'vue';
import SearchBar from "@/components/Util/SearchBar.vue";

// Variáveis de controle
const isMoon = ref(true); // Para controlar o ícone de modo lua
const isMobileMenuOpen = ref(false); // Para controlar a abertura do menu mobile

// Função para alternar o estado do menu mobile
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav class="bg-banner p-4">
    <!-- Navbar superior -->
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white font-bold text-xl">
        Orbital Dev
      </div>

      <!-- Menu Hamburger (mobile) -->
      <div class="lg:hidden">
        <button @click="toggleMobileMenu" class="text-white">
          <span v-if="!isMobileMenuOpen">☰</span>
          <span v-if="isMobileMenuOpen">✖</span>
        </button>
      </div>

      <!-- Menu de navegação (desktop) -->
      <div class="hidden lg:flex space-x-6">
        <router-link to="/" class="text-white hover:text-orange-500">Home</router-link>
        <router-link to="/novidades" class="text-white hover:text-orange-500">Novidades</router-link>
        <router-link to="/mundos" class="text-white hover:text-orange-500">Mundos</router-link>
        <router-link to="/tecnologia" class="text-white hover:text-orange-500">Tecnologia</router-link>
        <router-link to="/marketplace" class="text-white hover:text-orange-500">Marketplace</router-link>
        <router-link to="/contatos" class="text-white hover:text-orange-500">Contatos</router-link>
      </div>

      <!-- Modo Lua Cheia para Noite e Ícone de Sol para Dia -->
      <div class="hidden lg:block">
        <button class="text-white" @click="isMoon = !isMoon"><i :class="isMoon ? 'fas fa-moon' : 'fas fa-sun' "
            id="themeMode"></i></button>
      </div>
    </div>

    <!-- Menu mobile (quando estiver aberto) -->
    <div v-if="isMobileMenuOpen" class="lg:hidden menu-mobile">
      <ul class="flex flex-col space-y-4 tecnologias">
        <li><router-link to="/" class="text-white">Home</router-link></li>
        <li><router-link to="/novidades" class="text-white">Novidades</router-link></li>
        <li><router-link to="/mundos" class="text-white">Mundos</router-link></li>
        <li><router-link to="/tecnologia" class="text-white">Tecnologia</router-link></li>
        <li><router-link to="/marketplace" class="text-white">Marketplace</router-link></li>
        <li><router-link to="/contatos" class="text-white">Contatos</router-link></li>
      </ul>
    </div>

    <!-- Barra de Pesquisa -->
    <SearchBar />
  </nav>
</template>

<style scoped>
/* Adicione o estilo necessário aqui */
</style>
