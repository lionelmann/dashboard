<template>
	<nav class="uk-navbar">
		<div class="uk-navbar-left">
			<router-link to="/">Hypenotic</router-link>
		</div>
		<div class="uk-navbar-right">
			<ul class="uk-navbar-nav">
				<li v-for="link in menuLinks">
					<router-link v-if="`${link.object_slug}` == 'home'" to="/">
				    {{ link.title }}
				    </router-link>
					<router-link v-else :to="`/${link.object_slug}`">
				 		{{ link.title }}
				 	</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

// to="/dev/hype-vue/"
// :to="`/dev/hype-vue/${link.object_slug}`"

<script>
    import axios from 'axios';
    import VueAxios from 'vue-axios';
    export default {
    	props: ['menuLinks'],
        data: function () {
            return {
                // menuLinks: [] 
            }
        },
        beforeCreate() {
            // var app = this
            // // LOCAL
            // // axios.get('http://cms.hype-vue.dev/wp-json/wp-api-menus/v2/menus/2')
            // // HYPE
            // axios.get('http://cms.hypelabs.ca/wp-json/wp-api-menus/v2/menus/2')
            // // PROD
            // // axios.get('http://cms.hypenotic.com/wp-json/wp-api-menus/v2/menus/2')
            // .then(function (response) {
            //   app.menuLinks = response.data.items;
            //   console.log(response.data.items);
            // })
            // .catch(function (error) {
            //   console.log(error)
            // })
        },
        methods: {
        }
    }
</script>