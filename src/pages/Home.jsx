import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import IntegrationContact from "../components/IntegrationContact";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
	return (
		<>
			<section id="home" className="section-anchor mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-20 md:px-6">
				<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
					<span className="pill-tag mb-6 inline-flex items-center gap-2">
						<Sparkles size={14} /> {profile.title} · {profile.tagline} · Available for hire
					</span>
					<h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
						Engineering <span className="gradient-text">cosmic-scale</span> web experiences.
					</h1>
					<p className="mt-6 max-w-2xl text-lg text-zinc-400">{profile.heroSubtext}</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<a href="#work" className="btn-primary">
							See the work <ArrowUpRight size={16} />
						</a>
						<a href="#contact" className="btn-ghost">
							Reach out
						</a>
					</div>
				</motion.div>
			</section>

			<section id="about" className="section-anchor mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="section-label mb-4">About</p>
					<h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
						Scalable backends, sharp integrations, interfaces that feel alive.
					</h2>
					<p className="mt-4 max-w-2xl text-zinc-400">{profile.summary}</p>
				</motion.div>

				<div className="mt-12 grid gap-6 lg:grid-cols-3">
					<div className="glass-card rounded-2xl p-6 lg:col-span-2">
						<p className="text-sm leading-relaxed text-zinc-300">{profile.bio}</p>
						<p className="mt-4 text-sm text-purple-300">Open to full-time roles and meaningful collaborations.</p>
						<div className="mt-6 flex flex-wrap gap-4 text-xs text-zinc-500">
							<span>{profile.location}</span>
							<span>{profile.experience}</span>
							<span>{profile.languages.join(" · ")}</span>
						</div>
					</div>
					<div className="glass-card rounded-2xl p-6">
						<p className="section-label mb-3">Education</p>
						<p className="font-medium text-zinc-100">{profile.education.degree}</p>
						<p className="mt-1 text-sm text-zinc-400">{profile.education.school}</p>
						<p className="mt-3 text-xs text-zinc-500">
							{profile.education.period} · {profile.education.detail}
						</p>
					</div>
				</div>

				<div className="mt-6 grid gap-6 md:grid-cols-2">
					{profile.experienceHistory.map((job) => (
						<div key={`${job.company}-${job.period}`} className="glass-card rounded-2xl p-6">
							<div className="flex flex-wrap items-start justify-between gap-2">
								<div>
									<p className="font-medium text-zinc-100">{job.role}</p>
									<p className="text-sm text-purple-300">{job.company}</p>
								</div>
								<p className="text-xs text-zinc-500">{job.period}</p>
							</div>
							<ul className="mt-4 space-y-2 text-sm text-zinc-400">
								{job.highlights.map((item) => (
									<li key={item} className="flex gap-2">
										<span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-400" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					))}
					<div className="glass-card rounded-2xl p-6 md:col-span-2">
						<p className="section-label mb-4">Stack</p>
						<div className="flex flex-wrap gap-2">
							{profile.skills.map((skill) => (
								<span key={skill} className="pill-tag">
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="work" className="section-anchor mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="section-label mb-4">Work</p>
					<h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
						Things I'm building and things I've shipped.
					</h2>
				</motion.div>

				<div className="mt-10">
					<p className="mb-4 flex items-center gap-2 text-sm text-zinc-400">
						<span className="h-2 w-2 rounded-full bg-purple-500" /> Completed · shipped
					</p>
					<div className="grid gap-6 md:grid-cols-2">
						{projects.map((project) => (
							<ProjectCard key={project.slug} project={project} />
						))}
					</div>
				</div>
			</section>

			<section id="contact" className="section-anchor mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
				<IntegrationContact />
			</section>
		</>
	);
}
