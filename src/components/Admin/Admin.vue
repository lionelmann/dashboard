<template>
	<div>
		<hype-header></hype-header>
		<div class="container">

			<!-- BUTTON and FORM FIELD -->
			<div class="sidebar">
				 <div class="field">
                    <label class="label">Client Name</label>
                    <div class="control">
                        <input class="input" require type="text" placeholder="Client Name" v-model="clientName">
						<br>
						<textarea class="input" type="text" placeholder="Description" v-model="clientDesc"></textarea>
                    </div>
                </div>
			<b-tooltip label="Add New Client" position="is-bottom">
				<button class="button is-primary" @click="addClient"><i class="fas fa-plus"></i></button>
			</b-tooltip>
			</div>

			<!-- CARD -->
			<div class="cards">
			<div class="card" v-for="client in clients">
				<header class="card-header">
					<p class="card-header-title">{{ client.name }}</p>
				</header>
				<div class="card-content">
					<div class="content">
						{{client.desc}}
						<br>
						<time datetime="2016-1-1">Created: Jan 27, 2018 </time>
					</div>
				</div>
				<footer class="card-footer">
					
					<a href="#" class="card-footer-item">
						<b-tooltip :label="'Add New Project to ' + client.name" position="is-left" multilined size="is-small"><i class="fas fa-plus-circle"></i></b-tooltip>
					</a>
					
					<a href="#" class="card-footer-item">
						<b-tooltip :label="'Edit ' + client.name + ' Settings'" position="is-top"><i class="fas fa-pencil-alt"></i></b-tooltip>
					</a>

					<a href="#" class="card-footer-item" @click="removeClient(client)" >
						<b-tooltip :label="'Delete ' + client.name" position="is-right"><i class="far fa-trash-alt"></i></b-tooltip>
					</a>
				</footer>
			</div>
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
				clients: [],
            }
		},
		methods: {
            addClient() {
				if(this.clientName != '' && this.clientDesc != '') {
					this.clients.unshift({
						name: this.clientName,
						desc: this.clientDesc
						}); 
					this.clientName = '';
					this.clientDesc = '';
					//console.log(this.clients)
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
	grid-template-columns: 200px 1fr;
	grid-template-areas: "sidebar content" "sidebar .";
	grid-gap: 20px;
}

.sidebar {
	grid-area: sidebar;
}

.cards {
	display: grid;
	grid-area: content;
	grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
	grid-gap: 20px;
}

button {
	height: 100px;
	width: 80px;
}

time {
	display: block;
	font-size: .815rem;
	margin-top: 1rem;
}



</style>