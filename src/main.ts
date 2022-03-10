import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import 'vant/lib/index.css'
import { Button, Checkbox, NavBar, Picker, Field, Dialog, Popup, Toast, CountDown, Swipe, SwipeItem, Image,
  Icon, Search, Tabbar, TabbarItem, Tag } from 'vant'
import SvgIcon from './components/SvgIcon.vue'

const app = createApp(App)
app.use(Button)
.use(Checkbox)
.use(NavBar)
.use(Picker)
.use(Field)
.use(Picker)
.use(Dialog)
.use(Popup)
.use(Toast)
.use(CountDown)
.use(Swipe)
.use(SwipeItem)
.use(Image)
.use(Icon)
.use(Tabbar)
.use(TabbarItem)
.use(Search)
.use(Tag)
.component('svg-icon', SvgIcon)
.use(router)
.use(createPinia())
.mount('#app')
