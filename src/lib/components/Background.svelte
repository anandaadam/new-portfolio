<script lang="ts">
	$effect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
			document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
		};

		window.addEventListener('mousemove', handleMouseMove, { passive: true });
		return () => window.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<!-- Terminal grid -->
<div class="bg-grid" aria-hidden="true"></div>

<!-- Cursor glow -->
<div class="cursor-glow" aria-hidden="true"></div>

<style>
	.bg-grid {
		position: fixed;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		background-image:
			linear-gradient(rgba(0, 255, 136, 1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(0, 255, 136, 1) 1px, transparent 1px);
		background-size: 40px 40px;
		opacity: 0.03;
	}

	.cursor-glow {
		position: fixed;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		background: radial-gradient(
			600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
			rgba(0, 255, 136, 0.07),
			transparent 40%
		);
	}
</style>
