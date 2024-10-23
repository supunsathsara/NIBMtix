# NIBMTix - Digital Ticketing Platform

**NIBMTix** is an innovative digital ticketing platform built to simplify the event management and ticketing process for events at NIBM. This platform offers a seamless experience for both event organizers and attendees, providing features such as event creation, secure payments, email notifications, and a user-friendly dashboard.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Event Management**: Organizers can create and manage events with ease.
- **Secure Payments**: Integrated with **PayHere** for secure and reliable payment processing.
- **Email Notifications**: Powered by **Resend** for sending automatic event confirmations and reminders.
- **User Dashboard**: Attendees can view their purchased tickets, upcoming events, and event history.
- **Responsive Design**: Optimized for web and mobile experiences.
- **Fast Performance**: Leveraging **Next.js 14** and **React Server Components** for fast page load times.
- **Backend**: Powered by **Supabase** for secure data storage and management.
- **Mobile Support**: The app is also available as a mobile app built with **React Native Expo** and **NativeWind**.

## Technology Stack

### Web Version

- **Frontend**: Next.js 14, React Server Components, shadcn, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Payments**: PayHere
- **Emails**: Resend (for automated email notifications)
- **Styling**: Tailwind CSS, shadcn

### Mobile App

- **Framework**: React Native Expo
- **Styling**: NativeWind (Tailwind CSS for React Native)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database (e.g., Supabase setup)

### Clone the Repository

```
git clone https://github.com/supunsathsara/nibmtix.git
cd nibmtix
```

### Install Dependencies

For the web app:

```
npm install
```

## Environment Variables

You will need to create a `.env.local` file in the root directory for the web app and set up your environment variables.

```
NODE_ENV=development
POSTGRESSDB_PASSWORD=your_password
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_PAYHERE_MERCHANT_ID=
PAYHERE_MERCHANT_SECRET=
NEXT_PUBLIC_PAYHERE_NOTIFY_URL=
NEXT_PUBLIC_PAYHERE_SANDBOX=true
NEXT_PUBLIC_PAYHERE_RETURN_URL=
NEXT_PUBLIC_PAYHERE_CANCEL_URL=
SUPABASE_SERVICE_ROLE_KEY=
VERCEL_URL=
RESEND_API_KEY=
```

## Usage

### Running the Web App

To start the development server:

```
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build for Production

To build the web app for production:

```
npm run build
```

This will create an optimized build of the project in the `.next` directory.

## Contributing

We welcome contributions from the community. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
