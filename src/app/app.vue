<!--  -->
<script lang="ts" src="./app.ts"></script>

<style>
/*  */

html,
body {
	overflow-y: auto;
}

</style>

<template>
	<section id="app" class="hero is-fullheight is-bold is-dark">
		<div class="hero-head">
			<nav class="navbar">
				<div class="container">
					<div class="navbar-brand">
						<a class="navbar-item">
							<img src="../assets/logo.png" alt="Logo">
							<p style="font-size: 18px; font-weight: 400; margin-left: 12px; line-height: 1.2;">Cosmos Builders</p>
						</a>
						<!-- <p class="" style="vertical-align: bottom; line-height: 1;">Cosmos Builders</p> -->
						<span class="navbar-burger burger">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</div>
					<div class="navbar-menu">
						<div class="navbar-end">
							<a class="navbar-item is-active">
								Homess
							</a>
							<a class="navbar-item">
								Examples
							</a>
							<a class="navbar-item">
								Features
							</a>
							<a class="navbar-item">
								Team
							</a>
							<a class="navbar-item">
								Help
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
		<router-view></router-view>
	</section>
</template>
