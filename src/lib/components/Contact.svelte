<script lang="ts">
	import { fadeInOnScroll } from '$lib/utils/animations';

	const contacts = [
		{
			label: 'GitHub',
			href: 'https://github.com/anandaadam',
			tooltip: 'Connect on GitHub',
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
		},
		{
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/anandaadam',
			tooltip: 'Connect on LinkedIn',
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
		},
		{
			label: 'Email',
			href: 'mailto:adamanandasantoso@gmail.com',
			tooltip: 'Send me an email',
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7.5L22 7"/></svg>`
		},
		{
			label: 'Instagram',
			href: 'https://instagram.com/navanda.dev',
			tooltip: 'Connect on Instagram',
			icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`
		},
	];
</script>

<section id="contact" class="section">
	<div class="container">
		<div class="section-label" use:fadeInOnScroll>
			<span class="label-line"></span>
			<span class="label-text">05. contact</span>
		</div>

		<div class="contact-inner">
			<div class="contact-text" use:fadeInOnScroll={{ delay: 80 }}>
				<h2 class="section-heading">
					Let's build something <span class="text-gradient">worth running.</span>
				</h2>
				<p>
					Whether you have a project in mind, an interesting engineering problem, or just want to
					talk systems — my inbox is open. I typically respond within a day.
				</p>
			</div>

			<div class="contact-links" use:fadeInOnScroll={{ delay: 160 }}>
				{#each contacts as contact}
					<a
						href={contact.href}
						target={contact.href.startsWith('mailto') ? '_self' : '_blank'}
						rel="noopener noreferrer"
						class="contact-icon"
						title={contact.tooltip}
						aria-label={contact.label}
					>
						<span class="icon-inner">
							{@html contact.icon}
						</span>
						<span class="icon-tooltip">{contact.tooltip}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 6rem 0 8rem;
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

	.contact-inner {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 3rem;
	}

	.section-heading {
		font-family: 'Inter', sans-serif;
		font-size: clamp(1.6rem, 3vw, 2.6rem);
		font-weight: 700;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1rem;
		line-height: 1.2;
	}

	.text-gradient {
		background: linear-gradient(90deg, #00ff88, #00e5ff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.contact-text p {
		font-family: 'Inter', sans-serif;
		font-size: 0.95rem;
		line-height: 1.75;
		color: rgba(255, 255, 255, 0.45);
		margin: 0;
		max-width: 520px;
	}

	.contact-links {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.contact-icon {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 52px;
		height: 52px;
		color: rgba(255, 255, 255, 0.4);
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 12px;
		text-decoration: none;
		transition:
			color 0.2s ease,
			border-color 0.2s ease,
			background 0.2s ease,
			box-shadow 0.2s ease,
			transform 0.2s ease;
	}

	.contact-icon:hover {
		color: #00ff88;
		border-color: rgba(0, 255, 136, 0.35);
		background: rgba(0, 255, 136, 0.05);
		box-shadow: 0 0 16px rgba(0, 255, 136, 0.15);
		transform: translateY(-3px);
	}

	.icon-inner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon-tooltip {
		position: absolute;
		bottom: calc(100% + 8px);
		left: 50%;
		transform: translateX(-50%);
		font-family: 'Inter', sans-serif;
		font-size: 0.72rem;
		color: rgba(255, 255, 255, 0.7);
		background: rgba(20, 20, 20, 0.95);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 5px;
		padding: 0.3rem 0.65rem;
		white-space: nowrap;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.15s ease, transform 0.15s ease;
		transform: translateX(-50%) translateY(4px);
	}

	.contact-icon:hover .icon-tooltip {
		opacity: 1;
		transform: translateX(-50%) translateY(0);
	}
</style>
