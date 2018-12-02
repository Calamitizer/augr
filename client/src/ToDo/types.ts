import shortid = require("shortid");

export interface ToDoState {
	readonly toDos: ToDo[];
	readonly filter: boolean;
}

export interface ToDo {
	readonly id: string;
	readonly text: string;
	readonly completed: boolean;
}

export const initialToDoState: ToDoState = {
	toDos: [
		{
			id: shortid.generate(),
			text: 'Unicorns!',
			completed: false,
		},
		{
			id: shortid.generate(),
			text: 'Rainbows!',
			completed: true,
		},
	],
	filter: false,
};
