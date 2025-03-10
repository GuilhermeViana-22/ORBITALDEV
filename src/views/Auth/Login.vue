<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 class="text-3xl font-semibold text-teal-400 mb-8 text-center">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-6">
          <label for="email" class="block text-sm text-gray-200">E-mail</label>
          <input type="email" id="email" v-model="email" placeholder="Digite seu e-mail" class="w-full p-3 mt-2 rounded-md border border-teal-500 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400" required />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm text-gray-200">Senha</label>
          <input type="password" id="password" v-model="password" placeholder="Digite sua senha" class="w-full p-3 mt-2 rounded-md border border-teal-500 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400" required />
        </div>
        <button type="submit" class="w-full py-3 bg-teal-400 text-white rounded-md font-semibold hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300">Entrar</button>
        <div class="mt-4 text-center">
          <a href="/esqueci-senha" class="text-sm text-teal-300 hover:underline">Esqueceu sua senha?</a>
          <br />
          <a href="/cadastre-se" class="text-sm text-teal-300 hover:underline">Cadastre-se</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Lógica de login (por exemplo, validação, envio de dados)
      console.log('Email:', this.email);
      console.log('Senha:', this.password);
    }
  }
};
</script>
