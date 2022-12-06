export interface ILanguage {
	id: number;
	language: string;
	highlightLanguage: string;
	description: string;
	image: string;
	code: string;
	links: links[];
	videos: links[];
	note: string;
}

interface links {
	id: number;
	link: string;
	text?: string;
}
