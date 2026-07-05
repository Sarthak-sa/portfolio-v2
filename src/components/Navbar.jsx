import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
	{ hash: "#about", label: "About" },
	{ hash: "#work", label: "Work" },
	{ hash: "#contact", label: "Contact" },
];

export default function Navbar({ minimal = false }) {
	const [open, setOpen] = useState(false);
	const location = useLocation();
	const onProjectPage = location.pathname.startsWith("/work/");

	const sectionHref = (hash) => (onProjectPage ? `/${hash}` : hash);

	return (
		<header className="sticky top-0 z-50 border-b border-white/5 bg-cosmic-950/80 backdrop-blur-xl">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
				<Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
					<span className="h-2.5 w-2.5 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]" />
					{profile.domain}
				</Link>

				{!minimal && (
					<nav className="hidden items-center gap-8 md:flex">
						{navLinks.map((link) => (
							<a
								key={link.hash}
								href={sectionHref(link.hash)}
								className="text-sm text-zinc-400 transition hover:text-white"
							>
								{link.label}
							</a>
						))}
					</nav>
				)}

				<div className="flex items-center gap-2">
					<ThemeToggle />
					{!minimal && (
						<a
							href={profile.resumeUrl}
							target="_blank"
							rel="noreferrer"
							className="btn-ghost hidden sm:inline-flex"
						>
							<Download size={16} /> Resume
						</a>
					)}
					{!minimal && (
						<button
							type="button"
							className="btn-ghost md:hidden"
							onClick={() => setOpen((v) => !v)}
							aria-label="Toggle menu"
						>
							{open ? <X size={18} /> : <Menu size={18} />}
						</button>
					)}
				</div>
			</div>

			{open && !minimal && (
				<nav className="border-t border-white/5 px-4 py-4 md:hidden">
					<div className="flex flex-col gap-3">
						{navLinks.map((link) => (
							<a
								key={link.hash}
								href={sectionHref(link.hash)}
								className="text-sm text-zinc-300"
								onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
					</div>
				</nav>
			)}
		</header>
	);
}
