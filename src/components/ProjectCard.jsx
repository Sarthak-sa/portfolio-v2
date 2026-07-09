import { Link } from "react-router-dom";
import { ArrowUpRight, Clapperboard } from "lucide-react";

export default function ProjectCard({ project }) {
	const isInProgress = project.category === "in-progress";

	return (
		<Link
			to={`/work/${project.slug}`}
			className={`glass-card group flex flex-col rounded-2xl p-5 transition hover:shadow-lg ${
				isInProgress
					? "hover:border-amber-500/40 hover:shadow-amber-500/10"
					: "hover:border-purple-500/40 hover:shadow-purple-500/10"
			}`}
		>
			{project.image ? (
				<div className="mb-4 overflow-hidden rounded-xl border border-white/5">
					<img
						src={project.image}
						alt={`${project.title} preview`}
						className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
						loading="lazy"
					/>
				</div>
			) : (
				<div className="mb-4 flex aspect-[16/10] items-center justify-center rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-cosmic-900 to-cosmic-950">
					<Clapperboard size={32} className="text-amber-400/70" />
				</div>
			)}

			<div className="mb-4 flex items-start justify-between gap-3">
				<span
					className={`pill-tag ${isInProgress ? "border-amber-500/30 bg-amber-500/10 text-amber-300" : ""}`}
				>
					{project.status.toUpperCase()}
				</span>
				<ArrowUpRight
					size={16}
					className={`text-zinc-500 transition ${isInProgress ? "group-hover:text-amber-400" : "group-hover:text-purple-400"}`}
				/>
			</div>
			<h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
			<p className="mb-4 flex-1 text-sm text-zinc-400">{project.shortDescription}</p>
			<div className="flex flex-wrap gap-2">
				{project.stack.slice(0, 4).map((tech) => (
					<span key={tech} className="pill-tag">
						{tech}
					</span>
				))}
			</div>
		</Link>
	);
}
