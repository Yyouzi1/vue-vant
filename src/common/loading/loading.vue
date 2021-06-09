<template>
  <div id="loading">
    <van-overlay :show="show" class-name="wrapper">
      <van-loading type="spinner" />
    </van-overlay>    
  </div>
</template>

<script>
import Vue from 'vue';
import { Loading } from 'vant';
import { Overlay } from 'vant';
import 'vant/lib/index.css'
Vue.use(Overlay);
Vue.use(Loading);
export default {
  name:'loadingComponent',
  props: {
    show: Boolean
  },
  data() {
    return {      
    };
  },
  methods: {
    
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
