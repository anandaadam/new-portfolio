<script lang="ts">
	import { skillCategories, marqueeRow1, marqueeRow2 } from '$lib/data/skills';
	import { fadeInOnScroll } from '$lib/utils/animations';

	// Duplicate items for seamless loop
	const row1 = [...marqueeRow1, ...marqueeRow1];
	const row2 = [...marqueeRow2, ...marqueeRow2];
</script>

<section id="skills" class="section">
	<div class="container">
		<div class="section-label" use:fadeInOnScroll>
			<span class="label-line"></span>
			<span class="label-text">03. skills</span>
		</div>

		<h2 class="section-heading" use:fadeInOnScroll={{ delay: 80 }}>
			The tools I reach for <span class="text-gradient">without thinking.</span>
		</h2>
	</div>

	<!-- Marquee outside container for full-bleed -->
	<div class="marquee-wrapper" use:fadeInOnScroll={{ delay: 120 }}>
		<div class="marquee-row">
			<div class="marquee-track marquee-left">
				{#each row1 as tech}
					<span class="marquee-item">{tech}</span>
				{/each}
			</div>
		</div>
		<div class="marquee-row">
			<div class="marquee-track marquee-right">
				{#each row2 as tech}
					<span class="marquee-item">{tech}</span>
				{/each}
			</div>
		</div>
	</div>

	<div class="container">
		<div class="skills-grid" use:fadeInOnScroll={{ delay: 160 }}>
			{#each skillCategories as category}
				<div class="skill-category">
					<h3 class="category-name">{category.name}</h3>
					<div class="skill-chips">
						{#each category.skills as skill}
							<span class="skill-chip">{skill.name}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		padding: 6rem 0;
		overflow: hidden;
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

	/* Marquee */
	.marquee-wrapper {
		margin: 0 0 3.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.marquee-row {
		overflow: hidden;
		-webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
		mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
	}

	.marquee-track {
		display: flex;
		gap: 0;
		width: max-content;
	}

	.marquee-left {
		animation: scroll-left 28s linear infinite;
	}

	.marquee-right {
		animation: scroll-right 32s linear infinite;
	}

	@keyframes scroll-left {
		0% { transform: translateX(0); }
		100% { transform: translateX(-50%); }
	}

	@keyframes scroll-right {
		0% { transform: translateX(-50%); }
		100% { transform: translateX(0); }
	}

	.marquee-item {
		display: inline-flex;
		align-items: center;
		padding: 0.45rem 1.2rem;
		margin: 0 0.4rem;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.4);
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 6px;
		white-space: nowrap;
		letter-spacing: 0.03em;
	}

	/* Skills grid */
	.skills-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.skill-category {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 12px;
		padding: 1.5rem;
		transition: border-color 0.25s ease;
	}

	.skill-category:hover {
		border-color: rgba(0, 255, 136, 0.15);
	}

	.category-name {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.72rem;
		color: #00ff88;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		opacity: 0.75;
		margin: 0 0 1rem;
	}

	.skill-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill-chip {
		display: inline-block;
		padding: 0.3rem 0.8rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.6);
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 20px;
		transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
		cursor: default;
	}

	.skill-chip:hover {
		color: #00ff88;
		border-color: rgba(0, 255, 136, 0.3);
		background: rgba(0, 255, 136, 0.05);
		transform: translateY(-2px);
	}

	@media (max-width: 640px) {
		.skills-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-left,
		.marquee-right {
			animation: none;
		}
	}
</style>
