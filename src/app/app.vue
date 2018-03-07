<!--  -->

<script lang="ts" src="./app.ts"></script>

<style lang="scss" src="@/styles/all.scss"></style>

<style>
/*  */

html,
body {
	overflow-y: auto;
}


/*  */

</style>

<template>
	<section id="app" class="hero is-fullheight is-bold is-dark">
		<div class="hero-head">
			<nav class="navbar">
				<div class="container">
					<div class="navbar-brand">
						<router-link class="navbar-item" :to="'home'">
							<img src="@/assets/mind-map.svg">
							<p style="font-size: 18px; font-weight: 400; margin-left: 12px; line-height: 1.2;">Cosmos Builders</p>
						</router-link>
					</div>
					<div class="navbar-end">
						<router-link class="navbar-item" :to="'testnets'">
							Testnets
						</router-link>
					</div>
				</div>
			</nav>
		</div>
		<router-view></router-view>
	</section>
</template>
