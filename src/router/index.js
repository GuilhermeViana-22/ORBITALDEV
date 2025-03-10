import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Auth/Login.vue";
import Categories from "@/components/Category.vue";
import Feed from "@/components/Feed.vue";

const routes = [
  { path: "/", name: "Home", component: Home, meta: { public: true } },
  { path: "/login", name: "Login", component: Login, meta: { public: true } },
  { path: "/categories", name: "Categories", component: Categories, meta: { public: true } }, // Rota pública
  { path: "/posts", name: "Feed", component: Feed, meta: { public: true } }, // Rota pública
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware para proteger rotas privadas
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Verifica se há token salvo

  if (!to.meta.public && !isAuthenticated) {
    next("/login"); // Redireciona para login se não estiver autenticado
  } else {
    next(); // Continua a navegação normalmente
  }
});

export default router;
