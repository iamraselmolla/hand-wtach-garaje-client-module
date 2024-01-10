# HandWatchGarage: MERN E-commerce Platform

## User Roles
- **Admin:**
  - Access comprehensive user, item, and reported item information.
  - Manage user accounts, item listings, and reported issues.

- **Buyer:**
  - Purchase products securely using Stripe.
  - Add items to the cart and proceed with payment.
  - Report issues on items to the admin.
  - Register as a buyer or seller through a registration form.
  - Default Google login is counted as a buyer.

- **Seller:**
  - Add items for sale, view them in the dashboard.
  - Choose items for auction, allowing users to bid.
  - Participate in auctions, with the highest bidder winning.
  - Register as a seller or buyer through the registration form.
  - Default Google login is counted as a buyer.

## Tech Stack
- MERN Stack - MongoDB, Express.js, React, Node.js.
- Stripe for secure payment transactions.
- Google login for convenient buyer onboarding.
- Auction feature for sellers using React and Express.
- User-friendly dashboard powered by React.

## Getting Started
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up MongoDB connection.
4. Configure environment variables for secure integrations.
5. Run the application with `npm run dev`.

## Note
Ensure proper setup of MongoDB, dependencies, and environment variables. Comprehensive documentation guides users through the setup for a seamless experience.
