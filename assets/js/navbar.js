// document.querySelector('.navbar-toggler')
const { createApp, ref } = Vue

var app = new Vue({
    el: "#app",
    data: {
      msg: "Vuejs Example with CDN",
      showMenus: false,
      showNavItem1Details:false
    },
    methods:{
        toggleNavbar(){
            this.showMenus = !this.showMenus;
        },
        expandNavItem(index){
          if(index === 1){
            this.showNavItem1Details = !this.showNavItem1Details;
          }

        }
    }
  });