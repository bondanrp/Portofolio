import createStore from "unistore";

const store = createStore({ darkMode: false });

const actions = theStore => ({
  onOff: ({ darkMode }) => (darkMode ? { darkMode: false } : { darkMode: true })
});

export { store, actions };
