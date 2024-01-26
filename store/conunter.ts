import { createStore, createEvent } from 'effector';

export const $counter = createStore<number>(0);

export const incrementCounter = createEvent();
export const decrementCounter = createEvent();
export const randomCounter = createEvent();

$counter
	.on(incrementCounter, (state) => state + 1)
	.on(decrementCounter, (state) => state - 1)
	.on(randomCounter, () => 10); //Рандом будет немного позже, я сейчас в Алмазе
