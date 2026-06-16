<script lang="ts">
	let scrolled = $state(false);

	const navLinks = [
		{ label: 'About', href: '#about' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Contact', href: '#contact' }
	];

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 40;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollTo(e: MouseEvent, href: string) {
		e.preventDefault();
		const el = document.querySelector(href);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<nav class="nav" class:scrolled>
	<div class="nav-inner">
		<a href="/" class="nav-logo" aria-label="Home">
			<span class="logo-bracket">&gt;_</span>
			<span class="logo-name">navanda.dev</span>
		</a>

		<ul class="nav-links">
			{#each navLinks as link}
				<li>
					<a href={link.href} onclick={(e) => scrollTo(e, link.href)} class="nav-link">
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<a
			href="/resume.pdf"
			target="_blank"
			rel="noopener noreferrer"
			class="nav-resume"
		>
			Resume
		</a>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 1.25rem 0;
		transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
		border-bottom: 1px solid transparent;
	}

	.nav.scrolled {
		background: rgba(5, 5, 5, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom-color: rgba(0, 255, 136, 0.08);
	}

	.nav-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		flex-shrink: 0;
	}

	.logo-bracket {
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.1rem;
		color: #00ff88;
		font-weight: 700;
	}

	.logo-name {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
		font-weight: 400;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		list-style: none;
		margin: 0;
		padding: 0;
		margin-left: auto;
	}

	.nav-link {
		display: block;
		padding: 0.4rem 0.85rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.55);
		text-decoration: none;
		border-radius: 6px;
		transition: color 0.2s ease, background 0.2s ease;
		letter-spacing: 0.01em;
	}

	.nav-link:hover {
		color: #00ff88;
		background: rgba(0, 255, 136, 0.06);
	}

	.nav-resume {
		flex-shrink: 0;
		padding: 0.4rem 1rem;
		font-family: 'Inter', sans-serif;
		font-size: 0.82rem;
		font-weight: 500;
		color: #00ff88;
		border: 1px solid rgba(0, 255, 136, 0.35);
		border-radius: 6px;
		text-decoration: none;
		transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
		letter-spacing: 0.02em;
	}

	.nav-resume:hover {
		background: rgba(0, 255, 136, 0.08);
		border-color: rgba(0, 255, 136, 0.6);
		box-shadow: 0 0 12px rgba(0, 255, 136, 0.15);
	}

	@media (max-width: 640px) {
		.nav-links {
			display: none;
		}
	}
</style>
