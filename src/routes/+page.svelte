<script lang="ts">
	import { queryFeaturedProject, queryAdditionalProjects } from '$lib/graphql/projects';
	import Background from '$lib/components/Background.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Project } from '$lib/types';

	let featuredProject = $state<Project | undefined>(undefined);
	let additionalProjects = $state<Project[]>([]);

	$effect(() => {
		queryFeaturedProject().then((p) => (featuredProject = p));
		queryAdditionalProjects().then((p) => (additionalProjects = p));
	});
</script>

<svelte:head>
	<title>Ananda Adam · Backend Developer</title>
	<meta
		name="description"
		content="Backend developer specializing in scalable APIs, distributed systems, and event-driven architecture. Building meaningful software with Go, Laravel, Kafka, and PostgreSQL."
	/>
	<meta name="keywords" content="backend developer, golang, laravel, API, distributed systems, kafka, microservices, postgresql" />
	<meta property="og:title" content="Ananda Adam · Backend Developer" />
	<meta property="og:description" content="Backend developer specializing in scalable APIs, distributed systems, and event-driven architecture." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://anandaadam.dev" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Ananda Adam · Backend Developer" />
	<meta name="twitter:description" content="Backend developer specializing in scalable APIs, distributed systems, and event-driven architecture." />
</svelte:head>

<div class="root">
	<Background />
	<Nav />

	<main class="main">
		<Hero />
		<About />
		<Experience />
		<Skills />
		<Projects featured={featuredProject} projects={additionalProjects} />
		<Contact />
	</main>

	<Footer />
</div>

<style>
	.root {
		position: relative;
		min-height: 100svh;
	}

	.main {
		position: relative;
		z-index: 2;
	}
</style>
