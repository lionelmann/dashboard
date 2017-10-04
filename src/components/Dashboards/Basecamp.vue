<template>
	<div>
		<section class="section">
    		<div class="container">
				<div class="columns">
					<div class="column is-one-half">
						<div v-for="post in posts"><b>Project Name:</b> {{post.name}}</div>
					</div>
  					<div class="column"></div>
				</div>
    		</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				posts: []
			}
		},
		created() {
			//axios.get('https://launchpad.37signals.com/authorization/new?type=web_server&client_id=78bc53090c3a45c3c01cdc9dc06a2d7fba9dd2df&redirect_uri=https://hypelabs.ca')
        	.then(response => {
				// JSON responses are automatically parsed.
				this.posts = response.data;
				console.log(response)
			}, error => {
            	console.log(error);
        	})
		}
	};
</script>

<style lang="sass" scoped>

</style>