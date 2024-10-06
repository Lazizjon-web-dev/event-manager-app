import type LoginInfo from "~/types/loginInfo";
const actions = {
  async fetchEvents({ commit }) {
    // In a real application, you would fetch events from an API
    // For now, we'll use mock data
    const events = [
      {
        id: "1",
        thumbnail: "https://example.com/event1.jpg",
        title: "Web Development Workshop",
        description: "Learn the latest web development techniques and tools.",
        price: 50,
        author: "Jane Doe",
        authorId: "jane123",
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
        thumbnail: "https://example.com/event2.jpg",
        title: "AI and Machine Learning Conference",
        description: "Explore the cutting-edge advancements in AI and ML.",
        price: 100,
        author: "Dr. Alan Turing",
        authorId: "alan456",
        availablePlaces: 200,
        likes: 50,
        likers: [
          { id: "user3", name: "Emma Watson" },
          { id: "user4", name: "Robert Brown" },
        ],
        deadline: new Date("2024-12-01"),
        schedule: new Date("2024-12-15"),
      },
    ];
    commit("setEvents", events);
  },//{ email,password,remember}:{ email: string,password:string, remember: boolean}
  async Login({ commit },loginInfo:LoginInfo){
    console.log(loginInfo)
    //here function should send email and password to the server to log in and should get token back
    const token = "mockingtoken" + Math.floor(Math.random() * 1000);
    commit('setUserToken',token)
  }
};

export default actions;
