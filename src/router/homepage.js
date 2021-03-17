const routerMap = [{
    path: '/homepage',
    component: () =>
        import ('@/views/homepage/homepage.vue'),
    children: [{
        name: 'index',
        path: 'index',
        meta: { title: '首页' },
        component: () =>
            import ('@/views/homepage/index')
    }]
}]

export default { groupName: '首页', routes: routerMap, singleNode: true, id: 'home' }