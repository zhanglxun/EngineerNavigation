<template>
    <a-card size="small" title="常用工具" class="card-home">
      <template #extra><a href="#">更多</a></template>
     
        <a-list 
            :grid="{ gutter: 16, column:4,xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4, xxxl: 2 }"
            :data-source="data">
            <template #renderItem="{ item }" >
                <a-list-item>
                    <a-list-item-meta
                    :description="item.description"
                    >
                    <template #title>
                        <a href="https://www.antdv.com/" target="_blank">{{ item.title }}</a>
                    </template>
                    <template #avatar>
                        <a-avatar :src="item.icon"/>
                    </template>
                    </a-list-item-meta>
            </a-list-item>
            </template>
        </a-list>
    </a-card>
    
    <a-card size="small" title="AIGC工具" class="card-home">
      <template #extra><a href="#">更多</a></template>
      
      <a-list 
            :grid="{ gutter: 16, column:4,xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4, xxxl: 2 }"
            :data-source="dataAIGC">
            <template #renderItem="{ item }" >
                <a-list-item>
                    <a-list-item-meta
                    :description="item.description"
                    >
                    <template #title>
                        <a href="https://www.antdv.com/" target="_blank">{{ item.title }}</a>
                    </template>
                    <template #avatar>
                        <a-avatar :src="item.icon"/>
                    </template>
                    </a-list-item-meta>
            </a-list-item>
            </template>
        </a-list>

    </a-card>

  </template>
  
<script>
import { defineComponent } from 'vue';

const data = [{
            icon:'/favicon.ico',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
        }, {
            icon:'https://p3-passport.byteimg.com/img/user-avatar/49a8afcc6e60a7f5200e189085269419~100x100.awebp',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
        }, {
            icon:'https://p3-passport.byteimg.com/img/user-avatar/49a8afcc6e60a7f5200e189085269419~100x100.awebp',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
        }, {
            icon:'https://p3-passport.byteimg.com/img/user-avatar/49a8afcc6e60a7f5200e189085269419~100x100.awebp',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
        }, {
            icon:'https://p3-passport.byteimg.com/img/user-avatar/49a8afcc6e60a7f5200e189085269419~100x100.awebp',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
        }, {
            icon:'https://p3-passport.byteimg.com/img/user-avatar/49a8afcc6e60a7f5200e189085269419~100x100.awebp',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
        }];
    const dataAIGC =[{
            icon:'/favicon.ico',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
        },{
            icon:'/favicon.ico',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
        },{
            icon:'/favicon.ico',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
        },{
            icon:'/favicon.ico',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
        },{
            icon:'/favicon.ico',
            title: '酷鸟远程',
            url:'',
            description:'一款很酷的远程管理工具',
    }];
export default defineComponent({
    setup() {
        return {
            data,
            dataAIGC
        };
    },
});
</script>

<style scoped>
.card-home{
   margin-bottom: 10px;
   border-radius: 5px
}
</style>