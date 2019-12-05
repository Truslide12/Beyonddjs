export default {
  // Login and Authorization APIs
  login: (email, password) =>
    fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    }),

  register: ( email, password, role, firstName, lastName, city, state, zip, phone, calendar, viewAll, canEdit, canDelete, stageName, img, summary, genres, links ) =>
    fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role, firstName, lastName, city, state, zip, phone, calendar, viewAll, canEdit, canDelete, stageName, img, summary, genres, links })
    }),
  
  updateUser: ( email, firstName, lastName, city, state, zip, phone, calendar, stageName, img, summary, genres, links ) => fetch("/api/auth/update/user",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, firstName, lastName, city, state, zip, phone, calendar, stageName, img, summary, genres, links }), //
  }),

  logout: () => fetch("/api/auth/", { method: "DELETE" }),

  validateCookie: () => fetch("/api/auth/session/"),

  updateAvailability: ( _id, calendar ) => fetch("/api/auth/updateAvailability", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id, calendar }), //
  }),

  // Event APIs
  createEvent: ( name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule ) =>
    fetch("/api/auth/createEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule })
    }),

  updateEvent: (eventID) => fetch("/api/auth/update/event",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({eventID}), //
  }),
  
  search: () =>
    fetch("/api/auth/search", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify()
    }),

  searchEvents: () =>  // add all search info to run search
    fetch("api/auth/searchEvents", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    }),

  myEvents: () =>
    fetch("api/auth/myEvents", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    }),
};
