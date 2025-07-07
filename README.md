# Date Developer Web

A modern social networking web application built with React, Redux Toolkit, and TailwindCSS. This application allows users to discover potential matches, send connection requests, manage their profiles, and interact with other users in a clean and intuitive interface.

## ✨ Features

- **User Authentication**: Secure login and signup functionality
- **User Feed**: Browse through potential matches and user profiles
- **Profile Management**: View and edit user profiles
- **Connection System**: Send and receive connection requests
- **Request Management**: Handle incoming and outgoing connection requests
- **Responsive Design**: Modern UI built with TailwindCSS and DaisyUI
- **State Management**: Efficient state management using Redux Toolkit

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **State Management**: Redux Toolkit 2.8.2
- **Routing**: React Router 7.6.3
- **Styling**: TailwindCSS 4.1.11 + DaisyUI 5.0.43
- **HTTP Client**: Axios 1.10.0
- **Linting**: ESLint 9.29.0

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Body.jsx        # Main layout component
│   ├── Feed.jsx        # User feed/discovery page
│   ├── Login.jsx       # Authentication component
│   ├── Profile.jsx     # User profile component
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── UserCard.jsx    # User profile card component
│   ├── Connections.jsx # User connections page
│   ├── Requests.jsx    # Connection requests page
│   └── EditProfile.jsx # Profile editing component
├── redux/              # Redux store and slices
│   ├── store/
│   │   └── store.js    # Redux store configuration
│   └── slices/         # Redux slices
│       ├── userSlice.js
│       ├── feedSlice.js
│       ├── connectionSlice.js
│       └── requestSlice.js
├── utils/
│   └── constants.js    # App constants and configurations
├── App.jsx             # Main app component with routing
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd date-developer-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   - Ensure your backend API is running on `http://localhost:4000/`
   - Update the `BASE_URL` in `src/utils/constants.js` if needed

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (default Vite port)

## 📜 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build the app for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check for code issues

## 🔗 API Integration

This frontend application communicates with a backend API running on `http://localhost:4000/`. The main API endpoints include:

- **Authentication**: `/auth/login`, `/auth/signup`
- **User Feed**: `/user/feed`
- **Connection Requests**: `/request/send/:status/:userId`
- **User Management**: Various user-related endpoints

## 🎨 UI Components

The application uses DaisyUI components built on top of TailwindCSS for a consistent and modern design system. Key UI patterns include:

- **Cards**: User profile cards with photos and information
- **Buttons**: Primary and secondary action buttons
- **Forms**: Login and profile editing forms
- **Navigation**: Responsive navbar and routing

## 🔧 Development

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn package manager
- Backend API server running on port 4000

### Code Style
- ESLint configuration for React best practices
- Consistent component structure and naming
- Redux Toolkit patterns for state management

### State Management
The application uses Redux Toolkit with the following slices:
- **userSlice**: User authentication and profile data
- **feedSlice**: User discovery feed
- **connectionSlice**: User connections
- **requestSlice**: Connection requests

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service (Vercel, Netlify, etc.)

3. **Update API URL** in production environment if different from localhost

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help with setup, please feel free to open an issue or reach out to the development team.

---

Built with ❤️ using React, Redux, and TailwindCSS
