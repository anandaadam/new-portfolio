<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-inner">
		<p class="footer-credit">
			<span class="mono">&lt;/&gt;</span> Built with SvelteKit · Deployed on Vercel
		</p>
		<p class="footer-copy">
			© {year} Adam Ananda S
		</p>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		padding: 2rem;
	}

	.footer-inner {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.footer-credit,
	.footer-copy {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.72rem;
		color: rgba(255, 255, 255, 0.2);
		margin: 0;
		letter-spacing: 0.03em;
	}

	.mono {
		color: rgba(0, 255, 136, 0.3);
	}
</style>
