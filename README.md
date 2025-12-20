# Dental Corner - Feedback Hub

A feedback collection system for Dental Corner clinic, allowing patients to rate their experience and leave structured feedback.

## Features

- **Multilingual Support**: Arabic and French interface.
- **Dynamic Rating System**: Directs positive reviews to Google Maps.
- **Feedback Form**: Collects detailed feedback for improvements.
- **Responsive Design**: Works perfectly on mobile and desktop devices.
- **Medical Branding**: Customized for Dr. Billal Darrab's clinic in Saïda.

## Tech Stack

- **Vite** - Build Tool
- **React** - Frontend Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component Library
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```
   Then edit `.env` and add your Web3Forms access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

5. Build for production:
   ```sh
   npm run build
   ```

## Configuration

- **Environment Variables**: Copy `.env.example` to `.env` and add your Web3Forms access key.
- **Clinic Details**: Managed in `src/translations/ar.ts` and `src/translations/fr.ts`.
- **Review Link**: Configurable in `src/pages/Index.tsx`.
- **Form Submissions**: Uses Web3Forms API with access key from `.env` file.

---
© 2025 Dental Corner - Dr. Billal Darrab. All Rights Reserved.
