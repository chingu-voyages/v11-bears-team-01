Map a Ride | Voyage-11 | https://chingu.io/ | Twitter: https://twitter.com/ChinguCollabs

<h1>Map A Ride</h1>
<p>This project was part of the Chingu's Voyage 11. It allows users to draw, save & update routes on a map. <br>The project was created with MERN stack (MongoDB, Express, React & Node) + Styled Components and bootstraped with Create-React-App.</p>
<h2>Prerequisites</h2>
<ul>
<li>A MongoDB account (Atlas or MLab).</li>
<li>A Mapbox account for using the Tiles & Directions API</li>
</ul>
<h2>Installing</h2>
<ol>
<li><p>Clone this repo.</p></li>
<li>
  <p>Install both server and client dependencies:</p>
  <code>npm install && npm run client-install</code></li>
<li>
  <p>Create and .env file & declare env variables for development:</p>
  <code>touch .env</code><br>
  <p>Env file:</p>
  <code>DATABASEURL='ENTER_DATABASEURL_HERE'</code><br>
<code>REACT_APP_MAPBOX_TOKEN=ENTER_PUBLIC_TOKEN_HERE</code>
</li>
</ol>
<h2>Development</h2>
<p>Run both server and client thanks to Concurrently package:</p>
<code>npm run dev</code>
