<template>
	<div>
		<section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
            <h1 class="title">
                Client Setup Dashboard
            </h1>
            <h2 class="subtitle">
                Client configuration and summary
            </h2>
            </div>
        </div>
    </section>
		<div class="wrapper">
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

				<!-- TO TEST STORE -->
				<button @click="increment">Increment</button>
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
							<b-tooltip :label="'View ' + client.name + '\'s Dashboard'" position="is-top"><i class="fas fa-eye"></i></b-tooltip>
						</a>
						<a href="#" class="card-footer-item">
							<b-tooltip label="Add New Project" position="is-top"><router-link :to="'/admin/' + toLowercase(client.name)"><i class="fas fa-plus-circle"></i></router-link></b-tooltip>
						</a>			
						<a href="#" class="card-footer-item">
							<b-tooltip :label="'Edit ' + client.name + '\'s Settings'" position="is-top"><i class="fas fa-cog"></i></b-tooltip>
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
				clients: this.$store.state.clients,
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
					duration: 1000,
				})
			},
			toLowercase(name) {
				let lowercase = name.toLowerCase();
				return lowercase.replace(" ", '-');
			},
			increment() {
				this.$store.state.counter++;
			}
        }
	};
</script>

<style scoped>

.wrapper {
	margin: 30px;
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