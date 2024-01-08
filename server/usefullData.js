require('dotenv').config();

module.exports = usefullData = {

    // mongoDB
    MONGO_URL: process.env.MONGO_URL,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    PORT_NUMBER: process.env.PORT_NUMBER,
    DOMAIN: process.env.DOMAIN,

    // mail
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    MAILUSER: process.env.MAILUSER,
    PSS: process.env.PSS,

    // train
    XRapidAPIKey :process.env.XRapidAPIKey,
    XRapidAPIHost :process.env.XRapidAPIHost,

    // Stripe PaymentGatway
    StripePublickey : process.env.StripePublickey,
    StripeSecretkey: process.env.StripeSecretkey,
}