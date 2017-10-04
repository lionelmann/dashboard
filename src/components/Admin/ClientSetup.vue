<template>
	<div>
		<hype-header></hype-header>
		<div class="columns" style="margin: 0;">
			<hype-sidenav></hype-sidenav>
            <div class="column">
                <div class="field">
                    <label class="label">Client Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Text input">
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-primary">Add Client</button>
                    </div>
                    <div class="control">
                        <button class="button">Delete Client</button>
                    </div>
                </div>
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
			'hype-sidenav': AdminSideNav,
			'hype-header': Header,
		}
	};
</script>

<style lang="sass" scoped>
</style>