<template>
	<div>
		<hype-header></hype-header>
		<div class="columns" style="margin: 0;">
			<hype-sidenav></hype-sidenav>
			<div class="column">
				<hype-breeze></hype-breeze>
			</div>
		</div>
		<hype-footer></hype-footer>
	</div>
</template>

<script>
	import Breeze from '../Dashboards/Breeze.vue';
	import AdminSideNav from './SideNav.vue';
	import Header from './Header.vue';
	export default {
		components: {
			'hype-sidenav': AdminSideNav,
			'hype-header': Header,
			'hype-breeze': Breeze,
		}
	};
</script>

<style lang="sass" scoped>
</style>