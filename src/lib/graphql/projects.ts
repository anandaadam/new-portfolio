import type { Project } from '$lib/types';

// Mock project data — replace with real GraphQL endpoint later
const MOCK_PROJECTS: Project[] = [
	{
		id: '1',
		title: 'Digital Telkom Schools',
		description:
			'An integrated academic super app connecting students, teachers, parents, and staff to streamline education workflows across the entire school ecosystem.',
		longDescription:
			'Digital Telkom Schools centralizes core academic processes into a single platform, from student registration and classroom activities to assessments and report cards. Built to support daily operations across multiple institutions while improving collaboration and operational efficiency.',
		techStack: [
			'PHP',
			'Laravel',
			'PostgreSQL',
			'Docker',
			'Jenkins',
			'S3 Storage',
			'CQRS Pattern'
		],
		features: [
			'Academic workflows from enrollment to report cards',
			'Role-based access for students, teachers, parents, and staff',
			'Secure authentication with OAuth2 and JWT',
			'Cross-module integration for academic operations',
			'CQRS implementation for scalable read and write workloads'
		],
		githubUrl: '',
		liveUrl: '',
		featured: true
	},
	{
		id: '2',
		title: 'SPMB Telkom Schools',
		description:
			'A digital admissions platform that guides prospective students through the complete enrollment journey from registration to final acceptance.',
		longDescription:
			'SPMB Telkom Schools simplifies the student admission process through a structured and fully online experience. Applicants can choose schools and admission pathways, complete payments, submit documents, and access announcements from a single portal.',
		techStack: [
			'PHP',
			'Laravel',
			'PostgreSQL',
			'Docker',
			'Jenkins'
		],
		features: [
			'School and admission pathway selection',
			'Online payment integration',
			'Digital document submission and verification',
			'Real-time admission status and announcements',
			'Secure authentication with OAuth2 and JWT'
		],
		githubUrl: '',
		featured: false
	},
	{
		id: '3',
		title: 'Billing Collection Telkom Schools',
		description:
			'An online payment platform that streamlines school fee collection and simplifies financial reconciliation processes.',
		longDescription:
			'Billing Collection enables parents and students to securely pay tuition and other school-related expenses through integrated online payment channels. The platform improves convenience while providing seamless synchronization with internal finance operations.',
		techStack: [
			'PHP',
			'Laravel',
			'PostgreSQL',
			'Docker',
			'Jenkins',
			'CQRS Pattern'
		],
		features: [
			'Online payments for tuition and school fees',
			'Finance system integration and reconciliation',
			'Support for multiple billing components',
			'Secure authentication with OAuth2 and JWT',
			'CQRS implementation for transaction processing'
		],
		githubUrl: '',
		featured: false
	},
	{
		id: '4',
		title: 'Dashboard Telkom Schools',
		description:
			'An executive dashboard delivering strategic insights through interactive visualizations and real-time institutional metrics.',
		longDescription:
			'Designed for leadership teams, the dashboard consolidates data from Telkom Schools and Telkom University into a unified reporting experience. Interactive charts and performance indicators support faster, data-driven decision making.',
		techStack: [
			'JavaScript',
			'Tailwind CSS',
			'Oracle DB',
			'Redis'
		],
		features: [
			'Executive insights across schools and universities',
			'Interactive charts and performance indicators',
			'Cross-institution data aggregation',
			'Session-based authentication with Redis',
			'Real-time operational and strategic reporting'
		],
		githubUrl: '',
		featured: false
	}
];

// GraphQL-style query interface — swap this function body with a real fetch() call later
export async function queryProjects(): Promise<Project[]> {
	// Simulating async GraphQL call
	await new Promise((resolve) => setTimeout(resolve, 0));
	return MOCK_PROJECTS;
}

export async function queryFeaturedProject(): Promise<Project | undefined> {
	const projects = await queryProjects();
	return projects.find((p) => p.featured);
}

export async function queryAdditionalProjects(): Promise<Project[]> {
	const projects = await queryProjects();
	return projects.filter((p) => !p.featured);
}
