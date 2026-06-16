export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	techStack: string[];
	features: string[];
	githubUrl: string;
	liveUrl?: string;
	imageUrl?: string;
	featured: boolean;
}

export interface Experience {
	id: string;
	company: string;
	position: string;
	duration: string;
	period: string;
	contributions: string[];
	current: boolean;
}

export interface SkillCategory {
	name: string;
	skills: Skill[];
}

export interface Skill {
	name: string;
	icon?: string;
}
