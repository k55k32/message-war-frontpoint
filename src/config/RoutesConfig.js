export default [
  {
    path: '/login',
    component: r => require(['src/pages/login/Login.vue'], r),
    children: [
      {
        path: 'login',
        name: 'login',
        component: r => require(['src/pages/login/LoginForm.vue'], r)
      },
      {
        path: 'register',
        name: 'register',
        component: r => require(['src/pages/login/RegisterForm.vue'], r)
      }
    ]
  }
]
