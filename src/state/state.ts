import { Store } from "pullstate";

export enum NavPages {
	INTRO = 'intro',
	ABOUT_ME = 'about-me',
	MY_WORK = 'my-work',
	CONTACT = 'contact',
}

interface UIStore {
	darkMode: boolean;
	showMenu: boolean;
	activePage: NavPages
}

export const UIStore = new Store<UIStore>({
	darkMode: false,
	showMenu: false,
	activePage: NavPages.INTRO,
});