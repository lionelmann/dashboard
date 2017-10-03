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
		<!--<hype-basecamp></hype-basecamp>-->
		<hype-breeze></hype-breeze>
		<hype-footer></hype-footer>

	</div>
</template>

<script>
	import Breeze from '../Dashboards/Boards/Breeze.vue';
	//import Basecamp from '../Dashboards/Boards/Basecamp.vue';
	
	export default {
		components: {
			'hype-breeze': Breeze,
			//'hype-basecamp': Basecamp,
		}
	};
</script>

<style lang="sass" scoped>
</style>