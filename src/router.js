import { createRouter, createWebHashHistory } from 'vue-router'
import About from './pages/About.vue'
import Education from './pages/Education.vue'
import Career from './pages/Career.vue'
import Projects from './pages/Projects.vue'
// import Skills from './pages/Skills.vue'
import Contact from './pages/Contact.vue'
import ProjectDetails from './pages/ProjectDetails.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: About, name: 'about' },
    { path: '/education', component: Education, name: 'education' },
    { path: '/career', component: Career, name: 'career' },
    { path: '/projects', component: Projects, name: 'projects' },
    // { path: '/skills', component: Skills, name: 'skills' },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/project/:project', component: ProjectDetails, name: 'project' }
]

export const router = createRouter({
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 }
    },
    history: createWebHashHistory(),
    routes,
})