<script lang="ts">
	import { experiences } from '$lib/data/experience';
	import { fadeInOnScroll } from '$lib/utils/animations';
</script>

<section id="experience" class="section">
	<div class="container">
		<div class="section-label" use:fadeInOnScroll>
			<span class="label-line"></span>
			<span class="label-text">02. experience</span>
		</div>

		<h2 class="section-heading" use:fadeInOnScroll={{ delay: 80 }}>
			Where I've <span class="text-gradient">shipped things.</span>
		</h2>

		<div class="timeline">
			{#each experiences as exp, i}
				<div class="timeline-item" use:fadeInOnScroll={{ delay: i * 120 }}>
					<!-- Timeline spine -->
					<div class="timeline-spine">
						<div class="spine-node" class:node-current={exp.current}>
							{#if exp.current}
								<div class="node-pulse"></div>
							{/if}
						</div>
						{#if i < experiences.length - 1}
							<div class="spine-line"></div>
						{/if}
					</div>

					<!-- Card -->
					<div class="exp-card" class:card-current={exp.current}>
						<div class="card-header">
							<div class="card-meta">
								<h3 class="card-position">{exp.position}</h3>
								<p class="card-company">{exp.company}</p>
							</div>
							<div class="card-period">
								{#if exp.current}
									<span class="current-badge">Current</span>
								{/if}
								<span class="period-text">{exp.period}</span>
							</div>
						</div>

						<ul class="card-contributions">
							{#each exp.contributions as contribution}
								<li>{contribution}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		padding: 6rem 0;
	}

	.container {
		max-width: 900px;
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

	.timeline {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.timeline-item {
		display: grid;
		grid-template-columns: 32px 1fr;
		gap: 1.5rem;
	}

	.timeline-spine {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 1.5rem;
	}

	.spine-node {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: rgba(0, 255, 136, 0.25);
		border: 1.5px solid rgba(0, 255, 136, 0.5);
		flex-shrink: 0;
		position: relative;
		transition: box-shadow 0.25s ease;
	}

	.spine-node.node-current {
		background: rgba(0, 255, 136, 0.6);
		border-color: #00ff88;
		box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
	}

	.node-pulse {
		position: absolute;
		inset: -4px;
		border-radius: 50%;
		border: 1px solid rgba(0, 255, 136, 0.3);
		animation: pulse-ring 2s ease-out infinite;
	}

	@keyframes pulse-ring {
		0% { transform: scale(1); opacity: 0.6; }
		100% { transform: scale(2); opacity: 0; }
	}

	.spine-line {
		width: 1px;
		flex: 1;
		background: linear-gradient(to bottom, rgba(0, 255, 136, 0.2), rgba(0, 255, 136, 0.05));
		margin-top: 6px;
		min-height: 2rem;
	}

	.exp-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 12px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
		transition: border-color 0.25s ease, box-shadow 0.25s ease;
	}

	.exp-card:hover {
		border-color: rgba(0, 255, 136, 0.15);
	}

	.exp-card.card-current {
		border-color: rgba(0, 255, 136, 0.18);
		background: rgba(0, 255, 136, 0.02);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1.1rem;
		flex-wrap: wrap;
	}

	.card-position {
		font-family: 'Inter', sans-serif;
		font-size: 1rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 0.25rem;
	}

	.card-company {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.8rem;
		color: #00ff88;
		opacity: 0.75;
		margin: 0;
	}

	.card-period {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.35rem;
		flex-shrink: 0;
	}

	.current-badge {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.65rem;
		color: #00ff88;
		background: rgba(0, 255, 136, 0.1);
		border: 1px solid rgba(0, 255, 136, 0.25);
		border-radius: 4px;
		padding: 0.15rem 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.period-text {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.3);
	}

	.card-contributions {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.card-contributions li {
		font-family: 'Inter', sans-serif;
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.5);
		line-height: 1.65;
		padding-left: 1.1rem;
		position: relative;
	}

	.card-contributions li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: #00ff88;
		opacity: 0.5;
		font-size: 0.95rem;
		line-height: 1.65;
	}
</style>
