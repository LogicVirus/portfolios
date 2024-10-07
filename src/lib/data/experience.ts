import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'cdl-truck-driver',
		company: 'Various Employers',
		description: 'Certified CDL Truck Driver and Large Equipment Specialist handling heavy machinery.',
		contract: ContractType.FullTime,
		type: 'Logistics and Heavy Machinery',
		location: 'USA',
		period: { from: new Date(2015, 6, 1), to: new Date(2022, 5, 1) },
		skills: getSkills('CDL', 'Heavy Machinery Operation', 'Safety Protocols'),
		name: 'CDL Truck Driver and Equipment Specialist',
		color: 'orange',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Handled logistics, trucking, and large equipment operation.'
	},
	{
		slug: 'tech-support-specialist',
		company: 'Tufts University',
		description: 'Provided technical support, managed ISO certifications, and implemented Duo Mobile security solutions.',
		contract: ContractType.FullTime,
		type: 'Technical Support',
		location: 'USA',
		period: { from: new Date(2022, 0, 1), to: new Date(2024, 5, 1) },
		skills: getSkills('Tech Support', 'ISO Certifications', 'Duo Mobile Security'),
		name: 'Tech Support Specialist',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Technical support specialist with a focus on security and compliance.'
	}
];

export const title = 'Experience';