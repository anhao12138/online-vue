import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import components from '@/components';
import axios from 'axios';
import '@/views/dialog';
import '@/style/index.scss'
import * as $u from '@/utils'

Vue.use(ElementUI);
Vue.use(components);
Vue.use(Vuex);

if (window.location.protocol === 'http:' && config.validateProtocol) {
    window.location.href = window.location.href.replace('http:', 'https:')
}
//   原型扩展
Vue.prototype.Bus = new Vue()
Vue.prototype.$config = config
Vue.prototype.$u = $u
Vue.prototype.$dispath = store.dispatch
Vue.prototype.$state = store.getters
Vue.prototype.$log = (info) => { console.log(info) }
Vue.prototype.jump = function(params) {
    try {
        router.push(params)
    } catch (e) {}
}
Vue.directive('auth', {
    inserted: function(el, bind) {
        let btnMap = store.getters.sesBtnAuthMap()
        let btnFlatMap = store.getters.sesBtnAuthFlatMap()
        let { pageName, id, prop } = bind.value
        if (id && btnFlatMap.includes(id)) return
        if (!btnMap[pageName] || !btnMap[pageName].includes(`${pageName}:${prop}`)) {
            el.parentNode.removeChild(el)
        }
    }
})
Vue.mixin({
    methods: {
        hasAuth(btn = '', menu = '') {
            let flatMap = store.getters.sesBtnAuthFlatMap()
            if (flatMap.includes(btn)) return true
            let map = this.$state.sesBtnAuthMap()
            menu = menu || this.$route.name
            return map[menu] ? map[menu].includes(`${menu}:${btn}`) : false
        }
    }
})
Vue.prototype.$check = function(form) {
    let self = this
    return new Promise((resolve, reject) => {
        self.$refs[form].validate((valid) => {
            resolve(valid)
        })
    })
}
Vue.prototype.$c = function(key, fn, params) {
    if (fn === 'all') {
        return [{
            value: '',
            label: params || '全部'
        }].concat(Constant.getArray(key))
    } else {
        return Constant.getArray(key, fn)
    }
}
let http = axios.create()

http.cors = (url, params, loading, noErr) => {
    let baseURL = process.env.VUE_APP_APIURL
    return http.post(url, qs.stringify(params), { loading, noErr, baseURL })
}

// 添加请求拦截器
http.interceptors.request.use(function(request) {
    request.loading && store.dispatch('setLoading', true)
    return request
})

// 添加响应拦截器
http.interceptors.response.use(function(response) {
    response.config.loading && store.dispatch('setLoading', false)

    switch (response.data.code) {
        case 200:
            break
        case 301:
            Vue.prototype.jump('/login')
            if (Vue.prototype.curDialog) Vue.prototype.curDialog.onClose()
            break
        default:
            !response.config.noErr && Vue.prototype.$message.error(response.data.msg || response.data.memo || response.data.message || '网络异常，请稍后再试...')
            break
    }
    return response.data
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})

Vue.prototype.$http = http

Vue.prototype.$getComponentSize = function() {
    return window.innerWidth < 480 ? 'mini' : null
}


createApp(App)
    .use(store)
    .use(router)
    .mount("#app");