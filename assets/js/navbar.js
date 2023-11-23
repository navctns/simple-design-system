// document.querySelector('.navbar-toggler')
const { createApp, ref } = Vue

var app = new Vue({
    el: "#app",
    data: {
      msg: "Vuejs Example with CDN",
      showMenus: false
    },
    methods:{
        toggleNavbar(){
            this.showMenus = !this.showMenus;
        }
    }
  });