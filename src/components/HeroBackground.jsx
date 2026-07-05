export default function HeroBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			<div className="cosmic-grid absolute inset-0 opacity-40" />
			<div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
			<div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
			{Array.from({ length: 40 }).map((_, i) => (
				<span
					key={i}
					className="absolute rounded-full bg-white hero-star"
					style={{
						width: Math.random() * 2 + 1,
						height: Math.random() * 2 + 1,
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
						opacity: Math.random() * 0.6 + 0.2,
					}}
				/>
			))}
		</div>
	);
}
