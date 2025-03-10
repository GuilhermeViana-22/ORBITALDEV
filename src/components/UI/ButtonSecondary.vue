<template>
  <button v-if="href" :id="id" @click="handleClick" class="btn-secondary">
    <i v-if="icone" :class="icone"></i> {{ texto }}
  </button>
  <button v-else @click="handleClick" class="btn-secondary">
    {{ texto }}
  </button>
</template>

<script>
export default {
  name: 'ButtonSecondary',
  props: {
    href: {
      type: String,
      default: null,
    },
    icone: {
      type: String,
      default: null,
    },
    texto: {
      type: String,
      default: 'Clique aqui',
    },
    id: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleClick() {
      alert('Oi');
    }
  }
}
</script>

<style scoped>
.btn-secondary {
  background: linear-gradient(45deg, #1e2835, #182230);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 5px 5px 5px;
}

.btn-secondary:hover {
  background-color: #218838;
}

i {
  margin-right: 5px;
}
</style>
