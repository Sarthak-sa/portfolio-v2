import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
	return (
		<Link
			to={`/work/${project.slug}`}
			className="glass-card group flex flex-col rounded-2xl p-5 transition hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
		>
			<div className="mb-4 flex items-start justify-between gap-3">
				<span className="pill-tag">{project.status.toUpperCase()}</span>
				<ArrowUpRight size={16} className="text-zinc-500 transition group-hover:text-purple-400" />
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
