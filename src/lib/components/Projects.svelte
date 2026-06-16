<script lang="ts">
	import type { Project } from '$lib/types';
	import { fadeInOnScroll } from '$lib/utils/animations';

	interface Props {
		featured: Project | undefined;
		projects: Project[];
	}

	let { featured, projects }: Props = $props();
</script>

<section id="projects" class="section">
	<div class="container">
		<div class="section-label" use:fadeInOnScroll>
			<span class="label-line"></span>
			<span class="label-text">04. projects</span>
		</div>

		<h2 class="section-heading" use:fadeInOnScroll={{ delay: 80 }}>
			Things I've <span class="text-gradient">actually built.</span>
		</h2>

		<!-- Featured Project -->
		{#if featured}
			<div class="featured-wrapper" use:fadeInOnScroll={{ delay: 120 }}>
				<div class="featured-badge">
					<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
					</svg>
					Featured Project
				</div>

				<div class="featured-card">
					<div class="featured-image" aria-hidden="true">
						<div class="image-placeholder">
							<div class="placeholder-grid" aria-hidden="true"></div>
							<span class="placeholder-label">
								<span class="mono-text">{featured.title}</span>
							</span>
						</div>
					</div>

					<div class="featured-content">
						<h3 class="featured-title">{featured.title}</h3>
						<p class="featured-description">{featured.longDescription}</p>

						<div class="featured-tech">
							{#each featured.techStack as tech}
								<span class="tech-tag">{tech}</span>
							{/each}
						</div>

						<ul class="featured-features">
							{#each featured.features.slice(0, 3) as feature}
								<li>{feature}</li>
							{/each}
						</ul>

						<div class="featured-links">
							<a
								href={featured.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="project-link-primary"
							>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
								View on GitHub
							</a>
							{#if featured.liveUrl}
								<a
									href={featured.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="project-link-secondary"
								>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
									</svg>
									Live Demo
								</a>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/if}

		<!-- Other Projects -->
		{#if projects.length > 0}
			<div class="other-projects-label" use:fadeInOnScroll={{ delay: 80 }}>
				<span>Other projects</span>
				<div class="label-hr"></div>
			</div>

			<div class="projects-grid">
				{#each projects as project, i}
					<div class="project-card" use:fadeInOnScroll={{ delay: i * 100 }}>
						<div class="card-top">
							<div class="card-folder">
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
									<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
								</svg>
							</div>
							<div class="card-links">
								<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
									<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								</a>
								{#if project.liveUrl}
									<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
											<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
										</svg>
									</a>
								{/if}
							</div>
						</div>

						<h3 class="card-title">{project.title}</h3>
						<p class="card-description">{project.description}</p>

						<div class="card-tech">
							{#each project.techStack.slice(0, 4) as tech}
								<span>{tech}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.section {
		padding: 6rem 0;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.section-label {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.label-line {
		display: block;
		height: 1px;
		width: 40px;
		background: #00ff88;
		opacity: 0.6;
	}

	.label-text {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.78rem;
		color: #00ff88;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		opacity: 0.8;
	}

	.section-heading {
		font-family: 'Inter', sans-serif;
		font-size: clamp(1.6rem, 3vw, 2.2rem);
		font-weight: 700;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 3rem;
		line-height: 1.25;
	}

	.text-gradient {
		background: linear-gradient(90deg, #00ff88, #00e5ff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	/* Featured */
	.featured-wrapper {
		margin-bottom: 4rem;
	}

	.featured-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.72rem;
		color: #00ff88;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		opacity: 0.75;
		margin-bottom: 0.85rem;
	}

	.featured-badge svg {
		color: #00ff88;
		opacity: 0.8;
	}

	.featured-card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(0, 255, 136, 0.15);
		border-radius: 16px;
		overflow: hidden;
		transition: border-color 0.25s ease, box-shadow 0.25s ease;
	}

	.featured-card:hover {
		border-color: rgba(0, 255, 136, 0.3);
		box-shadow: 0 0 40px rgba(0, 255, 136, 0.06);
	}

	.featured-image {
		background: rgba(0, 255, 136, 0.03);
		border-right: 1px solid rgba(255, 255, 255, 0.05);
		min-height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	.image-placeholder {
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(0,255,136,0.06) 1px, transparent 1px),
			linear-gradient(90deg, rgba(0,255,136,0.06) 1px, transparent 1px);
		background-size: 28px 28px;
	}

	.placeholder-label {
		position: relative;
		z-index: 1;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.9rem;
		color: rgba(0, 255, 136, 0.4);
	}

	.mono-text {
		font-family: 'JetBrains Mono', monospace;
	}

	.featured-content {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.featured-title {
		font-family: 'Inter', sans-serif;
		font-size: 1.4rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.featured-description {
		font-family: 'Inter', sans-serif;
		font-size: 0.875rem;
		line-height: 1.75;
		color: rgba(255, 255, 255, 0.5);
		margin: 0;
	}

	.featured-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.72rem;
		color: #00ff88;
		opacity: 0.7;
		letter-spacing: 0.03em;
	}

	.tech-tag + .tech-tag::before {
		content: '·';
		margin-right: 0.5rem;
		opacity: 0.5;
	}

	.featured-features {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.featured-features li {
		font-family: 'Inter', sans-serif;
		font-size: 0.82rem;
		color: rgba(255, 255, 255, 0.4);
		padding-left: 1rem;
		position: relative;
	}

	.featured-features li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: #00ff88;
		opacity: 0.5;
	}

	.featured-links {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-top: 0.25rem;
	}

	.project-link-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.55rem 1.2rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.82rem;
		font-weight: 500;
		color: #050505;
		background: #00ff88;
		border-radius: 7px;
		text-decoration: none;
		transition: box-shadow 0.2s ease, transform 0.15s ease;
	}

	.project-link-primary:hover {
		box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
		transform: translateY(-1px);
	}

	.project-link-secondary {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.55rem 1.2rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.82rem;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 7px;
		text-decoration: none;
		transition: color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
	}

	.project-link-secondary:hover {
		color: rgba(255, 255, 255, 0.9);
		border-color: rgba(255, 255, 255, 0.25);
		transform: translateY(-1px);
	}

	/* Other projects */
	.other-projects-label {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.other-projects-label span {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.78rem;
		color: rgba(255, 255, 255, 0.3);
		letter-spacing: 0.08em;
		white-space: nowrap;
	}

	.label-hr {
		flex: 1;
		height: 1px;
		background: rgba(255, 255, 255, 0.06);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}

	.project-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 12px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition:
			border-color 0.25s ease,
			box-shadow 0.25s ease,
			transform 0.2s ease;
		cursor: default;
	}

	.project-card:hover {
		border-color: rgba(0, 255, 136, 0.2);
		box-shadow: 0 0 24px rgba(0, 255, 136, 0.05);
		transform: translateY(-4px);
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	.card-folder {
		color: #00ff88;
		opacity: 0.6;
	}

	.card-links {
		display: flex;
		gap: 0.6rem;
	}

	.card-links a {
		color: rgba(255, 255, 255, 0.4);
		display: flex;
		align-items: center;
		transition: color 0.2s ease;
	}

	.card-links a:hover {
		color: #00ff88;
	}

	.card-title {
		font-family: 'Inter', sans-serif;
		font-size: 1rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.85);
		margin: 0;
	}

	.card-description {
		font-family: 'Inter', sans-serif;
		font-size: 0.83rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.4);
		margin: 0;
		flex: 1;
	}

	.card-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		margin-top: auto;
	}

	.card-tech span {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.7rem;
		color: #00ff88;
		opacity: 0.6;
	}

	.card-tech span + span::before {
		content: '·';
		margin-right: 0.35rem;
		opacity: 0.4;
	}

	@media (max-width: 900px) {
		.featured-card {
			grid-template-columns: 1fr;
		}

		.featured-image {
			min-height: 180px;
			border-right: none;
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		}

		.projects-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
