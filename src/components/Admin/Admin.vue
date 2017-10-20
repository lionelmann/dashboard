<template>
	<div>
		<hype-header></hype-header>
		<div class="columns" style="margin: 0;">
			<hype-sidenav></hype-sidenav>
			<div class="column">
				<hype-basecamp-message></hype-basecamp-message>
				<hype-breeze></hype-breeze>
				<hype-github></hype-github>
				<hype-gitcommit></hype-gitcommit>
			</div>
		</div>
		<hype-footer></hype-footer>
	</div>
</template>


<script>
	import BasecampMessage from '../Dashboards/Basecamp/Content.vue';
	import Breeze from '../Dashboards/Breeze/Breeze.vue';
	import GitCommits from '../Dashboards/Github/Commits.vue';
	import Github from '../Dashboards/Github/Github.vue';
	import AdminSideNav from './SideNav.vue';
	import Header from './Header.vue';
	export default {
		components: {
			'hype-sidenav': AdminSideNav,
			'hype-header': Header,
			'hype-breeze': Breeze,
			'hype-github': Github,
			'hype-gitcommit': GitCommits,
			'hype-basecamp-message': BasecampMessage,
		}
	};
</script>

<style lang="sass" scoped>
</style>