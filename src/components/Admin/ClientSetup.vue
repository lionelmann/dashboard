<template>
	<div>
		<hype-header></hype-header>
		<div class="columns" style="margin: 0;">
			<hype-sidenav></hype-sidenav>
            <div class="column">
                <ul>
				    <li v-for="name in names"><router-link :to="{ path: '/admin/' + name }">{{name}}</router-link></li>
			    </ul>
                <div class="field">
                    <label class="label">Client Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Client Name" v-model="newClient">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Breeze Project ID</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="ID">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Github Repository Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Repository">
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-primary" @click="addClient">Add Client</button>
                    </div>
                    <div class="control">
                        <button class="button" @click="removeClient">Delete Client</button>
                    </div>
                </div>
            </div>
        </div>
        <hype-footer></hype-footer>
    </div>
</template>

<script>
	import Header from './Header.vue'
	export default {
        data() {
            return {
                newClient: '',
                names: []
            }
        },
        components: {
			'hype-header': Header,
		},
        methods: {
            addClient() {
                this.names.push(this.newClient); // push new name to our list.
                this.newClient = '';
            },
            removeClient() {
			    this.names.pop(this.newClient); // pop new name from our list.
		    },
        }
	};
</script>

<style lang="sass" scoped>
</style>