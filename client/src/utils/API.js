export default {
  // Login and Authorization APIs
  login: (email, password) =>
    fetch("/api/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }),
  register: (email, password, role, firstName, lastName, city, state, zip, phone) =>
    fetch("/api/auth/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role, firstName, lastName, city, state, zip, phone })
    }),
  logout: () => fetch("/api/auth/", { method: 'DELETE' }),
  validateCookie: sid => fetch(`/api/auth/session/${encodeURIComponent(sid)}`),

  // Entertainer APIs
  
  // Event APIs
  createEvent: (name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule) =>
    fetch("/api/auth/createEvent", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule })
    }),

  search: (name, creator, date, startTime, endTime, description, city, state, zip, publicEvent) => fetch("/api/auth/search", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, creator, date, startTime, endTime, description, city, state, zip, publicEvent })
  })

  // searchEvents: ( name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule ) => { // add all search info to run search
  //   fetch("api/auth/search"), {
  //     method: 'Post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule })
  //   }
  // }
};
