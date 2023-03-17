<template>
    <!-- <a-card size="small" title="常用工具" class="card-home">
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
    </a-card> -->
    
    <a-card size="small" :title="item.title" class="card-home" v-for="item in datalist.AitistLabData">
      <template #extra><a href="#">更多</a></template>
      
      <a-list 
            :grid="{ gutter: 24, column:4,xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4, xxxl: 4 }"
            :data-source="item.data">
            <template #renderItem="{ item }" >
                <a-list-item>
                    <a-list-item-meta
                    :description="item.description"
                    >
                    <template #title>
                        <a :href="item.url" target="_blank">{{ item.title }}</a>
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
import { ref,defineComponent } from 'vue';
import  datalistHome  from "../utils/index";

const datalist = ref(datalistHome)

export default defineComponent({
    setup() {
        return {
            datalist
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