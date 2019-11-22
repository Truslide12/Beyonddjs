export default {
  // Login and Authorization APIs
  login: (email, password) =>
    fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    }),

  register: (
    email,
    password,
    role,
    firstName,
    lastName,
    city,
    state,
    zip,
    phone,
    calendar,
    viewAll,
    canEdit,
    canDelete,
    stageName,
    img,
    summary,
    genres,
    links
  ) =>
    fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        role,
        firstName,
        lastName,
        city,
        state,
        zip,
        phone,
        calendar,
        viewAll,
        canEdit,
        canDelete,
        stageName,
        img,
        summary,
        genres,
        links
      })
    }),

  logout: () => fetch("/api/auth/", { method: "DELETE" }),

  validateCookie: () => fetch("/api/auth/session/"),

  updateAvailability: ( email, calendar, newCalendar ) => 
  fetch("/api/auth/updateAvailability", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( email, calendar, newCalendar ),
    }),

  // Event APIs
  createEvent: (
    name,
    creator,
    date,
    startTime,
    endTime,
    description,
    city,
    state,
    zip,
    publicEvent,
    phone,
    maxEntertainers,
    entsContacted,
    entsConfirmed,
    schedule
  ) =>
    fetch("/api/auth/createEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        creator,
        date,
        startTime,
        endTime,
        description,
        city,
        state,
        zip,
        publicEvent,
        phone,
        maxEntertainers,
        entsContacted,
        entsConfirmed,
        schedule
      })
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
    })
};
