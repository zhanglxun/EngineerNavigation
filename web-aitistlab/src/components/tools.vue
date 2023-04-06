<template>
    
    <a-card size="small" :title="item.categoryName" class="card-home" v-for="item in datalist.websiteReply">
      <template #extra><a href="#">更多</a></template>
      
      <a-list 
            :grid="{ gutter: 24, column:4,xs: 1, sm: 2, md: 2, lg: 2, xl: 4, xxl: 4, xxxl: 6 }"
            :data-source="item.website">
            <template #renderItem="{ item }" >
                <a-list-item>
                    <a-list-item-meta
                    :description="item.summary"
                    >
                    <template #title>
                        <a :href="item.websiteUrl" target="_blank">{{ item.websiteName }}</a>
                    </template>
                    <template #avatar>
                        <a-avatar :src="item.websiteIcon"/>
                    </template>
                    </a-list-item-meta>
            </a-list-item>
            </template>
        </a-list>

    </a-card>

</template>

<script lang="ts" >
import { ref,defineComponent } from 'vue';
import  datalistTools  from "../utils/tools";
import axios from 'axios'

const datalist={websiteReply:[
    {
        categoryName:'',
        website:[
            {
                websiteName:'',
                websiteUrl:'',
                websiteIcon:'',
                summary:''
            }
        ]
    }
]}

const url='http://43.163.230.137:8000/website/websiteHome?catePare=2'

export default defineComponent({
    setup() {
        //对url使用axios请求数据
       axios.get(url).then(function (response) {
            datalist.websiteReply=response.data.websiteReply;
            //console.log(datalist);
        }).catch(function (error) {
            console.log(error);
        });
        return {
            datalist
        };
    },

});

</script>
