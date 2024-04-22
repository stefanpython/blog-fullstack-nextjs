# Next.js Blog Project

Welcome to our Next.js blog project! This application allows users to read, create, edit, and delete articles. Admin users have additional privileges such as adding, editing, and deleting articles, as well as managing comments.

## Features

- View posted articles
- Click on articles to view their details separately
- Login as admin to access additional functionalities
- Add new articles
- Edit existing articles
- Delete articles
- Leave comments as an unlogged-in user
- Delete comments (admin only)

## Technologies Used

- Next.js
- MongoDB
- [UploadThing](https://uploadthing.com/) (Third-party API for hosting images)
- NextAuth.js (For authentication)

## Environment Variables

Before running the application, make sure to set up the following environment variables:

- \`MONGODB_URI\`: MongoDB connection URI
- \`UPLOADTHING_SECRET\`: Secret key for UploadThing API
- \`UPLOADTHING_APP_ID\`: Application ID for UploadThing API
- \`NEXTAUTH_SECRET\`: Secret key for NextAuth.js
- \`NEXTAUTH_URL\`: URL for NextAuth.js

## Getting Started

1. Clone the repository:

   \`\`\`bash
   git clone <repository-url>
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   cd nextjs-blog
   npm install
   \`\`\`

3. Set up environment variables:

   Create a \`.env.local\` file in the root directory and add the following variables:

   \`\`\`
   MONGODB_URI=<your-mongodb-uri>
   UPLOADTHING_SECRET=<your-uploadthing-secret>
   UPLOADTHING_APP_ID=<your-uploadthing-app-id>
   NEXTAUTH_SECRET=<your-nextauth-secret>
   NEXTAUTH_URL=<your-nextauth-url>
   \`\`\`

4. Run the development server:

   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Deployment

To deploy the application, follow the deployment instructions for Next.js applications. Ensure that you set up environment variables in your production environment as well.
