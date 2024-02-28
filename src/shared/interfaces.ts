export interface IFlashcard {
	id: number;
	category: string;
	front: string
	back: string;
}

export type ISiteEnvironment = "development" | "production";

export interface IAppData {
	flashcards: IFlashcard[],
	siteEnvironment: ISiteEnvironment
}

export interface IDb {
	flashcards: IFlashcard[]
}