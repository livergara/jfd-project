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
import RequestJournal from '@/views/RequestJournal.vue'
import Dashboard from '@/views/Dashboard.vue'
import AssignmentsRegistry from '@/views/AssignmentsRegistry/AssignmentsRegistry.vue'


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
      path: '/assignments-registry',
      name: 'assignments-registry',
      component: AssignmentsRegistry
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
