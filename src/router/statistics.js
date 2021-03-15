const routerMap = [{
    path: '/statistics',
    component: () =>
        import ('@/views/layout/index'),
    children: [{
        name: 'statistics-list',
        path: 'statistics-list',
        meta: { title: '个人主页', cached: true },
        component: () =>
            import ('@/views/statistics/statistics-list')
    }]
}]

export default { groupName: '主页', routes: routerMap, id: 'statistics' }