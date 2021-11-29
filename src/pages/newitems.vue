<template>
  <div>
    <ul>
      <li>id:消息编号{{ $route.params.id }}</li>
      <li>title:消息标题{{ $route.params.title }}</li>
      <li>content:消息内容{{ $route.params.content }}</li>
    </ul>
  </div>
</template>


<script>
// const { id, title, content } = this.$route.params;
export default {
  name: "itmes",
  mounted() {
    console.log(this);
  },
  computed: {},
};
</script>


<style>
</style>