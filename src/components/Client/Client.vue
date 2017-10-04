<template>
	<div>
		<hype-header></hype-header>
		<hype-breeze></hype-breeze>
		<hype-footer></hype-footer>
	</div>
</template>

<script>
	import Header from './Header.vue'
	import Breeze from '../Dashboards/Breeze.vue';
	export default {
		components: {
			'hype-breeze': Breeze,
			'hype-header': Header,
		}
	};
</script>

<style lang="sass" scoped>
</style>