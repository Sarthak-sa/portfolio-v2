import { profile } from "../data/profile";

export default function Footer() {
	return (
		<footer className="border-t border-white/5 py-10">
			<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-6">
				<p className="text-sm text-zinc-500">
					© {new Date().getFullYear()} {profile.name} — crafted with React, Three.js & care.
				</p>
				<div className="flex gap-4 text-sm">
					<a href={profile.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
						GitHub
					</a>
					<a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
						LinkedIn
					</a>
				</div>
			</div>
		</footer>
	);
}
