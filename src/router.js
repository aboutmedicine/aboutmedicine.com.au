import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/learning',
      name: 'learning',
      component: () => import('./views/Learning.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import('./views/BlogPost.vue')
    },
    {
      path: '/write',
      name: 'write',
      component: () => import('./views/WritePost.vue')
    },
    {
      path: '/neural-networks',
      name: 'neural-networks',
      component: () => import('./views/NN.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('./views/Notes.vue')
    },
    {
      path: '/notes/:spec',
      name: 'notes-spec',
      component: () => import('./views/Notes.vue')
    },
    {
      path: '/notes/:spec/:section',
      name: 'notes-spec-section',
      component: () => import('./views/Notes.vue')
    },
    {
      path: '/notes/:spec/:section/:note',
      name: 'notes-spec-section-note',
      component: () => import('./views/Notes.vue')
    },
    {
      path: '/add-note',
      name: 'add-note',
      component: () => import('./views/AddNote.vue')
    },
    {
      path: '/models',
      name: 'models',
      component: () => import('./views/Models.vue')
    },
    {
      path: '/models/:model',
      name: 'model',
      component: () => import('./views/Models.vue')
    },
    {
      path: '/mindmap/make',
      name: 'mindmap-make',
      component: () => import('./views/MindMapMaker.vue')
    },
    {
      path: '/mindmap/view/:id',
      name: 'mindmap-view',
      component: () => import('./views/MindMapViewer.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
