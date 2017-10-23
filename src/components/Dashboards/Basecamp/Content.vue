<template>
	<div>
		<section class="section">
    		<div class="container">
				<div class="columns">
					<div class="column is-one-half">
						<div v-for="post in posts"> {{post.content}}</div>
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
			//https://launchpad.37signals.com/integrations/6896
			let clientID = '78bc53090c3a45c3c01cdc9dc06a2d7fba9dd2df';
			let clientSecret = '6c5f053edf21ee4fbce05c4a44cf6fac4ed94060';
			let redirectURI = 'http://myapp.com/oauth';
			
			axios.get('https://basecamp.com/1759522/api/v1/projects/11821772/messages/68207286.json',
			{
				auth: {
					username: clientID,
					password: clientSecret
				},
			})
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