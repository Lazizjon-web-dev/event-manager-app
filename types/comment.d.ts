import type User from '~/types/user';
export default interface Comment {
    id: string;
    author: User;
    body: string;
    date: Date;
}