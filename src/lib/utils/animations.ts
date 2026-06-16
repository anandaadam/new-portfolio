/**
 * Svelte action for scroll-triggered fade-in animations.
 * Usage: <div use:fadeInOnScroll>...</div>
 */
export function fadeInOnScroll(
	node: HTMLElement,
	options: { threshold?: number; delay?: number } = {}
) {
	const { threshold = 0.15, delay = 0 } = options;

	node.style.opacity = '0';
	node.style.transform = 'translateY(24px)';
	node.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
