import { useLocalStorage } from "@vueuse/core";
const storedToken = useLocalStorage('userToken', null);
const mutations = {
  setUserToken(state, token: string) {
    //save to the vuex state management
    state.userInfo.token = token;
    //save to the local storage
    storedToken.value = token;
  },
  setEvents(state, events) {
    state.events = events;
  },
  addEvent(state, event) {
    state.events.push(event);
  },
  updateEvent(state, updatedEvent) {
    const index = state.events.findIndex((e) => e.id === updatedEvent.id);
    if (index !== -1) {
      state.events[index] = updatedEvent;
    }
  },
  toggleLike(state, { eventId, userId, userName }) {
    const event = state.events.find((e) => e.id === eventId);
    if (event) {
      const likerIndex = event.likers.findIndex((l) => l.id === userId);
      if (likerIndex === -1) {
        event.likers.push({ id: userId, name: userName });
        event.likes++;
      } else {
        event.likers.splice(likerIndex, 1);
        event.likes--;
      }
    }
  },
};

export default mutations;
