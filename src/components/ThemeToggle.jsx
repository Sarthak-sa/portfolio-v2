import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="rounded-full border border-white/10 p-2 text-zinc-400 transition hover:border-purple-500/40 hover:text-purple-300"
			title={isDark ? "Switch to light mode" : "Switch to dark mode"}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			aria-pressed={!isDark}
		>
			{isDark ? <Sun size={16} /> : <Moon size={16} />}
		</button>
	);
}
