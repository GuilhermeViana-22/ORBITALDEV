<script setup>

import ButtonSuccess from '@/components/UI/ButtonSuccess.vue';

</script>

<template>
  <div class="w-full max-w-6xl mx-auto mt-1">
    <div v-if="loading" class="text-left">Carregando...</div>
    <div v-if="error" class="text-left text-red-500">{{ error }}</div>

    <!-- Tab Navigation -->
    <div class="flex justify-left space-x-4 mt-6">
      <!-- Usando o botão ButtonSuccess para "Clique aqui" -->
      <ButtonSuccess @click="setTab('Descubra')" :texto="tab === 'Descubra' ? 'Descubra (Ativo)' : 'Descubra'"
        :class="tab === 'Descubra' ? 'bg-blue-500 text-white' : 'text-blue-500'" />

      <!-- Usando ButtonSuccess para a navegação entre tabs -->
      <ButtonSuccess @click="setTab('following')" :texto="tab === 'following' ? 'Following (Ativo)' : 'Following'"
        :class="tab === 'following' ? 'bg-blue-500 text-white' : 'text-blue-500'" />
    </div>

    <!-- Display Posts based on Tab -->
    <div v-if="!loading && !error" class="grid grid-cols-1 gap-6 mt-6">
      <div v-for="post in filteredPosts" :key="post.id"
        class="card bg-[#12141a] border border-white rounded-lg shadow-lg overflow-hidden">
        <img :src="post.image_url" alt="Imagem do post" class="w-full h-48 object-cover">
        <div class="p-4 text-white">
          <h3 class="text-xl font-semibold">{{ post.title }}</h3>
          <h4 class="text-lg">{{ post.subtitle }}</h4>
          <p class="mt-2">{{ post.body }}</p>
          <p v-if="post.footer" class="text-sm mt-4">{{ post.footer }}</p>
        </div>
        <div v-if="post.can_be_commented" class="bg-gray-700 p-3 text-left">
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Comentar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Feed",
  data() {
    return {
      posts: [],
      loading: true,
      error: null,
      tab: 'discover', // Aba padrão
    };
  },
  async created() {
    try {
      const response = await axios.get("http://127.0.0.1:8001/api/post");
      this.posts = response.data.posts;
    } catch (error) {
      console.error(error);
      this.error = "Falha ao carregar os posts";
    } finally {
      this.loading = false;
    }
  },
  computed: {
    filteredPosts() {
      // Filtra os posts com base na aba selecionada
      if (this.tab === 'following') {
        return this.posts.filter(post => post.followed); // Supondo que cada post tenha uma propriedade 'followed'
      }
      return this.posts;
    }
  },
  methods: {
    setTab(tab) {
      this.tab = tab;
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 2px solid #ffffff;
}

button {
  transition: background-color 0.3s ease;
}

</style>
