
<template>
  <a-layout class="layout">

    <a-row justify="center">
      <a-col :span="18">
        <a-layout-header>
          <div class="logo">
            <text style="">AitistLab</text>
          </div>
          <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="dark"
            mode="horizontal"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="1"><a href="#/home">首页</a></a-menu-item>
            <a-menu-item key="2"><a href="#/weekdaily">AIGC周刊</a></a-menu-item>
            <a-menu-item key="3"><a href="#/service">找服务</a></a-menu-item>
            <a-menu-item key="4"><a href="#/tools">工具箱</a></a-menu-item>
          </a-menu>
           
        </a-layout-header>

      <a-layout-content style="padding: 0 2px">

        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>

        <div>
          <component :is="currentView" />
        </div>
        
      </a-layout-content>

      <Footer></Footer>
      
    </a-col>
  </a-row>
  
  </a-layout>

</template>


<script lang="ts">
import { defineComponent,computed, ref } from 'vue';
import Footer from './components/footer.vue';
import Home from './components/home.vue';
import Weekdaily from './components/weekdaily.vue'
import Service from './components/service.vue'
import Tools from './components/tools.vue'
import NotFound from './components/notfound.vue'

const routes={
  '/home':Home,
  '/weekdaily':Weekdaily,
  '/service':Service,
  '/tools':Tools,
}

export default defineComponent({
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
    };
  },
  components:{
    Footer,
    Home,
    Weekdaily,
    Service,
    Tools
  }
});

</script>

<style scoped>
.site-layout-content {
  background: #fff;
}
.logo {
  float: left;
  width: 120px;
  height: 31px;
  /* margin: 16px 24px 16px 0; */
  /* background: rgba(255, 255, 255, 0.3); */
  /* background-image: "/assets/logo.svg"; */
  transform: translate(8.96875, 123);
  font-family: Comfortaa;
  font-size: 24px;
  color: #fff;
}

.ant-row-rtl .logo {
  float: right;
  /* margin: 16px 0 16px 24px; */
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
