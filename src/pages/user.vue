<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <div>姓名:{{item.name}}</div>
      <div>电话号码:{{item.phone}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  methods: {},
};
</script>
<style scoped>
</style>
