var corsOptions = {
  // origin: "http://localhost:5173", // development
  origin: [
    "https://consultationdoctorpatient.vercel.app",
    "https://app.connect-health.xyz",
  ], // production
};
module.exports = corsOptions;
