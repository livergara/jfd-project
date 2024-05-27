import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import ResourceRegistry from '@/views/ResourceRegistry.vue'
import CreateResource from '@/views/CreateResource.vue'
import ViewResource from '@/views/ViewResource.vue'
import EditResource from '@/views/EditResource.vue'
import ProjectsRegistry from '@/views/ProjectsRegistry.vue'
import CalendarResourcePlan from '@/views/CalendarResourcePlan.vue'
import RequestJournal from '@/views/RequestJournal.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
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
      path: '/calendar-resource-plan',
      name: 'calendar-resource-plan',
      component: CalendarResourcePlan
    },
    {
      path: '/request-journal',
      name: 'request-journal',
      component: RequestJournal
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

export default router
