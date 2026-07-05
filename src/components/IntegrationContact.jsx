import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { profile } from "../data/profile";

// Integration tools orbiting the hub — evenly spaced, uniform styling.
const tools = [
	{ short: "SF", label: "Salesforce" },
	{ short: "JR", label: "Jira" },
	{ short: "SL", label: "Slack" },
	{ short: "GC", label: "Calendar" },
	{ short: "OL", label: "Outlook" },
	{ short: "n8", label: "n8n" },
	{ short: "WS", label: "WebSocket" },
	{ short: "OA", label: "OAuth 2.0" },
];

const channels = [
	{
		id: "email",
		short: "@",
		label: "Email",
		endpoint: profile.email,
		href: `mailto:${profile.email}`,
		Icon: Mail,
	},
	{
		id: "linkedin",
		short: "in",
		label: "LinkedIn",
		endpoint: "/sarthak-ahuja",
		href: profile.linkedin,
		Icon: LinkedInIcon,
	},
	{
		id: "github",
		short: "gh",
		label: "GitHub",
		endpoint: "/Sarthak-sa",
		href: profile.github,
		Icon: GitHubIcon,
	},
];

const VIEW = 520;
const CENTER = VIEW / 2;
const RADIUS = 188;
const HUB_RADIUS = 44;
const NODE_RADIUS = 28;

const layout = tools.map((tool, i) => {
	const angle = (i / tools.length) * Math.PI * 2 - Math.PI / 2;
	return {
		...tool,
		x: CENTER + RADIUS * Math.cos(angle),
		y: CENTER + RADIUS * Math.sin(angle),
	};
});

