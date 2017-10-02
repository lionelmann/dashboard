<template>
	<div>
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container">
				<h1 class="title">
					Client Weekly Dashboard
				</h1>
				<h2 class="subtitle">
					Weekly Progress
				</h2>
				</div>
			</div>
		</section>
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
		<hype-footer></hype-footer>
	</div>
</template>

<script>
	import axios from 'axios';
	import Footer from './Shared/Footer.vue';
	export default {
		data() {
			return {
				posts: []
			}
		},
		components: {
			'hype-footer': Footer,
		},
		created() {
			axios.get('https://api.breeze.pm/projects.json?api_token=ymzzTy1nnymU7HiyHgPV')
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