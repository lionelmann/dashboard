<template>
	<div>
		<hype-header></hype-header>
		<div class="container">

			<!-- BUTTON and FORM FIELD -->
			<div class="item">
				 <div class="field">
                    <label class="label">Client Name</label>
                    <div class="control">
                        <input class="input" require type="text" placeholder="Client Name" v-model="clientName">
						<br>
						<input class="input" type="text" placeholder="Description" v-model="clientDesc">
                    </div>
                </div>
				<button class="button is-primary" @click="addClient">Add Client</button>
			</div>

			<!-- CARD -->
			<div class="card" v-for="client in clients">
				<header class="card-header">
					<p class="card-header-title">Client: {{client.name}}</p>
				</header>
				<div class="card-content">
					<div class="content">
						{{client.desc}}
						<br>
						<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
					</div>
				</div>
				<footer class="card-footer">
					<a href="#" class="card-footer-item">Edit</a>
					<a href="#" class="card-footer-item" @click="removeClient(client)" >Delete</a>
				</footer>
			</div>
			
		</div>
		<hype-footer></hype-footer>
	</div>
</template>


<script>
	import Header from './Header.vue';
	export default {
		components: {
			'hype-header': Header,
		},
		data() {
            return {
				clientName: '',
				clientDesc: '',
                clients: []
            }
		},
		methods: {
            addClient() {
				if(this.clientName != '' && this.clientDesc != '') {
					this.clients.push({
						name: this.clientName,
						desc: this.clientDesc
						}); 
					this.clientName = '';
					this.clientDesc = '';
					console.log(this.clients)
				}
            },
            removeClient(client) {
				let i = this.clients.indexOf(client);
				if(i != -1) {
					this.clients.splice(i, 1);
				}
		    },
        }
	};
</script>

<style scoped>

.container {
	margin: 20px auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 20px;
}

button {
	height: 100px;
	width: 80px;
}



</style>