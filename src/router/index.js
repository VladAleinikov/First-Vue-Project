import Main from '../pages/Main.vue';
import AboutPage from '../pages/AboutPage.vue';
import PostsPage from '../pages/PostsPage.vue';
import PostsPageWithStore from '../pages/PostsPageWithStore.vue';
import PostPage from '../pages/PostPage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
      { path: '/', component: Main },
      { path: '/about', component: AboutPage },
      { path: '/posts', component: PostsPage },
      { path: '/store', component: PostsPageWithStore },
      { path: '/posts/:id', component: PostPage },
];

const router = createRouter({
      routes,
      history: createWebHistory()
})
export default router;