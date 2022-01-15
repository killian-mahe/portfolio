import { createRouter, createWebHashHistory } from 'vue-router'
import About from './pages/About.vue'
import Education from './pages/Education.vue'
import Career from './pages/Career.vue'
import Projects from './pages/Projects.vue'
import Skills from './pages/Skills.vue'
import Contact from './pages/Contact.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: About, name: 'about' },
    { path: '/education', component: Education, name: 'education' },
    { path: '/career', component: Career, name: 'career' },
    { path: '/projects', component: Projects, name: 'projects' },
    { path: '/skills', component: Skills, name: 'skills' },
    { path: '/contact', component: Contact, name: 'contact' },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})