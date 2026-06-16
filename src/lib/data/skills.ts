import type { SkillCategory } from '$lib/types';

export const skillCategories: SkillCategory[] = [
	{
		name: 'Backend',
		skills: [
			{ name: 'PHP' },
			{ name: 'Java' },
			{ name: 'Node.js' },
			{ name: 'Golang' },
			{ name: 'Laravel' },
			{ name: 'Spring Boot' },
			{ name: 'Fiber' },
			{ name: 'GraphQL' },
		]
	},
	{
		name: 'Database',
		skills: [
			{ name: 'PostgreSQL' },
			{ name: 'MySQL' },
			{ name: 'MongoDB' },
			{ name: 'Redis' },
			{ name: 'Oracle' },
			{ name: 'Elasticsearch' },
		]
	},
	{
		name: 'Architecture',
		skills: [
			{ name: 'Microservices' },
			{ name: 'Event-Driven' },
			{ name: 'Kafka' },
			{ name: 'CQRS' },
			{ name: 'Saga Pattern' }
		]
	},
	{
		name: 'DevOps & Tools',
		skills: [
			{ name: 'Docker' },
			{ name: 'Git' },
			{ name: 'CI/CD' },
			{ name: 'AWS' },
			{ name: 'Kubernetes' }
		]
	}
];

// Marquee rows for the infinite tech scroll
export const marqueeRow1 = [
    'PHP',
    'Java',
    'Node.js',
    'Golang',
    'Laravel',
    'Spring Boot',
    'Fiber',
    'GraphQL',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',
];

export const marqueeRow2 = [
    'Oracle',
    'Elasticsearch',
    'Microservices',
    'Event-Driven',
    'Kafka',
    'CQRS',
    'Saga Pattern',
    'Docker',
    'Git',
    'CI/CD',
    'AWS',
    'Kubernetes',
];
