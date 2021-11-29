<template>
  <div>
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <!-- <router-link :to="`/home/news/items/${item.id}/${item.title}/${item.content}`">{{ item.title }}</router-link>&nbsp;&nbsp; -->
        <!-- 
            以对象的形式来传值以及路由路径
         -->

        <router-link
          :to="{
            name: 'xiangqing',
            params: {
              id: item.id,
              title: item.title,
              content: item.content,
            },
          }"
          >{{ item.title }}</router-link
        >&nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
         newsList: [
        {
          id: "001",
          title: "震惊！！！,一男子....",
          content: "一男子走路用腿",
        },
        { id: "002", title: "可怕！！！,难道.....", content: "难道明天是昨天" },
        { id: "003", title: "就这？？？，xxx操作....", content: "狗都比他强" },
      ],
     
    };
  },
};
</script>

<style>
</style>