export const projects = [
	{
		slug: "chat-wave",
		title: "Chat Wave",
		tagline: "Real-time chat that feels spatial and alive.",
		status: "Shipped",
		statusDetail: "Completed · Shipped · 2024",
		year: "2024",
		role: "Solo · design + engineering",
		category: "shipped",
		image: "/assets/projects-mockups/chat-wave.png",
		stack: ["React", "Node", "MongoDB", "Socket.io", "JWT", "Tailwind"],
		liveUrl: "https://chat-wave-ei8s.onrender.com/",
		githubUrl: "https://github.com/Sarthak-sa/chatApp",
		ctaLabel: "Live demo",
		shortDescription:
			"Full-stack real-time chat with JWT authentication, WebSocket messaging, draggable chat UI, and responsive design.",
		overview: [
			"Chat Wave is a full-stack real-time chat application featuring JWT-based authentication, WebSocket-powered messaging, a draggable chat UI, and a fully responsive layout.",
			"The backend handles secure sessions and live messaging over Socket.io while the frontend delivers a dynamic interface — typing indicators, read receipts, file sharing, and spatial window controls.",
			"Built as a solo project to explore how real-time systems can feel tactile and alive, not just functional.",
		],
		highlights: [
			"Draggable chat box for a spatial feel — move the window freely across the screen",
			"Real-time messaging with Socket.io, typing indicators, and read receipts",
			"JWT cookie-based authentication with secure session handling",
			"Unread counts, last-message previews, and emoji/file sharing",
			"Responsive mobile layout with theme toggle and profile management",
			"MongoDB persistence with audit logging for account activity",
		],
	},
	{
		slug: "shirt-decoy",
		title: "Shirt Decoy",
		tagline: "Design your shirt in 3D, live.",
		status: "Shipped",
		statusDetail: "Completed · Shipped · 2024",
		year: "2024",
		role: "Solo · design + engineering",
		category: "shipped",
		image: "/assets/projects-mockups/shirt-decoy.png",
		stack: ["React", "Three.js", "GLSL", "Vite", "Tailwind", "Framer Motion"],
		liveUrl: "https://threejs-custom-shirt.netlify.app/",
		githubUrl: "https://github.com/Sarthak-sa",
		ctaLabel: "Live demo",
		shortDescription:
			"3D product customization platform with React and Three.js — real-time texture, color, and logo customization.",
		overview: [
			"Shirt Decoy is a 3D product customization platform built with React.js and Three.js, allowing users to change colors, upload logos, and apply textures with a live preview on a WebGL shirt model.",
			"React handles component state and UI flow while Three.js powers real-time 3D rendering — every customization updates instantly on the model without a page reload.",
			"A solo side project exploring how e-commerce and product design can merge into an interactive web experience.",
		],
		highlights: [
			"Dynamic 3D shirt generation with real-time WebGL rendering",
			"Full color customization with instant visual feedback",
			"Logo upload — integrate any image seamlessly onto the 3D model",
			"Texture image upload for unique fabric styling",
			"Download options for customized designs",
			"Theme adapts dynamically based on selected shirt color",
		],
	},
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug) => {
	const index = projects.findIndex((p) => p.slug === slug);
	if (index === -1) return null;
	return projects[(index + 1) % projects.length];
};
