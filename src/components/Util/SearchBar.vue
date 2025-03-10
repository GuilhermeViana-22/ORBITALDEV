<template>
  <div class="flex justify-center w-full mt-5">
    <div class="relative w-64">
      <!-- Input de busca -->
      <input v-model="search" @focus="isOpen = true" @blur="closeDropdown" @keydown.down.prevent="highlightNext"
        @keydown.up.prevent="highlightPrev" @keydown.enter.prevent="selectHighlighted" type="text"
        placeholder="Pesquise tecnologia..."
        class="w-full px-4 py-2 text-gray-300 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <!-- Dropdown de opções -->
      <ul v-if="isOpen && filteredOptions.length"
        class="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto z-50"
        style="top: 100%;">
        <li v-for="(option, index) in filteredOptions" :key="option" @mousedown.prevent="selectOption(option)"
          @mouseover="highlightIndex = index" :class="{
            'bg-blue-100 text-gray-700': highlightIndex === index,
            'text-gray-400': highlightIndex !== index
          }" class="px-4 py-2 cursor-pointer hover:bg-blue-100">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const search = ref("");
const isOpen = ref(false);
const highlightIndex = ref(-1);

const options = [
  "JavaScript",
  "Vue.js",
  "Node.js",
  "Laravel",
  "React",
  "Python",
  "Docker",
  "Kubernetes",
  "Git",
  "AWS",
  "Linux",
  "SQL",
];

const filteredOptions = computed(() =>
  options.filter((opt) =>
    opt.toLowerCase().includes(search.value.toLowerCase())
  )
);

const selectOption = (option) => {
  search.value = option;
  isOpen.value = false;
};

const closeDropdown = () => {
  setTimeout(() => {
    isOpen.value = false;
  }, 200);
};

const highlightNext = () => {
  if (highlightIndex.value < filteredOptions.value.length - 1) {
    highlightIndex.value++;
  }
};

const highlightPrev = () => {
  if (highlightIndex.value > 0) {
    highlightIndex.value--;
  }
};

const selectHighlighted = () => {
  if (highlightIndex.value >= 0) {
    selectOption(filteredOptions.value[highlightIndex.value]);
  }
};
</script>

<style scoped>
/* Ajuste para deixar o input outline branco */
input {

  border-color: white;
}
</style>
