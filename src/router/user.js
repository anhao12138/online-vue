const routerMap = [{
        path: '/user',
        component: () =>
            import ('@/views/layout/index'),
        children: [{
            name: 'user-list',
            path: 'user-list',
            props: true,
            meta: { title: '岗位' },
            component: () =>
                import ('@/views/user/user-list')
        }]
    },
    {
        path: '/user',
        meta: { title: '运营' },
        component: () =>
            import ('@/views/layout/index'),
        children: [{
                name: 'fixer-list',
                path: 'fixer-list',
                meta: { title: '前端', cached: true },
                button: [
                    { prop: 'add', label: '新增' },
                    { id: 'fixed-list-delete', prop: 'delete', label: '删除' }
                ],
                component: () =>
                    import ('@/views/user/fixer-list')
            },
            {
                name: 'deliver-list',
                path: 'deliver-list',
                meta: { title: 'Java', cached: true },
                component: () =>
                    import ('@/views/user/deliver-list')
            }
        ]
    },
    {
        path: '/user',
        component: () =>
            import ('@/views/layout/index'),
        children: [{
            name: 'user-detail',
            path: 'user-detail',
            hidden: true,
            meta: { title: '岗位详情', cached: false },
            component: () =>
                import ('@/views/user/user-detail')
        }]
    }
]

export default { groupName: '岗位', routes: routerMap, id: 'user' }