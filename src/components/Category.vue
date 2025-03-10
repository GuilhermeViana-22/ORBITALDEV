<template>
  <div>
    <h2>Categorias</h2>
    <div v-if="loading">Carregando...</div>
    <ul v-if="categories.length > 0">
      <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
    </ul>
    <div v-else-if="error">{{ error }}</div>
  </div>
</template>

<script>
import api from "@/services/api"; // Importando o serviço de API

export default {
  name: "Category",
  data() {
    return {
      categories: [],
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      const response = await api.get("/categories"); // Fazendo a requisição para a API
      this.categories = response.data; // Armazenando os dados de categorias
    } catch (error) {
      this.error = "Falha ao carregar categorias"; // Tratamento de erro
    } finally {
      this.loading = false; // Remover o "loading" após a requisição
    }
  },
};
</script>

<style scoped>
/* Adicione seu estilo personalizado para o componente aqui */
</style>
