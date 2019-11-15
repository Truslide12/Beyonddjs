export default {
  login: (email, password) =>
    fetch("/api/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }),
  register: ( email, password, role, firstName, lastName, city, state, zip, phone ) =>
    fetch("/api/auth/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role, firstName, lastName, city, state, zip, phone })
    }),
  logout: () => fetch("/api/auth/", { method: 'DELETE' }),
  validateCookie: sid => fetch(`/api/auth/session/${encodeURIComponent(sid)}`),
  // event: () =>    //add appropriate event info from form
  //   fetch("api/auth/event", {
  //     method: postMessage,
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({}) // add appropriate event info calls here too
  //   }),
  // search: (zip, date, startTime, EndTime) => { // add all search info to run search
  // fetch("api/auth/search"), {
  //   method: 'Post',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ zip, date, startTime, EndTime })
  // }
  // }
};
