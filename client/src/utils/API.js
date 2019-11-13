export default {
  login: (username, password) => 
    fetch("/api/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }),
    register: (email, password, role) =>
    fetch("/api/auth/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role })
    }),
  logout: () => fetch("/api/auth/", { method: 'DELETE' }),
  validateCookie: sid => fetch(`/api/auth/session/${encodeURIComponent(sid)}`),
  // validateRole: role => 
  //   fetch("/api/auth/session/role", {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ role })
  //   }), //Not sure if this is correct or neccesary
  // event: () =>    //add appropriate event info from form
  // fetch("api/auth/event", {
  //   method: postMessage,
  //   headers: {'Content-Type': 'application/json' },
  //   body: JSON.stringify({}) // add appropriate event info calls here too
  // }),
  // search: (zip, date, startTime, EndTime) => { // add all search info to run search
  // fetch("api/auth/search"), {
  //   method: 'Post',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ zip, date, startTime, EndTime })
  // }
// }
};
