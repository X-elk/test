<template>
  <div>
    <ul>
      <li>id:编号{{ id }}</li>
      <li>title:标题{{ title }}</li>
      <li>content:内容{{ content }}</li>
    </ul>
  </div>
</template>


<script>
// const { id, title, content } = this.$route.params;
export default {
  name: "itmes",
  props: ["id", "title", "content"],
  mounted() {
    console.log(this);
  },
  //使用pros后就不用书写计算属性了
  //   computed: {
  //     id() {
  //       return this.$route.query.id;
  //     },
  //     title() {
  //       return this.$route.query.title;
  //     },
  //     content() {
  //       return this.$route.query.content;
  //     },
  //   },
};
</script>


<style>
</style>