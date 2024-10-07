import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Josh';

export const lastName = 'Perry';

export const description =
	"I'm a dedicated web developer specializing in creating clean and user-friendly interfaces. With a strong foundation in modern tools like Javascript and React, I love building applications that bring ideas to life.";

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/LogicVirus' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/josh-perry-10aa46172/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://x.com/joshperry0'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/26739672/josh-perry'
	},
	{
		platform: Platform.Email,
		link: 'mailto:jperry09@tufts.edu'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@AlienLife-oy1tb'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/josh.perry.35110/'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');