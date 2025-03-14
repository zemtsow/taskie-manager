import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import config from "@/config";

let app;

try {
    app = getApp();
} catch (error) {
    app = initializeApp(config.firebaseConfig);
}

const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export {
    analytics,
};