export default function IntegrationContact() {
	const reduce = useReducedMotion();
	const spokes = useMemo(() => layout, []);

	return (
		<div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
			{/* Left: the copy + a live console readout + real channel links */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.5 }}
			>
				<p className="section-label mb-4">Reach out</p>
				<h2 className="text-3xl font-bold md:text-5xl">Let's wire up another integration.</h2>
				<p className="mt-4 max-w-md text-zinc-400">
					I connect systems that were never meant to talk — Salesforce, Jira, Slack, calendars, n8n. Consider yourself
					the next node. Open a channel and I'll sync back within 24 hours.
				</p>

				<div className="glass-card mt-8 overflow-hidden rounded-xl font-mono text-xs">
					<div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5 text-zinc-500">
						<span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
						<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
						<span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
						<span className="ml-2 text-[11px] tracking-wide">sync.status</span>
					</div>
					<div className="space-y-1.5 px-4 py-3 text-zinc-400">
						<p>
							<span className="text-purple-400">➜</span> handshake <span className="text-cyan-300">OAuth 2.0</span>{" "}
							<span className="text-green-400">ok</span>
						</p>
						<p>
							<span className="text-purple-400">➜</span> channels{" "}
							<span className="text-cyan-300">email · linkedin · github</span>{" "}
							<span className="text-green-400">online</span>
						</p>
						<p className="flex items-center gap-1">
							<span className="text-purple-400">➜</span> awaiting inbound message
							<motion.span
								aria-hidden
								className="inline-block h-3.5 w-1.5 bg-cyan-300"
								animate={reduce ? undefined : { opacity: [1, 0.15, 1] }}
								transition={{ duration: 1.1, repeat: Infinity }}
							/>
						</p>
					</div>
				</div>

				<div className="mt-6 grid gap-3 sm:grid-cols-3">
					{channels.map(({ id, label, endpoint, href, Icon }) => (
						<a
							key={id}
							href={href}
							target={href.startsWith("mailto") ? undefined : "_blank"}
							rel="noreferrer"
							className="glass-card group flex flex-col gap-2 rounded-xl px-4 py-3 transition hover:border-cyan-400/40"
						>
							<span className="flex items-center justify-between text-cyan-300">
								<Icon size={16} />
								<ArrowUpRight size={13} className="text-zinc-500 transition group-hover:text-cyan-300" />
							</span>
							<span className="text-sm font-medium text-zinc-200">{label}</span>
							<span className="truncate text-[11px] text-zinc-500">{endpoint}</span>
						</a>
					))}
				</div>

				<a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost mt-4 w-full">
					<Download size={16} /> Download résumé (PDF)
				</a>
			</motion.div>

			{/* Right: the animated integration hub */}
			<motion.div
				initial={{ opacity: 0, scale: 0.94 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.6 }}
				className="relative mx-auto w-full max-w-[520px]"
			>
				<svg viewBox={`0 0 ${VIEW} ${VIEW}`} className="h-auto w-full" role="img" aria-label="Integration hub diagram">
					<defs>
						<radialGradient id="hub-core" cx="50%" cy="50%" r="50%">
							<stop offset="0%" stopColor="#c084fc" />
							<stop offset="100%" stopColor="#7c3aed" />
						</radialGradient>
					</defs>

					<motion.g
						style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
						animate={reduce ? undefined : { rotate: 360 }}
						transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
					>
						<circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="rgba(168,85,247,0.16)" strokeWidth="1" strokeDasharray="3 9" />
					</motion.g>

					{spokes.map((node, i) => (
						<g key={`spoke-${node.label}`}>
							<line
								x1={CENTER}
								y1={CENTER}
								x2={node.x}
								y2={node.y}
								stroke="rgba(34,211,238,0.1)"
								strokeWidth="5"
								strokeLinecap="round"
							/>
							<line
								x1={CENTER}
								y1={CENTER}
								x2={node.x}
								y2={node.y}
								stroke="rgba(168,85,247,0.42)"
								strokeWidth="1.5"
								strokeLinecap="round"
							/>
							{!reduce && (
								<motion.circle
									r={3}
									fill="#22d3ee"
									initial={{ cx: CENTER, cy: CENTER, opacity: 0 }}
									animate={{
										cx: [CENTER, node.x],
										cy: [CENTER, node.y],
										opacity: [0, 1, 1, 0],
									}}
									transition={{
										duration: 2.6,
										repeat: Infinity,
										delay: i * (2.6 / spokes.length),
										ease: "easeInOut",
									}}
								/>
							)}
						</g>
					))}

					{spokes.map((node) => (
						<g key={`node-${node.label}`}>
							<circle
								cx={node.x}
								cy={node.y}
								r={NODE_RADIUS}
								fill="rgba(168,85,247,0.1)"
								stroke="rgba(168,85,247,0.45)"
								strokeWidth="1.4"
							/>
							<circle
								cx={node.x}
								cy={node.y}
								r={NODE_RADIUS - 6}
								fill="none"
								stroke="rgba(34,211,238,0.2)"
								strokeWidth="1"
							/>
							<text
								x={node.x}
								y={node.y}
								textAnchor="middle"
								dominantBaseline="central"
								className="font-mono"
								fontSize="13"
								fontWeight="600"
								fill="#d8b4fe"
							>
								{node.short}
							</text>
							<text
								x={node.x}
								y={node.y + 42}
								textAnchor="middle"
								fontSize="10.5"
								fill="currentColor"
								className="fill-zinc-400"
							>
								{node.label}
							</text>
						</g>
					))}

					{!reduce && (
						<motion.circle
							cx={CENTER}
							cy={CENTER}
							r={HUB_RADIUS}
							fill="none"
							stroke="rgba(168,85,247,0.5)"
							strokeWidth="1.5"
							initial={{ scale: 1, opacity: 0.6 }}
							animate={{ scale: [1, 2.1], opacity: [0.5, 0] }}
							transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
							style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
						/>
					)}
					<circle cx={CENTER} cy={CENTER} r={HUB_RADIUS} fill="url(#hub-core)" />
					<text
						x={CENTER}
						y={CENTER - 3}
						textAnchor="middle"
						dominantBaseline="central"
						fontSize="22"
						fontWeight="700"
						fill="#fff"
					>
						SA
					</text>
					<text x={CENTER} y={CENTER + 16} textAnchor="middle" fontSize="8.5" letterSpacing="1.5" fill="rgba(255,255,255,0.75)">
						HUB
					</text>
				</svg>

				<p className="mt-2 text-center text-[11px] text-zinc-500">
					8 integrations · one hub · open a channel on the left to connect
				</p>
			</motion.div>
		</div>
	);
}
