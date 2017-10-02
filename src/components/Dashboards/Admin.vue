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
		<hype-breeze></hype-breeze>
		<hype-footer></hype-footer>
	</div>
</template>

<script>
	import Breeze from '../Dashboards/Boards/Breeze.vue';
	import Footer from '../Shared/Footer.vue';
	export default {
		components: {
			'hype-footer': Footer,
			'hype-breeze': Breeze,
		}
	};
</script>

<style lang="sass" scoped>
</style>