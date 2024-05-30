import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import ResourceRegistry from '@/views/ResourceRegistry/ResourceRegistry.vue'
import CreateResource from '@/views/ResourceRegistry/CreateResource.vue'
import ViewResource from '@/views/ResourceRegistry/ViewResource.vue'
import EditResource from '@/views/ResourceRegistry/EditResource.vue'
import ProjectsRegistry from '@/views/ProjectsRegistry/ProjectsRegistry.vue'
import CreateProject from '@/views/ProjectsRegistry/CreateProject.vue'
import ViewProject from '@/views/ProjectsRegistry/ViewProject.vue'
import EditProject from '@/views/ProjectsRegistry/EditProject.vue'
import CalendarResourcePlan from '@/views/CalendarResourcePlan.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/resource-registry',
      name: 'resource-registry',
      component: ResourceRegistry
    },
    {
      path: '/resource-registry/create',
      name: 'resource-registry-create',
      component: CreateResource
    },
    {
      path: '/resource-registry/:resourceId',
      name: 'resource-view',
      component: ViewResource
    },
    {
      path: '/resource-registry/:resourceId/edit',
      name: 'resource-edit',
      component: EditResource
    },
    {
      path: '/projects-registry',
      name: 'projects-registry',
      component: ProjectsRegistry
    },
    {
      path: '/projects-registry/create',
      name: 'projects-registry-create',
      component: CreateProject
    },
    {
      path: '/projects-registry/:projectId',
      name: 'project-view',
      component: ViewProject
    },
    {
      path: '/projects-registry/:projectId/edit',
      name: 'project-edit',
      component: EditProject
    },
    {
      path: '/calendar-resource-plan',
      name: 'calendar-resource-plan',
      component: CalendarResourcePlan
    },
  ]
})

export default router
