import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewIdea from '@/components/NewIdea'
import ViewIdea from '@/components/ViewIdea'
import EditIdea from '@/components/EditIdea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new-idea',
      name: 'new-idea',
      component: NewIdea
    },
    {
      path: '/edit/:idea_name',
      name: 'edit-idea',
      component: EditIdea
    },
    {
      path: 'view/:idea_id',
      name: 'view-idea',
      component: ViewIdea
    },
  ]
})
