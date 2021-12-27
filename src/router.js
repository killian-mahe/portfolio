import { createRouter, createWebHashHistory } from 'vue-router'
import About from './pages/About.vue'
import Education from './pages/Education.vue'
import Career from './pages/Career.vue'
import Projects from './pages/Projects.vue'

const routes = [
    { path: '/', component: About, name: 'about' },
    { path: '/education', component: Education, name: "education" },
    { path: '/career', component: Career, name: 'career' },
    { path: '/projects', component: Projects, name: 'projects' },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})