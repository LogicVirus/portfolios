import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Tech Support Specialist',
		description: 'Technical support specialist with ISO certifications and Duo Mobile security certification.',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Tufts University',
		period: { from: new Date(2022, 0, 1), to: new Date(2024, 5, 1) },
		shortDescription: '',
		slug: 'tufts-tech-support',
		subjects: ['Tech Support', 'ISO Certifications', 'Duo Mobile Security Certification']
	},
	{
		degree: 'CDL and Large Equipment Specialist',
		description: 'Certified CDL Truck Driver and Large Equipment Specialist.',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Various Training Programs',
		period: { from: new Date(2015, 6, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'cdl-large-equipment-specialist',
		subjects: ['CDL Training', 'Heavy Machinery Operation', 'Safety Protocols']
	},
	{
		degree: 'No Degree',
		description: 'Pursued education in Nutrition and gained technical skills.',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'East Mississippi Community College',
		period: { from: new Date(2013, 8, 1), to: new Date(2015, 5, 1) },
		shortDescription: '',
		slug: 'emcc-nutrition',
		subjects: ['Nutrition', 'Web Design', 'Business Development', 'Health Studies']
	},
	{
		degree: 'High School Diploma',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'New Hope High School',
		period: { from: new Date(2009, 8, 1), to: new Date(2013, 5, 1) },
		shortDescription: '',
		slug: 'new-hope-high-school',
		subjects: ['Mathematics', 'English', 'Biology', 'History', 'Physical Education']
	}
];

export const title = 'Education';