declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      MONGODB_URI: string;
      AUTH0_AUDIENCE: string;
      AUTH0_ISSUER_BASE_URL: string;
      CLOUDINARY_CLOUD_NAME: string;
      CLOUDIARY_API_KEY: string;
      CLOUDINARY_API_SECRET: string;
      STRIPE_API_KEY: string;
      FRONTEND_URL: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
