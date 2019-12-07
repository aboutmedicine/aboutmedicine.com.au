import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/learning',
      name: 'learning',
      component: () => import(/* webpackChunkName: "learning" */ './views/Learning.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blogpost" */ './views/BlogPost.vue')
    },
    {
      path: '/write',
      name: 'write',
      component: () => import(/* webpackChunkName: "write-blogpost" */'./views/WritePost.vue')
    },
    {
      path: '/neural-networks',
      name: 'neural-networks',
      component: () => import(/* webpackChunkName: "neural-networks" */ './views/NN.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import(/* webpackChunkName: "notes" */ './views/Notes.vue')
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
      component: () => import(/* webpackChunkName: "add-note" */'./views/AddNote.vue')
    },
    {
      path: '/models',
      name: 'models',
      component: () => import(/* webpackChunkName: "models" */ './views/Models.vue')
    },
    {
      path: '/models/:model',
      name: 'model',
      component: () => import('./views/Models.vue')
    },
    {
      path: '/mindmap/make',
      name: 'mindmap-make',
      component: () => import(/* webpackChunkName: "mindmap-maker" */ './views/MindMapMaker.vue')
    },
    {
      path: '/mindmap/view/:id',
      name: 'mindmap-view',
      component: () => import(/* webpackChunkName: "mindmap-viewer" */'./views/MindMapViewer.vue')
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
