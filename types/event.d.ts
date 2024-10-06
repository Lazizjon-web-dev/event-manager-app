import type User from '~/types/user';

// Interface for an event
export default interface Event {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    price: number;
    author: User;
    availablePlaces: number;
    likes: number;
    likers: User[];
    deadline: Date;
    schedule: Date;
}