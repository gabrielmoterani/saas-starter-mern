import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Next.js Subscription Starter',
    version: '0.1.0',
  },
})
