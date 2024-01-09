<h1>YelpCamp</h1>
<br>
YelpCamp is a campsite review application, inspired by Yelp, that allows users to explore, review, and add campgrounds. <br>
<br>
<h2>Features</h2> 
<br>
<b>User Authentication:</b> Passport and Passport-local for user authentication. <br>
<b>Database:</b> MongoDB through Mongoose for storing campground and user data. <br>
<b>Campground Management:</b> CRUD operations for campgrounds (Create, Read, Update, Delete). <br>
<b>Image Uploads:</b> Multer and Cloudinary for handling image uploads. <br>
<b>Security:</b> Utilizes Helmet for setting HTTP headers and Express-mongo-sanitize to prevent MongoDB Operator Injection and XSS attacks. <br>
<b>Session Management:</b> Express-session for managing user sessions. <br>
<b>Data Sanitization:</b> Sanitize-html for sanitizing user input. <br>
<b>Map Integration:</b> Mapbox SDK for displaying campground locations. <br>
<br>
<h2>Dependencies</h2>
<br>
<ul>
<li>@mapbox/mapbox-sdk: ^0.15.3
<li>cloudinary: ^1.41.0
<li>connect-flash: ^0.1.1
<li>connect-mongo: ^3.2.0
<li>dotenv: ^16.3.1
<li>ejs: ^3.1.9
<li>ejs-mate: ^4.0.0
<li>express: ^4.18.2
<li>express-mongo-sanitize: ^2.2.0
<li>express-session: ^1.17.3
<li>helmet: ^7.1.0
<li>joi: ^17.11.0
<li>method-override: ^3.0.0
<li>mongoose: ^7.6.3
<li>multer: ^1.4.5-lts.1
<li>multer-storage-cloudinary: ^4.0.0
<li>node: ^18.13.0
<li>passport: ^0.6.0
<li>passport-local: ^1.0.0
<li>passport-local-mongoose: ^8.0.0
<li>sanitize-html: ^2.11.0
</ul>
<h2>Installation</h2>

1. Clone the repository.<br>
2. Install dependencies<br>
3. Set up environment variables using .env file following the provided .env.example.<br>

```
# MongoDB URL
MONGODB_URL=your_mongodb_uri_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Mapbox API Key
MAPBOX_API_KEY=your_mapbox_api_key
```

<h2>Usage</h2>
1. Run the app.js file with node <br>
2. Access the application via a web browser at http://localhost:3000/campgrounds.
