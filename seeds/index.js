if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database Connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 300; i++) {
		const random1000 = Math.floor(Math.random() * 1000);
		const price = Math.floor(Math.random() * 20) + 10;
		const camp = new Campground({
			author: "656e20f7718733d431c2e49d",
			location: `${cities[random1000].city}, ${cities[random1000].state}`,
			title: `${sample(descriptors)} ${sample(places)}`,
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum fugiat qui corrupti voluptatem non cum ut error enim, iure totam repellendus architecto dolore excepturi aperiam recusandae, porro, perspiciatis rerum.",
			price,
			geometry: {
				type: "Point",
				coordinates: [
					cities[random1000].longitude,
					cities[random1000].latitude,
				],
			},
			images: [
				{
					url: "https://res.cloudinary.com/djwevsgdw/image/upload/v1701196787/YelpCamp/campground_stock_art_fnexuy.jpg",
					filename: "YelpCamp/campground_stock_art_fnexuy.jpg",
				},
				{
					url: "https://res.cloudinary.com/djwevsgdw/image/upload/v1701197191/YelpCamp/campground_stock_art2_nmjrhy.jpg",
					filename: "YelpCamp/campground_stock_art2_nmjrhy.jpg",
				},
			],
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});
