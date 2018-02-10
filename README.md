SEVN Stack application for listing and viewing properties: houses, apartments, others.

I'd love to hear any comments, insights or tips about my code or its quality.
Currently live server is running on, if it's down I'm probably fiddling with something: 
http://174.138.9.241:8000/

`````````````
Front-end: Vuejs, Vuex, Vue-router, Vuetifyjs, Axios.
Back-end: Node.js, Express, Axios, Bcryptjs, Sequelize, Multer.
Database: SQLite.

If you'd like to test the app feel free to clone.

Commands:
client => 'npm run dev' Client will be running on port 8080
server => 'npm run start' Server will be running po port 8082
Client side will be missing a config.js file with Google API key, please use your own.


Currently added:
Registration and Login systems, hashed using bcryptjs.
Authentication using jwt.
RESTful API for listings.
Mostly flashed out UI.
Simple query/search system for listings.
Google Maps API to display listings.
Tracked view counts on listings.
Bookmarking with visual display in UI.
User profile with tracked bookmarks.
New listings can now be added and updated by the user that added them.
Fully implemented multi-image upload, front and back end.
Animations, other UX features, more to add.
Protected API route with JWT verification for editing listings.


To-do list:
Expand search.
Visualise some dummy data with charts.js or D3.js.

