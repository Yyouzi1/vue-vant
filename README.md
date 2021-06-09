# vue-vant
基于webpack搭建简易移动端vue+vant

webpack搭建相关文档:
https://www.cnblogs.com/guoduan/p/12867482.html

自适应方案:  vw布局,实现开发单位填写px,自动转为vw实现自适应 (px2vw-view-loader)

插件: 
  axios: 打包可以通过不同的打包命令访问不同的请求地址 
         实现所有请求增加请求头参数token 
         实现全局请求loading遮罩层 (封装组件通过js调用)
  动态修改页面title值,根据不同路由展示不同title信息 (router导航守卫)
  vuex,且需求实现根据方法参数值设置是否需要在页面刷新/关闭重启后保留此值 (vuex插件myPlugin)
