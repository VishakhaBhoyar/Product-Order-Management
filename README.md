# <---------- 📂 Product Order Management API ---------->

A Node.js + Express.js backend application for managing customer product orders, 
with secure admin authentication, image uploads, field validation, and robust error handling.

# <---------- ✅ Features ---------->

- Admin JWT Authentication
- Customer order placement with:
- File upload (JPG/PNG, max 2MB)
- Validation for all fields
- Order data stored in MySQL
- Secure endpoints with middleware
- API tested via Postman
- .env configuration for environment variables

# <----------  📦 Technologies Used ---------->

- Node.js
- Express.js
- MySQL2
- jsonwebtoken
- dotenv
- multer
- express-validator
- cors
- body-parser


# <----------  Folders & Files Structure ---------->

product-order-api/
│
├── routes/                       // Api endpoints are declared
│   ├── orderRoutes.js
│   └── adminRoutes.js
│
├── controllers/                  // Handles request/response
│   ├── orderController.js
│   └── adminController.js
│
├── services/                     // Business Logic
│   ├── orderService.js
│   └── adminService.js
│
├── models/                       // SQL Queries to interact with database
│   ├── orderModel.js
│   └── adminModel.js
│
├── middlewares/                  // Middlewares as auth, validation for file upload, error handling
│   ├── auth.js
│   ├── fileUploadValidator.js
│   └── validateRequest.js
│
├── helpers/                       // Reusable utility functions for JWT, validations
│   └── jwtHelper.js
│
├── config/                        // Database Configuration
│   └── db.js
│
├── uploads/                       // Product images are uploaded here
│
├── .env                           // Environment variables
├── app.js                         // Main app entry point
├── package.json                   
└── README.md    

# <----------  ⚙️ Installation & Setup ---------->

# 1. Clone the repository
git clone https://github.com/your-username/product-order-api.git

# 2. Navigate to the project directory
cd product-order-api

# 3. Install dependencies
npm install

# <---------- 📜 Environment Variables ---------->

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=product_order_db
JWT_SECRET=jwt_secret_key

# <---------- Running the Server ---------->

# Start server with nodemon
npm nodemon app.js

# Or start without nodemon
node app.js

# Or run the command
npm run dev

# <---------- The server will start on:📍 http://localhost:5000 ---------->


# <---------- 🔐 Authentication ---------->

Protected routes require JWT tokens

Login endpoint issues a token using jsonwebtoken

Middleware auth.js validates the token


# <---------- Testing API with Postman ---------->

Test the API using this Postman Collection link below : 
"https://vishakhabhoyar-4267013.postman.co/workspace/Vishakha-Bhoyar's-Workspace~e33a648c-b302-4975-8a7d-a1f7684937b3/collection/44216754-643f41fc-ad85-42f6-9ab1-8abdb63d6ee5?action=share&creator=44216754"


# <---------- 🛠️ Dependencies Used ---------->

"dependencies": {
    "bcryptjs": "^3.0.2",
    "body-parser": "^2.2.0",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "express-validator": "^7.2.1",
    "jsonwebtoken": "^9.0.2",
    "multer": "^1.4.5-lts.2",
    "mysql2": "^3.14.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }


# <----------  ✍️ Author ---------->

Made with ❤️ by Vishakha Bhoyar