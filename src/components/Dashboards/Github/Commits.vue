<template>
	<div>
		<section class="section">
    		<div class="container">
				<div class="columns">
					<div class="column is-one-half">
						<div>Number of commits: {{ countCommits() }}</div>
						<div v-for="post in posts"><b>Commit Message:</b> {{post.commit.message}}</div>
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
		methods: {
			countCommits(){
				return this.posts.length;
			}
		},
		created() {
			axios.get('https://api.github.com/repos/hypenotic/pp-map/commits')
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