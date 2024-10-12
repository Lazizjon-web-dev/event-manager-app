import type User from '~/types/user';
import type Comment from '~/types/comment'
// Interface for an event
export default interface Event {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    price: number;
    author: User;
    likes: number;
    schedule: Date;
    //optional properties which will be added after opening specific event to improve performance
    availablePlaces?: number;
    categories?: string;
    deadline?: Date;
    likers?: User[];
    comments?: Comment[];
    participants?: User[];
}