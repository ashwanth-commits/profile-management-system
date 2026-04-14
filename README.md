# Profile Management System

A modern, full-stack web application for managing user profiles with a professional UI and comprehensive CRUD operations. Built with React, TypeScript, Redux Toolkit, Material-UI, and Node.js.

![Profile Manager](https://img.shields.io/badge/Profile-Manager-purple?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

## 🚀 Features

### ✨ Core Functionality
- **Complete CRUD Operations**: Create, Read, Update, Delete profiles
- **Advanced Filtering & Sorting**: Search, filter by age/date, sort by multiple fields
- **Dual View Modes**: Table view and Grid view for profile display
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Validation**: Strict form validation with immediate feedback

### 🎨 Professional UI/UX
- **Modern Oval Navbar**: Beautiful gradient design with smooth animations
- **Custom Color Theme**: Professional purple gradient theme (#8D5F8C)
- **Google Fonts Integration**: Inter and Roboto fonts for enhanced typography
- **Material-UI Components**: Consistent, accessible design system
- **Interactive Elements**: Hover effects, transitions, and micro-animations

### 🔧 Technical Features
- **Redux State Management**: Global state management for profiles and API status
- **TypeScript**: Full type safety and better development experience
- **API Integration**: RESTful backend with comprehensive error handling
- **Local Storage**: Profile persistence across sessions
- **Form Validation**: Strict validation for name, email, and age fields

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd profile-management-system
```

### 2. Install Frontend Dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### 3. Environment Configuration
The project uses environment variables for configuration. No additional setup is required as it uses default configurations.

### 4. Start the Development Servers

#### Option A: Start Both Servers Simultaneously
```bash
# From the root directory
npm run dev
```

#### Option B: Start Servers Separately

**Terminal 1 - Backend Server:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend Server:**
```bash
npm start
```

### 5. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🏗️ Project Structure

```
profile-management-system/
├── public/                 # Static files
│   ├── index.html         # Main HTML template
│   └── manifest.json      # PWA manifest
├── src/                   # Frontend source code
│   ├── components/        # Reusable components
│   │   └── Layout/       # Layout components (Navbar, Footer)
│   ├── pages/            # Page components
│   │   ├── ProfileForm.tsx      # Profile creation/editing
│   │   ├── ProfileDisplay.tsx   # Profile listing and management
│   │   └── NotFound.tsx         # 404 page
│   ├── store/            # Redux store configuration
│   │   ├── slices/       # Redux slices
│   │   └── store.ts      # Store configuration
│   ├── services/         # API services
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   ├── theme/            # Material-UI theme configuration
│   └── config/           # Application configuration
├── backend/              # Backend server
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── config.js        # Backend configuration
│   └── server.js        # Express server
├── scripts/             # Utility scripts
└── README.md           # This file
```

## 🎯 Usage Guide

### Creating a Profile
1. Navigate to "Add Profile" from the navbar
2. Fill in the required information:
   - **Name**: Full name (first and last name required)
   - **Email**: Valid email address
   - **Age**: Age between 1-120 years
3. Click "Save Profile" to create the profile

### Managing Profiles
1. Navigate to "All Profiles" to view all created profiles
2. Use the search bar to find specific profiles
3. Toggle between Table and Grid views
4. Use advanced filters for age range and date filtering
5. Click "View" to see detailed profile information
6. Use "Edit" to modify profile details
7. Use "Delete" to remove profiles

### Navigation Features
- **Oval Navbar**: Modern design with gradient background
- **User Display**: Shows first and last name separately
- **Active Status**: Visual indicator of user status
- **Quick Actions**: Easy access to all features

## 🔧 Technical Approach

### Architecture Decisions

#### 1. **Redux Toolkit for State Management**
- **Global State**: Centralized state management for profiles and API status
- **Async Actions**: Handled with `createAsyncThunk` for API calls
- **Normalized Data**: Efficient state updates and caching
- **Type Safety**: Full TypeScript integration

#### 2. **Material-UI Design System**
- **Consistent Theming**: Custom theme with professional color palette
- **Responsive Components**: Built-in responsive design
- **Accessibility**: WCAG compliant components
- **Custom Styling**: Enhanced with custom CSS-in-JS

#### 3. **TypeScript Integration**
- **Type Safety**: Comprehensive type definitions
- **Interface Design**: Well-defined data structures
- **Error Prevention**: Compile-time error checking
- **Developer Experience**: Better IDE support and autocompletion

#### 4. **API Design**
- **RESTful Architecture**: Standard HTTP methods and status codes
- **Error Handling**: Comprehensive error responses
- **Data Validation**: Server-side validation
- **Response Format**: Consistent API response structure

### Key Optimizations

#### 1. **Performance Optimizations**
- **React.memo**: Prevent unnecessary re-renders
- **useCallback**: Optimize event handlers
- **Lazy Loading**: Code splitting for better performance
- **Efficient Filtering**: Client-side filtering for better UX

#### 2. **User Experience Enhancements**
- **Real-time Validation**: Immediate feedback on form inputs
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages
- **Responsive Design**: Mobile-first approach

#### 3. **Data Management**
- **Local Storage**: Profile persistence across sessions
- **State Synchronization**: Consistent data across components
- **Optimistic Updates**: Immediate UI updates with rollback capability
- **Cache Management**: Efficient data caching strategies

#### 4. **Security Measures**
- **Input Validation**: Both client and server-side validation
- **XSS Prevention**: Sanitized user inputs
- **CSRF Protection**: Secure form submissions
- **Data Sanitization**: Clean and validate all user data

## 🎨 Design System

### Color Palette
- **Primary**: #8D5F8C (Purple)
- **Secondary**: #B085B0 (Light Purple)
- **Accent**: #6B4A6B (Dark Purple)
- **Background**: Gradient from #8D5F8C to #B085B0

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Secondary Font**: Roboto (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700

### Component Styling
- **Border Radius**: 8px for cards, 24px for navbar
- **Shadows**: Layered shadow system for depth
- **Transitions**: 0.3s ease for smooth animations
- **Spacing**: 8px grid system for consistent spacing

## 🔍 Validation Rules

### Name Validation
- **Required**: Must be provided
- **Length**: 2-50 characters
- **Format**: Letters, spaces, hyphens, apostrophes, periods only
- **Structure**: Must include first and last name

### Email Validation
- **Required**: Must be provided
- **Format**: RFC-compliant email format
- **Length**: Maximum 254 characters
- **Domain**: Valid domain with proper TLD

### Age Validation
- **Required**: Must be provided
- **Range**: 1-120 years
- **Type**: Whole numbers only
- **Format**: Integer validation

## 🚀 Deployment

For detailed step-by-step deployment instructions, see our comprehensive [**DEPLOYMENT_GUIDE.md**](./DEPLOYMENT_GUIDE.md).

### Quick Deployment Overview

#### Frontend Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

#### Backend Deployment (Heroku)
```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create and deploy
heroku create your-app-name
git push heroku main
```

#### Database Setup (MongoDB Atlas)
1. Create MongoDB Atlas account
2. Create cluster and database
3. Configure network access
4. Get connection string
5. Set environment variables

**📖 For complete deployment instructions with troubleshooting, security considerations, and multiple platform options, please refer to the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).**

## 🧪 Testing

### Running Tests
```bash
# Frontend tests
npm test

# Backend tests
cd backend
npm test
```

### Test Coverage
- **Unit Tests**: Component and utility function tests
- **Integration Tests**: API endpoint tests
- **E2E Tests**: Full user workflow tests

## 📚 API Documentation

### Endpoints

#### Profiles
- `GET /api/profiles` - Get all profiles
- `POST /api/profiles` - Create new profile
- `PUT /api/profiles/:email` - Update profile
- `DELETE /api/profiles/:email` - Delete profile
- `GET /api/profiles/:email` - Get profile by email

### Response Format
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ashwanth K**
- GitHub: https://github.com/ashwanth-commits

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- Redux Toolkit team for simplified state management
- React team for the amazing framework
- Google Fonts for beautiful typography

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/https://github.com/ashwanth-commits/profile-management-system/issues/issues) page
2. Create a new issue with detailed description
3. Contact the author directly

---

**Made with ❤️ by Kulla Ashwanth**
