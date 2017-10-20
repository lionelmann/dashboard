<template>
	<div>
		<section class="section">
    		<div class="container">
				<div class="columns">
					<div class="column is-one-half">
						<div v-for="post in posts"><b>Repo Name:</b> {{post.name}}</div>
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
			axios.get('https://api.github.com/users/hypenotic/repos')
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