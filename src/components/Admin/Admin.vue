<template>
	<div>
		<hype-header></hype-header>
		<div class="container">

			<!-- BUTTON and FORM FIELD -->
			<div class="sidebar">
				<!--
				 <div class="field">
                    <label class="label">Client Name</label>
                    <div class="control">
                        <input class="input" require type="text" placeholder="Client Name" v-model="clientName">
						<br>
						<textarea class="input" type="text" placeholder="Description" v-model="clientDesc"></textarea>
                    </div>
                </div>
				-->
			<b-tooltip label="Add New Client" position="is-bottom">
				<button class="button is-primary" @click="addClient"><i class="fas fa-plus fa-3x"></i></button>
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
						<b-tooltip :label="'View ' + client.name + '\'s Projects'" position="is-top"><i class="fas fa-eye"></i></b-tooltip>
					</a>
					
					<a href="#" class="card-footer-item">
						<b-tooltip :label="'Edit ' + client.name + '\'s Settings'" position="is-top"><i class="fas fa-pencil-alt"></i></b-tooltip>
					</a>

					<a href="#" class="card-footer-item" @click="removeClient(client); success(client.name);">
						<b-tooltip :label="'Archive ' + client.name + ' and all Projects'" position="is-top" ><i class="fas fa-archive"></i></b-tooltip>
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
				clients: [
					{name: 'Farmlink', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
					{name: 'Fiesta Farms', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
					{name: 'LGO', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
					{name: 'Ingenuity', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
					{name: 'Hypenotic', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
					{name: 'Park People', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
					{name: 'OneGrid', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}],
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
			success(client) {
                this.$toast.open({
                    message: client + ' archived successfully!',
					type: 'is-success',
					duration: 2000,
                })
            },
        }
	};
</script>

<style scoped>

.container {
	margin: 20px auto;
	display: grid;
	grid-template-columns: 100px 1fr;
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