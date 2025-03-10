<template>
  <button v-if="href" :id="id" @click="handleClick" class="btn-warning">
    <i v-if="icone" :class="icone"></i> {{ texto }}
  </button>
  <button v-else @click="handleClick" class="btn-warning">
    {{ texto }}
  </button>
</template>

<script>
export default {
  name: 'ButtonWarning',
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
.btn-warning {
  background: linear-gradient(45deg, #ca8a04, #894b00);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0px 4px 0px 5px;
}

.btn-warning:hover {
  background-color: #218838;
}

i {
  margin-right: 5px;
}
</style>
