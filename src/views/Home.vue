<script setup>
import Category from "@/components/Category.vue";
import Feed from "@/components/Feed.vue";
import Rightbar from "@/components/Rightbar.vue";
</script>

<template>
<div class="w-full grid grid-cols-12 gap-8">
  <!-- Coluna da esquerda (Categoria) ocupa 3 colunas em telas grandes e 12 em telas pequenas -->
  <div class="col-span-3 hidden lg:block sticky top-0">
    <Category />
  </div>

  <!-- Coluna principal (Feed) ocupa 9 colunas em telas grandes e 12 em telas pequenas -->
  <div class="col-span-12 lg:col-span-6 overflow-y-auto max-h-screen feed-container">
    <Feed />
  </div>

  <!-- Coluna da direita (Rightbar) ocupa 3 colunas em telas grandes e 12 em telas pequenas -->
  <div class="col-span-3 hidden lg:block sticky top-0">
    <Rightbar />
    <Rightbar />
    <Rightbar />
  </div>
</div>
</template>

<style scoped>
.feed-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.feed-container {
  -ms-overflow-style: none; /* Para Internet Explorer */
  scrollbar-width: none; /* Para Firefox */
}
</style>
