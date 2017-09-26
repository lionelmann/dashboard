<template>
    <div>
        <div class="uk-container uk-container-expand">
            <app-nav v-bind:menu-links="menuLinks"></app-nav>
        </div>
        <transition name="fade">
            <router-view></router-view>
        </transition>   
    </div>
</template>

<script>
    import axios from 'axios';
    import VueAxios from 'vue-axios';
	import Nav from './components/Nav.vue';
    export default {
        components: {
            appNav: Nav
        },
        data: function () {
            return {
                menuLinks: [],
                // pages: []    
            }
        },
        mounted: function() {
            this.getMenu();
            // this.getPages();
        },
        methods: {
            getMenu: function() {
              var app = this

              axios.get('http://cms.hypelabs.ca/wp-json/wp-api-menus/v2/menus/2')
              .then(function (response) {
                app.menuLinks = response.data.items;
                console.log(response.data);
              })
              .catch(function (error) {
                console.log(error)
              })
            }
            // getPages: function() {
            //   var app = this
            //   // DEV
            //   // axios.get('http://cms.hype-vue.dev/wp-json/wp/v2/pages?_embed')
            //   // HYPE
            //   axios.get('http://cms.hypelabs.ca/wp-json/wp/v2/pages?_embed')
            //   .then(function (response) {
            //     app.pages = response.data;
            //     console.log(response.data);
            //   })
            //   .catch(function (error) {
            //     console.log(error)
            //   })
            // }
        }
    }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
