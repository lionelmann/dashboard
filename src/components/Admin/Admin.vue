<template>
	<div>
		<hype-admin-header></hype-admin-header>
		<div class="columns" style="margin: 0;">
			<hype-admin-sidenav></hype-admin-sidenav>
			<div class="column">
				<p>Auto</p>
			</div>
		</div>
		<hype-footer></hype-footer>
	</div>
</template>

<script>
	import AdminSideNav from './SideNav.vue'
	import Header from './Header.vue'
	export default {
		components: {
			'hype-admin-sidenav': AdminSideNav,
			'hype-admin-header': Header,
		}
	};
</script>

<style lang="sass" scoped>
</style>