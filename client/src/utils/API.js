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

  logout: () => fetch("/api/auth/logout", { method: 'DELETE' }), // need to add route in auth.js

  validateCookie: sid => fetch(`/api/auth/session/${encodeURIComponent(sid)}`),

  // Admin APIs

  createAdmin: ( email ) =>
  fetch("/api/auth/createAdmin", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  }),

  // Entertainer APIs

  createEntertainer: ( email, entertainerName, job, img, summary, genres, links, calendar ) =>
  fetch("/api/auth/createEentertainer", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, entertainerName, job, img, summary, genres, links, calendar })
  }),

  updateEntertainer: ( email, entertainerName, job, img, summary, genres, links, calendar ) =>
  fetch("/api/auth/createEentertainer", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, entertainerName, job, img, summary, genres, links, calendar })
  }),

  // PromoterVendor APIs

  createPromoterVendor: ( email, img, summary, genres, links, calendar ) =>
  fetch("/api/auth/createPromoterVendor", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, img, summary, genres, links, calendar })
  }),

  updatePromoterVendor: ( email, img, summary, genres, links, calendar ) =>
  fetch("/api/auth/createPromoterVendor", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, img, summary, genres, links, calendar })
  }),

  // Event APIs
  createEvent: (name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule) =>
    fetch("/api/auth/createEvent", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule })
    }),

  search: (name, date, startTime, endTime, zip ) => fetch("/api/auth/search", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, date, startTime, endTime, zip })
  })

  // searchEvents: ( name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule ) => { // add all search info to run search
  //   fetch("api/auth/search"), {
  //     method: 'Post',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule })
  //   }
  // }
};
