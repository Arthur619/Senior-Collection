<template>
  <div class="index-page">
    <a-input-search
      v-model:value="searchParms.text"
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
<!--    {{ JSON.stringify(postList)用于输出后端返回结果 }}-->
    <MyDivider />
    <a-tabs v-model:activeKey="activeKey" @change="onTabChange">
    <a-tab-pane key="Post" tab="文章">
      <PostList  :post-list="postList" />
    </a-tab-pane>
    <a-tab-pane key="Picture" tab="图片" >
      <PictureList />
    </a-tab-pane>
    <a-tab-pane key="User" tab="用户">
      <UserList :user-list="userList" />
    </a-tab-pane>
  </a-tabs>
  </div>
</template>

<script setup lang="ts">
import PictureList from '@/components/PictureList.vue';
import PostList from '@/components/PostList.vue';
import UserList from '@/components/UserList.vue';
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import myAxios from "@/plugins/myAxios";
import MyDivider from "@/components/MyDivider.vue";

const postList =ref([]);
const userList = ref([]);

myAxios.post("post/list/page/vo",{} ).then((res: any) => {
  postList.value = res.records;
});

myAxios.post("user/list/page/vo",{} ).then((res: any) => {
  userList.value = res.records;
});

const route = useRoute();

const router = useRouter();
const activeKey = route.params.category;

const initSearchParams = {
  text: '',
  pagesize: 10,
  pageNum: 1,
}
const searchParms = ref(initSearchParams);

watchEffect(() => {
  searchParms.value = {
    ...initSearchParams,
    text: route.query.text
  } as any;
})

const onSearch =(value: string)=>{
  alert(value);
  router.push({
    query: searchParms.value
  });
};

const onTabChange =(key: string) => {
  router.push({
    path: `/${key}`,
    query: searchParms.value
  });
}
</script>
