<template>
	<div>
		<!--<section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
            <h1 class="title">
                Project Setup Dashboard
            </h1>
            <h2 class="subtitle">
                Project configuration and summary {{ doubleCounter }} {{ stringCounter }}
				{{name}}
            </h2>
            </div>
        </div>
    </section>-->
	<hype-header></hype-header>
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
			<b-tooltip label="Add New Project" position="is-bottom">
				<button class="button is-primary" @click="addClient"><i class="fas fa-plus fa-3x"></i></button>
			</b-tooltip>
			</div>

			<!-- CARD -->
			<div class="cards">
			<div class="card" v-for="project in projects">
				<header class="card-header">
					<p class="card-header-title">{{ project.name }}</p>
				</header>
				<div class="card-content">
					<div class="content">
						{{project.desc}}
						<br>
						<time datetime="2016-1-1">Last Updated: Jan 27, 2018 </time>
					</div>
				</div>
				<footer class="card-footer">

					<a href="#" class="card-footer-item">
						<b-tooltip label="Edit Project" position="is-top"><i class="fas fa-pencil-alt"></i></b-tooltip>
					</a>

					<a href="#" class="card-footer-item" @click="removeProject(project); success(project.name);">
						<b-tooltip label="Archive Project" position="is-top" ><i class="fas fa-archive"></i></b-tooltip>
					</a>

					<a href="#" class="card-footer-item">
						<b-tooltip label="Delete Project" position="is-top"><i class="fas fa-trash"></i></b-tooltip>
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
	import {mapGetters} from 'vuex';
	import { mapActions } from 'vuex';
	export default {
		components: {
			'hype-header': Header,
		},
		data() {
            return {
				name: this.$store.state.name,
				clientName: '',
				clientDesc: '',
				projects: this.$store.state.projects,
            }
		},
		// TESTING STORE
		computed: {
			...mapGetters([
				'doubleCounter',
				'stringCounter'
			])
		},
		/*computed: {
			counter() {
				return this.$store.getters.doubleCounter;
			},
			clicks() {
				return this.$store.getters.stringCounter;
			}
		},*/
		methods: {
			...mapActions([
				'removeProject'
			]),
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
			success(project) {
                this.$toast.open({
                    message: project + ' archived successfully!',
					type: 'is-success',
					duration: 2000,
				})
				
			},
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