import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Clapperboard } from "lucide-react";
import { getNextProject, getProjectBySlug } from "../data/projects";
import { profile } from "../data/profile";

const fadeUp = {
	initial: { opacity: 0, y: 24 },
	animate: { opacity: 1, y: 0 },
};

const stagger = {
	animate: { transition: { staggerChildren: 0.08 } },
};

export default function WorkProject() {
	const { slug } = useParams();
	const project = getProjectBySlug(slug);
	const nextProject = getNextProject(slug);

	if (!project) return <Navigate to="/#work" replace />;

	const isInProgress = project.category === "in-progress";

	return (
		<article className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-14">
			<motion.div
				className="mb-10 flex items-center justify-between gap-4"
				initial={{ opacity: 0, y: -8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
			>
				<Link to="/" className="flex items-center gap-2 text-sm font-semibold text-white">
					<span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
					{profile.domain}
				</Link>
				<Link
					to="/#work"
					className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
				>
					<ArrowLeft size={16} /> All projects
				</Link>
			</motion.div>

			<motion.div variants={stagger} initial="initial" animate="animate">
				<motion.span variants={fadeUp} transition={{ duration: 0.45 }} className="pill-tag mb-6 inline-block">
					{project.statusDetail}
				</motion.span>

				<motion.h1
					variants={fadeUp}
					transition={{ duration: 0.5 }}
					className="text-4xl font-bold tracking-tight md:text-6xl"
				>
					{project.title}
				</motion.h1>

				<motion.p
					variants={fadeUp}
					transition={{ duration: 0.5 }}
					className="mt-3 text-lg text-zinc-400 md:text-xl"
				>
					{project.tagline}
				</motion.p>

				<motion.div
					variants={fadeUp}
					transition={{ duration: 0.55 }}
					className={`showcase-frame mt-10 overflow-hidden rounded-2xl border p-2 shadow-2xl ${
						isInProgress
							? "border-amber-500/25 bg-gradient-to-br from-amber-900/30 via-cosmic-900 to-cosmic-950 shadow-amber-500/10"
							: "border-purple-500/25 bg-gradient-to-br from-purple-900/40 via-cosmic-900 to-cosmic-950 shadow-purple-500/15"
					}`}
				>
					{project.image ? (
						<img
							src={project.image}
							alt={`${project.title} showcase`}
							className="aspect-[16/10] w-full rounded-xl object-cover object-top"
							loading="eager"
						/>
					) : (
						<div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 rounded-xl border border-amber-500/15 bg-gradient-to-br from-amber-500/5 via-cosmic-900 to-cosmic-950">
							<Clapperboard size={48} className="text-amber-400/60" />
							<p className="text-sm text-amber-200/70">Screenshots coming soon</p>
						</div>
					)}
				</motion.div>

				<motion.div
					variants={fadeUp}
					transition={{ duration: 0.5 }}
					className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-white/5 py-8 md:grid-cols-4"
				>
					<div>
						<p className="section-label mb-2">Role</p>
						<p className="text-sm leading-relaxed text-zinc-300">{project.role}</p>
					</div>
					<div>
						<p className="section-label mb-2">Year</p>
						<p className="text-sm text-zinc-300">{project.year}</p>
					</div>
					<div>
						<p className="section-label mb-2">Status</p>
						<p className="text-sm text-zinc-300">{project.status}</p>
					</div>
					<div className="col-span-2 md:col-span-1">
						<p className="section-label mb-2">Stack</p>
						<div className="flex flex-wrap gap-1.5">
							{project.stack.map((tech) => (
								<span key={tech} className="pill-tag text-[10px]">
									{tech}
								</span>
							))}
						</div>
					</div>
				</motion.div>

				{project.liveUrl ? (
					<motion.a
						variants={fadeUp}
						transition={{ duration: 0.5 }}
						href={project.liveUrl}
						target="_blank"
						rel="noreferrer"
						className="btn-primary mt-8 flex w-full"
					>
						{project.ctaLabel} <ArrowUpRight size={16} />
					</motion.a>
				) : isInProgress ? (
					<motion.div
						variants={fadeUp}
						transition={{ duration: 0.5 }}
						className="mt-8 rounded-2xl border border-amber-500/25 bg-amber-500/5 px-6 py-4 text-center text-sm text-amber-200/80"
					>
						Weekend build in progress — live demo and repo links coming soon.
					</motion.div>
				) : null}

				<motion.section variants={fadeUp} transition={{ duration: 0.5 }} className="mt-16 md:mt-20">
					<h2 className="section-label mb-6">Overview</h2>
					<div className="space-y-4 text-sm leading-relaxed text-zinc-400 md:text-base md:leading-7">
						{project.overview.map((paragraph) => (
							<p key={paragraph.slice(0, 48)}>{paragraph}</p>
						))}
					</div>
				</motion.section>

				<motion.section variants={fadeUp} transition={{ duration: 0.5 }} className="mt-16 md:mt-20">
					<h2 className="section-label mb-6">{isInProgress ? "Planned features" : "Highlights"}</h2>
					<ul className="space-y-3">
						{project.highlights.map((item, index) => (
							<motion.li
								key={item}
								initial={{ opacity: 0, x: -12 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{ delay: index * 0.05, duration: 0.35 }}
								className="highlight-card flex items-start gap-3"
							>
								<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
								<span>{item}</span>
							</motion.li>
						))}
					</ul>
				</motion.section>

				{nextProject && (
					<motion.section variants={fadeUp} transition={{ duration: 0.5 }} className="mt-16 md:mt-20">
						<h2 className="section-label mb-4">Next up</h2>
						<Link
							to={`/work/${nextProject.slug}`}
							className="glass-card group flex items-center justify-between gap-4 rounded-2xl p-6 transition hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
						>
							<div>
								<p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
									{nextProject.status} · {nextProject.year}
								</p>
								<h3 className="mt-2 text-xl font-bold text-white transition group-hover:text-purple-100">
									{nextProject.title}
								</h3>
								<p className="mt-1 text-sm text-zinc-400">{nextProject.shortDescription}</p>
							</div>
							<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-cosmic-800/80 transition group-hover:border-purple-500/40 group-hover:bg-purple-500/10">
								<ArrowUpRight
									size={18}
									className="text-zinc-500 transition group-hover:text-purple-400"
								/>
							</span>
						</Link>
					</motion.section>
				)}
			</motion.div>
		</article>
	);
}
