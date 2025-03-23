interface IConfig {
    firebaseConfig: {
        apiKey?: string;
        authDomain?: string;
        projectId?: string;
        storageBucket?: string;
        messagingSenderId?: string;
        appId?: string;
        measurementId?: string;
    }
}

const config: IConfig = {
    firebaseConfig: {
        appId: import.meta.env.VITE_GOOGLE_APP_ID || "",
        apiKey:  import.meta.env.VITE_GOOGLE_API_KEY || "",
        projectId: import.meta.env.VITE_PROJECT_ID || "",
        measurementId: import.meta.env.VITE_MEASUREMENT_ID || ""
    },
}

export default config