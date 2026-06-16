<script lang="ts">
	let typewriterText = $state('');
	let currentPhraseIndex = $state(0);
	let isDeleting = $state(false);

	const phrases = [
		'Building scalable APIs.',
		'Designing distributed systems.',
		'Crafting event-driven pipelines.',
		'Solving meaningful problems.',
		'Architecting backend services.'
	];

	$effect(() => {
		let timeout: ReturnType<typeof setTimeout>;

		function tick() {
			const phrase = phrases[currentPhraseIndex];
			const typingSpeed = isDeleting ? 40 : 85;
			const pauseAfterType = 1800;
			const pauseAfterDelete = 400;

			if (!isDeleting && typewriterText === phrase) {
				timeout = setTimeout(() => {
					isDeleting = true;
					tick();
				}, pauseAfterType);
				return;
			}

			if (isDeleting && typewriterText === '') {
				isDeleting = false;
				currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
				timeout = setTimeout(tick, pauseAfterDelete);
				return;
			}

			if (isDeleting) {
				typewriterText = phrase.slice(0, typewriterText.length - 1);
			} else {
				typewriterText = phrase.slice(0, typewriterText.length + 1);
			}

			timeout = setTimeout(tick, typingSpeed);
		}

		timeout = setTimeout(tick, 600);
		return () => clearTimeout(timeout);
	});

	function scrollTo(href: string) {
		document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="hero" id="hero">
	<div class="hero-content">
		<!-- Left: text -->
		<div class="hero-text">
			<p class="hero-greeting">
				<span class="mono-prefix">~/</span> Hello, I'm
			</p>

			<h1 class="hero-name">
				Adam Ananda S.
			</h1>

			<h2 class="hero-headline">
				Backend Developer crafting scalable systems and meaningful digital experiences.
			</h2>

			<p class="hero-sub">
				I live in the layers between requests and databases — designing APIs, taming distributed
				systems, and finding elegant solutions to hard infrastructure problems.
			</p>

			<div class="hero-typewriter" aria-live="polite">
				<span class="typewriter-prefix">$ </span>
				<span class="typewriter-text">{typewriterText}</span>
				<span class="typewriter-cursor">▋</span>
			</div>

			<div class="hero-cta">
				<button
					class="btn-primary"
					onclick={() => scrollTo('#projects')}
				>
					View Projects
				</button>
				<button
					class="btn-secondary"
					onclick={() => scrollTo('#contact')}
				>
					Contact Me
				</button>
				<a
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="btn-ghost"
				>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
					</svg>
					Download Resume
				</a>
			</div>
		</div>

		<!-- Right: floating code windows -->
		<div class="hero-visual" aria-hidden="true">
			<div class="code-window code-window-1">
				<div class="window-header">
					<div class="window-dot dot-red"></div>
					<div class="window-dot dot-yellow"></div>
					<div class="window-dot dot-green"></div>
					<span class="window-filename">main.go</span>
				</div>
				<pre class="window-code"><span class="c-keyword">func</span> <span class="c-fn">Build</span>() &#123;
  <span class="c-fn">scale</span>()
  <span class="c-fn">solve</span>()
  <span class="c-fn">repeat</span>()
&#125;</pre>
			</div>

			<div class="code-window code-window-2">
				<div class="window-header">
					<div class="window-dot dot-red"></div>
					<div class="window-dot dot-yellow"></div>
					<div class="window-dot dot-green"></div>
					<span class="window-filename">query.sql</span>
				</div>
				<pre class="window-code"><span class="c-keyword">SELECT</span> <span class="c-accent">*</span>
<span class="c-keyword">FROM</span>   opportunities
<span class="c-keyword">WHERE</span>  challenge <span class="c-accent">=</span> <span class="c-val">true</span>
<span class="c-keyword">  AND</span>  growth   <span class="c-accent">=</span> <span class="c-val">true</span>;</pre>
			</div>

			<div class="code-window code-window-3">
				<div class="window-header">
					<div class="window-dot dot-red"></div>
					<div class="window-dot dot-yellow"></div>
					<div class="window-dot dot-green"></div>
					<span class="window-filename">kafka.go</span>
				</div>
				<pre class="window-code"><span class="c-keyword">for</span> msg <span class="c-keyword">:=</span> <span class="c-keyword">range</span> stream &#123;
  process(msg)
  ack(msg.Offset)
&#125;</pre>
			</div>
		</div>
	</div>

	<!-- Scroll hint -->
	<div class="scroll-hint" aria-hidden="true">
		<div class="scroll-line"></div>
		<span>scroll</span>
	</div>
</section>

<style>
	.hero {
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 7rem 2rem 4rem;
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.hero-text {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.hero-greeting {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.45);
		margin: 0;
		letter-spacing: 0.04em;
	}

	.mono-prefix {
		color: #00ff88;
		opacity: 0.7;
	}

	.hero-name {
		font-family: 'Inter', sans-serif;
		font-size: clamp(2.5rem, 5vw, 3.8rem);
		font-weight: 800;
		margin: 0;
		line-height: 1.05;
		background: linear-gradient(90deg, #00ff88, #00e5ff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: -0.03em;
	}

	.hero-headline {
		font-family: 'Inter', sans-serif;
		font-size: clamp(1rem, 2vw, 1.2rem);
		font-weight: 400;
		color: rgba(255, 255, 255, 0.75);
		margin: 0;
		line-height: 1.55;
		max-width: 500px;
	}

	.hero-sub {
		font-family: 'Inter', sans-serif;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.4);
		margin: 0;
		line-height: 1.7;
		max-width: 480px;
	}

	.hero-typewriter {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.6);
		min-height: 1.5em;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.typewriter-prefix {
		color: #00ff88;
		opacity: 0.8;
	}

	.typewriter-cursor {
		color: #00ff88;
		animation: blink 1.1s step-end infinite;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	.hero-cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 0.25rem;
	}

	.btn-primary {
		padding: 0.65rem 1.5rem;
		background: #00ff88;
		color: #050505;
		font-family: 'Inter', sans-serif;
		font-size: 0.875rem;
		font-weight: 600;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: box-shadow 0.2s ease, transform 0.15s ease;
		letter-spacing: 0.01em;
	}

	.btn-primary:hover {
		box-shadow: 0 0 24px rgba(0, 255, 136, 0.4);
		transform: translateY(-1px);
	}

	.btn-secondary {
		padding: 0.65rem 1.5rem;
		background: transparent;
		color: #00ff88;
		font-family: 'Inter', sans-serif;
		font-size: 0.875rem;
		font-weight: 500;
		border: 1px solid rgba(0, 255, 136, 0.4);
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
	}

	.btn-secondary:hover {
		background: rgba(0, 255, 136, 0.06);
		border-color: rgba(0, 255, 136, 0.65);
		box-shadow: 0 0 16px rgba(0, 255, 136, 0.15);
		transform: translateY(-1px);
	}

	.btn-ghost {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.65rem 1.25rem;
		background: transparent;
		color: rgba(255, 255, 255, 0.45);
		font-family: 'Inter', sans-serif;
		font-size: 0.875rem;
		font-weight: 400;
		text-decoration: none;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		transition: color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
	}

	.btn-ghost:hover {
		color: rgba(255, 255, 255, 0.75);
		border-color: rgba(255, 255, 255, 0.2);
		transform: translateY(-1px);
	}

	/* Code windows */
	.hero-visual {
		position: relative;
		height: 360px;
	}

	.code-window {
		position: absolute;
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 10px;
		overflow: hidden;
		box-shadow:
			0 20px 60px rgba(0, 0, 0, 0.5),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
		transition: transform 0.3s ease;
	}

	.code-window:hover {
		transform: translateY(-4px) rotate(0deg) !important;
	}

	.code-window-1 {
		top: 20px;
		left: 0;
		width: 220px;
		animation: float1 5s ease-in-out infinite;
		transform: rotate(-1.5deg);
	}

	.code-window-2 {
		top: 110px;
		right: 0;
		width: 240px;
		animation: float2 6s ease-in-out infinite;
		transform: rotate(1deg);
	}

	.code-window-3 {
		bottom: 30px;
		left: 60px;
		width: 210px;
		animation: float3 5.5s ease-in-out infinite;
		transform: rotate(-0.5deg);
	}

	@keyframes float1 {
		0%, 100% { transform: translateY(0) rotate(-1.5deg); }
		50% { transform: translateY(-10px) rotate(-1.5deg); }
	}

	@keyframes float2 {
		0%, 100% { transform: translateY(0) rotate(1deg); }
		50% { transform: translateY(-14px) rotate(1deg); }
	}

	@keyframes float3 {
		0%, 100% { transform: translateY(0) rotate(-0.5deg); }
		50% { transform: translateY(-8px) rotate(-0.5deg); }
	}

	.window-header {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.6rem 0.85rem;
		background: rgba(255, 255, 255, 0.03);
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
	}

	.window-dot {
		width: 9px;
		height: 9px;
		border-radius: 50%;
	}

	.dot-red { background: #ff5f57; }
	.dot-yellow { background: #febc2e; }
	.dot-green { background: #28c840; }

	.window-filename {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.7rem;
		color: rgba(255, 255, 255, 0.35);
		margin-left: 0.35rem;
	}

	.window-code {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.78rem;
		line-height: 1.65;
		color: rgba(255, 255, 255, 0.55);
		padding: 0.85rem 1rem;
		margin: 0;
		white-space: pre;
	}

	:global(.c-keyword) { color: #00e5ff; }
	:global(.c-fn) { color: #00ff88; }
	:global(.c-accent) { color: #00ff88; opacity: 0.8; }
	:global(.c-val) { color: #ffd580; }

	/* Scroll hint */
	.scroll-hint {
		position: absolute;
		bottom: 2.5rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		animation: pulse-down 2s ease-in-out infinite;
	}

	.scroll-line {
		width: 1px;
		height: 40px;
		background: linear-gradient(to bottom, transparent, rgba(0, 255, 136, 0.5));
	}

	.scroll-hint span {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.65rem;
		color: rgba(255, 255, 255, 0.25);
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}

	@keyframes pulse-down {
		0%, 100% { opacity: 0.5; transform: translateX(-50%) translateY(0); }
		50% { opacity: 1; transform: translateX(-50%) translateY(4px); }
	}

	@media (max-width: 900px) {
		.hero-content {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.hero-visual {
			height: 280px;
		}

		.hero {
			padding-top: 6rem;
		}
	}

	@media (max-width: 480px) {
		.hero-visual {
			display: none;
		}
	}
</style>
