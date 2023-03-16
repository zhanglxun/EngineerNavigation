import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css';

// import './assets/main.css'

const app=createApp(App)
createApp(App).use(Antd).mount('#app')
// createApp(App).mount('#app')
