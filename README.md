# Mongoose Sandbox for MongoDB 🛠️  

This repository provides a testbed sandbox to experiment with **Mongoose** for MongoDB. It allows you to set up, configure, and test different Mongoose schemas, queries, and settings in a controlled environment.

---

## Features ✨  

- Create and test custom Mongoose schemas and models.  
- Experiment with advanced MongoDB queries and relationships.  
- Test different configurations and settings for MongoDB collections.  
- Ideal for learning and prototyping Mongoose-based applications.  

---

## Prerequisites 🛠️  

- **Node.js** (14+ recommended).  
- **MongoDB** installed locally or accessible via a cloud service.  

Install the required npm packages:  
npm install mongoose  

---

## Installation  

1. Clone the repository:  
git clone https://github.com/your-username/mongoose-sandbox.git  
cd mongoose-sandbox  

2. Install the dependencies:  
npm install  

---

## Usage 🔧  

1. Start your MongoDB instance:  
Ensure your MongoDB server is running locally or provide a connection string to a remote instance.  

2. Configure the connection in the `config.js` file:  
```javascript
module.exports = {
  mongoURI: "mongodb://localhost:27017/sandbox", // Replace with your MongoDB URI
};
