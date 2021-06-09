<template>
  <div class="container">
    <div class="title">index</div>
    <van-field v-model="userinfo.name" placeholder="请输入姓名" />
    <van-field v-model="userinfo.phone" placeholder="请输入手机号码" />
    <router-link to="/home">home</router-link>
    <router-link to="/user">user</router-link>
    <van-button type="primary" @click="request">请求</van-button>
    <van-button type="primary" @click="add">添加</van-button>
    <van-button type="primary" @click="clear">清空</van-button>
    <div v-for="(item, index) in list" :key="index">
      <div>姓名:{{item.name}}</div>
      <div>电话号码:{{item.phone}}</div>
    </div>
  </div>
</template>

<script>
import { get_userinfo } from '@/api/common';
export default {
  name: 'index',
  data() {
    return {
      userinfo: {
        name: '',
        phone: '',
      },
    };
  },
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  mounted() {},
  methods: {
    request() {
      get_userinfo();
    },
    add() {
      const data = this.userinfo;
      this.$store.dispatch('add', data);
      this.userinfo = {};
    },
    clear() {
      this.$store.dispatch('clear', false);
    },
  },
};
</script>
<style scoped>
.title {
  background: skyblue;
  width: 100px;
  font-size: 16px;
}
</style>
