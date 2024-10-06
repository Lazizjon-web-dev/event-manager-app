const getters = {
  getEventById: state => id => state.events.find((event) => event.id === id),
  getUserToken: state => () => state.userInfo.token,
};
export default getters;
