const { faker } = require("@faker-js/faker");
const { db, admin } = require("../firebaseAdminConfig");

// Define the categories
// Define the categories and specific item types for each category
const categoryItemTypes = {
  "Furniture": ["Chair", "Sofa", "Bed", "Table", "Dresser"],
  "Electronics": ["Laptop", "Smartphone", "Headphones", "Camera", "Tablet"],
  "School Supplies": ["Notebook", "Pen", "Backpack", "Calculator", "Binder"],
  "Home Decor": ["Vase", "Lamp", "Rug", "Curtain", "Wall Art"],
  // Add other categories and their specific item types here
};

const categories = Object.keys(categoryItemTypes);

const generateFakeData = async () => {
  const listingsCollection = db.collection("listings");

  for (let i = 0; i < 100; i++) {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const itemTypes = categoryItemTypes[randomCategory];
    const randomItemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];

    const description = `Item type: ${faker.commerce.productMaterial()}, Features: ${faker.commerce.productAdjective()}`;
    const title = `${randomCategory} - ${randomItemType} - ${faker.commerce.productName()}`;


    // Generate a random price, including the possibility of being free ($0)
    const randomPrice = faker.datatype.boolean() ? 0 : faker.commerce.price(50, 500);

    // Generate a random latitude and longitude
    const latitude = faker.address.latitude();
    const longitude = faker.address.longitude();

    // Generate multiple images
    const images = Array.from({ length: 3 }, () => faker.image.urlLoremFlickr({ category: randomCategory.toLowerCase() }));

    // Generate more price history
    const priceHistory = Array.from({ length: 3 }, () => ({
      price: faker.commerce.price(50, 500),
      date: faker.date.past(),
    }));

    const fakeListing = {
      category: randomCategory,
      createdAt: faker.date.past(),
      description: description,
      images: images,
      location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
      latitude: latitude,
      longitude: longitude,
      price: randomPrice,
      priceHistory: priceHistory,
      sellerId: `/users/${faker.datatype.uuid()}`,
      studentVerification: faker.datatype.boolean(),
      title: title,
      updatedAt: faker.date.recent(),
      videos: [faker.internet.url()], // Just a generic URL, assuming there's no specific method for video URLs in faker
    };

    await listingsCollection.add(fakeListing);
  }

  console.log("Fake data generation complete");
};

generateFakeData().catch(console.error);
