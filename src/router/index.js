import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import store from '@/vuex/store.js'
import me from '@/components/me'
import search from '@/components/search'
import article from '@/components/article'


Vue.use(Router)


const router = new Router({
  mode: 'history',
  base:'vux/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/me',
      name: 'me',
      component: me
    },{
      path: '/search',
      name: 'search',
      component: search
    },{
      path: '/article',
      name: 'article',
      component: article
    }
  ]
})


router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  setTimeout(()=>{
    store.commit('updateLoadingStatus', {isLoading: false})
  },200)
  
})

export default router