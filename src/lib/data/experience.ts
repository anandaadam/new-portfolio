import type { Experience } from '$lib/types';

export const experiences: Experience[] = [
	{
    id: '1',
    company: 'Telkom Foundation',
    position: 'Backend Developer',
    duration: '2+ years',
    period: 'Jan 2024 – Present',
    contributions: [
        'Architected and led backend development of the foundation\'s first end-to-end integrated academic platform, serving 15,000+ students, 4,000+ teachers and admins, and parents across 19 schools',
        'Designed cross-unit data integration between Education and Finance modules, eliminating manual reconciliation and delivering ERP-like operational visibility from a single source of truth',
        'Migrated 100,000+ legacy records from Oracle to PostgreSQL with zero data loss through carefully staged ETL and validation pipelines',
        'Implemented end-to-end encryption for API payloads and sensitive database fields, aligning the platform with modern data-protection standards',
        'Authored 5+ comprehensive SRS documents including business process flows, UML diagrams, and ERDs, establishing engineering documentation standards adopted across the team',
        'Mentored interns and junior developers on system architecture, secure coding practices, and code review'
    ],
    current: true
},
{
    id: '2',
    company: 'Telkom Foundation',
    position: 'Full Stack Programmer',
    duration: '1 year',
    period: 'Jan 2023 – Dec 2023',
    contributions: [
        'Developed and shipped 3+ enterprise web applications used across Telkom Foundation subsidiaries, streamlining internal workflows and reducing manual administrative effort',
        'Designed and implemented scalable RESTful APIs with secure authentication (JWT, role-based access control), enabling reliable system integration and real-time data exchange',
        'Built an executive analytics dashboard aggregating academic and enrollment data pipelines, delivering real-time KPIs and actionable insights directly to the Board of Directors',
        'Optimized and stabilized legacy enterprise applications by refactoring critical modules, fixing production bugs, and upgrading framework versions'
    ],
    current: false
},
	// {
	// 	id: '3',
	// 	company: 'Freelance',
	// 	position: 'Backend Developer',
	// 	duration: '1 year',
	// 	period: '2021 – 2022',
	// 	contributions: [
	// 		'Delivered backend systems for small-to-medium businesses across e-commerce, logistics, and healthcare verticals',
	// 		'Built RESTful APIs with Laravel and Node.js, covering authentication, authorization, and third-party integrations',
	// 		'Established coding standards and documentation practices that clients continued to use as their teams grew'
	// 	],
	// 	current: false
	// }
];
