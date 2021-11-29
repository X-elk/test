<template>
  <div>
    <ul>
      <li v-for="m in newsList" :key="m.id">
        <router-link
          :to="{
            name: 'xiangqing2',
            params: {
              id: m.id,
              title: m.title,
              content: m.content,
            },
          }"
          >{{ m.title }}</router-link
        >&nbsp;&nbsp;
      </li>
    </ul>
    <hr />
    <!-- 在这个位置 展示更加详细的消息内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      newsList: [
        { id: "001", title: "壹", content: "一" },
        { id: "002", title: "贰", content: "二" },
        { id: "003", title: "叁", content: "三" },
      ],
    };
  },
};
</script>

<style>
</style>