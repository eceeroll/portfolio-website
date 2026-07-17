import rateLimit from "express-rate-limit";

const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika

  max: 3,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    error: "Too many contact requests. Please try again later.",
  },
});

export default contactRateLimit;
