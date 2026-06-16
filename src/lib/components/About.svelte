<script lang="ts">
	import { fadeInOnScroll } from '$lib/utils/animations';
</script>

<section id="about" class="section">
	<div class="container">
		<div class="section-label" use:fadeInOnScroll>
			<span class="label-line"></span>
			<span class="label-text">01. about</span>
		</div>

		<div class="about-grid">
			<div class="about-text" use:fadeInOnScroll={{ delay: 100 }}>
				<h2 class="section-heading">
					I build the things that make&nbsp;<span class="text-gradient">other things work.</span>
				</h2>

				<p>
					Backend engineering appeals to me for the same reason systems thinking does: the most
					interesting problems are rarely visible from the surface. I've spent years living in that
					space — designing APIs, wiring up event streams, chasing down race conditions at midnight,
					and asking "what happens when this fails at 10x load?"
				</p>

				<p>
					I care about <strong>correctness</strong> and <strong>clarity</strong> in equal measure. A
					system that's fast but opaque is half-built. My goal is always infrastructure that other
					engineers can reason about, extend, and trust — whether that's a distributed transaction
					flow or a single clean endpoint contract.
				</p>

				<p>
					Outside of engineering I play basketball (team dynamics translate more than you'd think) and
					arrange music — sometimes layering a 12-instrument orchestration, sometimes just figuring out
					why the harmony in bar 8 doesn't resolve cleanly. Both hobbies reinforce the same muscle:
					breaking complex structures into parts that can be understood and recombined.
				</p>
			</div>

			<div class="about-right" use:fadeInOnScroll={{ delay: 200 }}>
				<div class="stat-card">
					<div class="stat-icon">⚡</div>
					<div class="stat-label">Focus Areas</div>
					<ul class="stat-list">
						<li>API Architecture</li>
						<li>Distributed Systems</li>
						<li>Event-Driven Design</li>
						<li>System Design</li>
						<li>Scalability Engineering</li>
					</ul>
				</div>

				<div class="stat-card">
					<div class="stat-icon">🛠</div>
					<div class="stat-label">Current Stack</div>
					<ul class="stat-list">
						<li>Laravel / PHP</li>
						<li>Java / Spring Boot</li>
						<li>PostgreSQL + Redis</li>
						<li>Docker</li>
						<li>AWS</li>
					</ul>
				</div>
			</div>
		</div>
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
		margin-bottom: 3rem;
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

	.about-grid {
		display: grid;
		grid-template-columns: 1fr 340px;
		gap: 4rem;
		align-items: start;
	}

	.about-text {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.section-heading {
		font-family: 'Inter', sans-serif;
		font-size: clamp(1.6rem, 3vw, 2.2rem);
		font-weight: 700;
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.25;
		margin: 0 0 0.5rem;
	}

	.text-gradient {
		background: linear-gradient(90deg, #00ff88, #00e5ff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.about-text p {
		font-family: 'Inter', sans-serif;
		font-size: 0.95rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.5);
		margin: 0;
	}

	.about-text p strong {
		color: rgba(255, 255, 255, 0.8);
		font-weight: 500;
	}

	.about-right {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		position: sticky;
		top: 5rem;
	}

	.stat-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 12px;
		padding: 1.25rem 1.4rem;
		transition: border-color 0.25s ease;
	}

	.stat-card:hover {
		border-color: rgba(0, 255, 136, 0.18);
	}

	.stat-icon {
		font-size: 1.2rem;
		margin-bottom: 0.6rem;
	}

	.stat-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.72rem;
		color: #00ff88;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		opacity: 0.7;
		margin-bottom: 0.75rem;
	}

	.stat-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.stat-list li {
		font-family: 'Inter', sans-serif;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.55);
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.stat-list li::before {
		content: '';
		display: block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: #00ff88;
		opacity: 0.5;
		flex-shrink: 0;
	}

	@media (max-width: 900px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.about-right {
			position: static;
			flex-direction: row;
			flex-wrap: wrap;
		}

		.stat-card {
			flex: 1;
			min-width: 200px;
		}
	}
</style>
