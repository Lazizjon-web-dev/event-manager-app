import type Event from '~/types/event';
import type UserInfo from '~/types/userInfo';
const events: Event[] = [
  {
    id: "1",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BtZW50JTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    title: "Web Development Workshop",
    description: "Learn the latest web development techniques and tools.",
    price: 50,
    author: { id: "jane123", name: "Jane Doe" },
    availablePlaces: 30,
    likes: 15,
    likers: [
      { id: "user1", name: "John Smith" },
      { id: "user2", name: "Alice Johnson" },
    ],
    deadline: new Date("2024-11-15"),
    schedule: new Date("2024-11-30"),
  },
  {
    id: "2",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1664299935896-8b7638a6f105?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BtZW50JTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    title: "AI and Machine Learning Conference",
    description: "Explore the cutting-edge advancements in AI and ML.",
    price: 100,
    author: { id: "alan456", name: "Dr. Alan Turing" },
    availablePlaces: 200,
    likes: 50,
    likers: [
      { id: "user3", name: "Emma Watson" },
      { id: "user4", name: "Robert Brown" },
      { id: "user5", name: "Sophia Lee" },
    ],
    deadline: new Date("2024-12-01"),
    schedule: new Date("2024-12-15"),
  },
  {
    id: "3",
    thumbnail:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYiUyMGRldmVsb3BtZW50JTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    title: "Mobile App Design Workshop",
    description: "Master the art of creating stunning mobile app interfaces.",
    price: 75,
    author: { id: "sarah789", name: "Sarah Parker" },
    availablePlaces: 25,
    likes: 30,
    likers: [
      { id: "user6", name: "Michael Chen" },
      { id: "user7", name: "Emily Davis" },
    ],
    deadline: new Date("2024-10-20"),
    schedule: new Date("2024-11-05"),
  },
  {
    id: "3",
    thumbnail:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYiUyMGRldmVsb3BtZW50JTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    title: "Mobile App Design Workshop",
    description: "Master the art of creating stunning mobile app interfaces.",
    price: 75,
    author: { id: "sarah789", name: "Sarah Parker" },
    availablePlaces: 25,
    likes: 30,
    likers: [
      { id: "user6", name: "Michael Chen" },
      { id: "user7", name: "Emily Davis" },
    ],
    deadline: new Date("2024-10-20"),
    schedule: new Date("2024-11-05"),
  },
  {
    id: "3",
    thumbnail:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYiUyMGRldmVsb3BtZW50JTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    title: "Mobile App Design Workshop",
    description: "Master the art of creating stunning mobile app interfaces.",
    price: 75,
    author: { id: "sarah789", name: "Sarah Parker" },
    availablePlaces: 25,
    likes: 30,
    likers: [
      { id: "user6", name: "Michael Chen" },
      { id: "user7", name: "Emily Davis" },
    ],
    deadline: new Date("2024-10-20"),
    schedule: new Date("2024-11-05"),
  },
];
const userInfo: UserInfo = {
  email: "example@gmail.com",
  token: "",
}

const state = () => {
  return {
    appTitle: "Tadbirchi",
    events,
    userInfo,
  };
};
export default state;
