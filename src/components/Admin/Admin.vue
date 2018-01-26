<template>
	<div>
		<hype-header></hype-header>
		<div class="container">


<div class="columns is-multiline is-centered">
  <div class="column">
    <p class="is-info">
      <code class="html">is-narrow</code><br>
      First Column
    </p>
  </div>
  <div class="column">
    <p class="is-success">
      <code class="html">is-narrow</code><br>
      Our Second Column
    </p>
  </div>
  <div class="column">
    <p class="is-danger">
      <code class="html">is-narrow</code><br>
      Third Column
    </p>
  </div>
  <div class="column">
    <p class="is-info">
      <code class="html">is-narrow</code><br>
      The Fourth Column
    </p>
  </div>
  <div class="column">
    <p class="is-success">
      <code class="html">is-narrow</code><br>
      Fifth Column
    </p>
  </div>
   <div class="column">
    <p class="is-success">
      <code class="html">is-narrow</code><br>
      Fifth Column
    </p>
  </div>
   <div class="column">
    <p class="is-success">
      <code class="html">is-narrow</code><br>
      Fifth Column
    </p>
  </div>
  
</div>
</div>


		<div class="columns" style="margin: 0;">
			<div class="column">
				<button class="button is-primary is-medium" @click="isComponentModalActive = true">
                <i class="fas fa-plus-circle"></i>
            </button>

            <b-modal :active.sync="isComponentModalActive" has-modal-card>
                <modal-form v-bind="formProps"></modal-form>
            </b-modal>
			</div>
		</div>
		<hype-footer></hype-footer>
	</div>
</template>


<script>
	import ClientSetup from './ClientSetup.vue'
	import Header from './Header.vue';
	export default {
		components: {
			'hype-header': Header,
			ClientSetup
		},
		data() {
            return {
                isComponentModalActive: false,
                formProps: {
                    email: 'evan@you.com',
                    password: 'testing'
                }
            }
        }
	};
</script>

<style scoped>
</style>