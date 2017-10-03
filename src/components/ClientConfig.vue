<template>
	<div>
		<section class="hero is-success">
			<div class="hero-body">
				<div class="container">
				<h1 class="title">
					Hypenotic Admin Dashboard
				</h1>
				<h2 class="subtitle">
					Client configuration
				</h2>
				</div>
			</div>
		</section>
		
		<div class="columns" style="margin: 0;">
			<hype-admin-sidenav></hype-admin-sidenav>
			<div class="column">
                <div class="field">
                <label class="label">Client Name</label>
                <div class="control">
                 <input class="input" type="text" placeholder="Text input">
                </div>
                </div>

                <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
                    <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fa fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">This username is available</p>
                </div>

                <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
                    <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fa fa-warning"></i>
                    </span>
                </div>
                <p class="help is-danger">This email is invalid</p>
                </div>

                <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                    <div class="select">
                    <select>
                        <option>Select dropdown</option>
                        <option>With options</option>
                    </select>
                    </div>
                </div>
                </div>

                <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
                </div>

                <div class="field">
                <div class="control">
                    <label class="checkbox">
                    <input type="checkbox">
                    I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
                </div>

                <div class="field">
                <div class="control">
                    <label class="radio">
                    <input type="radio" name="question">
                    Yes
                    </label>
                    <label class="radio">
                    <input type="radio" name="question">
                    No
                    </label>
                </div>
                </div>

                <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link">Cancel</button>
                </div>
                </div>
                            </div>
                        </div>
                        
                        <hype-footer></hype-footer>
                    </div>
                </template>

<script>
	export default {
		
	};
</script>

<style lang="sass" scoped>
</style>