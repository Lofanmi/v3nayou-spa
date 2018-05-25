import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('@/components/pages/Home.vue')), 'home')
const ucenter = r => require.ensure([], () => r(require('@/components/pages/UCenter.vue')), 'ucenter')
const schedule = r => require.ensure([], () => r(require('@/components/pages/Schedule.vue')), 'schedule')
const score = r => require.ensure([], () => r(require('@/components/pages/Score.vue')), 'score')
const teacher = r => require.ensure([], () => r(require('@/components/pages/Teacher.vue')), 'teacher')
const error = r => require.ensure([], () => r(require('@/components/pages/Error.vue')), 'error')
const bug = r => require.ensure([], () => r(require('@/components/pages/Bug.vue')), 'bug')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/ucenter',
      name: 'ucenter',
      component: ucenter
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: schedule
    },
    {
      path: '/score',
      name: 'score',
      component: score
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: teacher
    },
    {
      path: '/error/:message',
      name: 'error',
      component: error
    },
    {
      path: '/bug',
      name: 'bug',
      component: bug
    }
  ]
})
