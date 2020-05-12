import MainLayout from "layouts/MainLayout";

const routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/home',
    children: [
      {
        path: '/home', component: () => import('pages/Index.vue')
      },
      {
        path: '/schedule', component: () => import('pages/Schedule.vue')
       },
      {
        path: '/transparency', component: () => import('pages/Transparency.vue')
      },
      {
        path: '/admission', component: () => import('pages/Admission.vue')
      },
      {
        path: '/schooling', component: () => import('pages/Schooling.vue')
      },
      {
        path: '/ethics', component: () => import('pages/Ethics.vue')
      },
      {
        path: '/contacts', component: () => import('pages/Contacts.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
