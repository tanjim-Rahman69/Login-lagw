# SecureAuth Pro: Editorial Edition

A high-fidelity authentication system built with React, Vite, and Tailwind CSS, featuring an "Editorial Aesthetic" design theme. This project provides a secure and elegant gateway for user authentication, including Login, Signup, and Password Recovery flows.

## Features

- **Editorial Aesthetic Design**: A custom-crafted UI inspired by high-end typography and minimalist layout patterns.
- **Secure Authentication Flows**: Complete implementation of Login, Signup, and Forgot Password interfaces.
- **Responsive Dashboard**: A post-auth terminal experience for user data management.
- **Motion Animations**: Smooth transitions and micro-interactions powered by `motion`.
- **Type-Safe**: Built entirely with TypeScript for robust development.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Motion (formerly Framer Motion)
- **Routing**: React Router DOM 7

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or download the source):
   ```bash
   git clone <your-repo-url>
   cd secureauth-pro
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your API keys (if applicable):
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/components/`: Modular UI components and forms.
- `src/App.tsx`: Main routing and application logic.
- `src/index.css`: Global styles and Tailwind theme configuration.
- `metadata.json`: Application identity and permissions.

## License

This project is licensed under the Apache-2.0 License.
