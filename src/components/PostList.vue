<template>
    <a-list item-layout="horizontal" :data-source="props.postList">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
              :description="item.content"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="dog" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
</template>

<script setup lang="ts">
import dog from "../assets/dog.png";
import { withDefaults,defineProps, toRefs } from "vue";

interface Props {
  postList: any[];
}

const props = withDefaults(defineProps<Props>(), {
  postList: () => [],
});
</script>