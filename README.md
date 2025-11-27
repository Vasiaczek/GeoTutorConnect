# GeoTutorConnect - Wasiak Tutoring

A professional geography tutoring website built with SvelteKit and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching introduction with call-to-action
- **Services Section**: Display of tutoring services (Exam Preparation, IA/EE Help, Syllabus Practice)
- **Consultation Section**: Reviews from past students and benefits of tutoring
- **About Section**: Tutor's credentials and background
- **Contact Section**: Contact form with Web3Forms integration
- **Service Booking**: Dedicated booking page for each service

## Tech Stack

- **Frontend**: SvelteKit 2, Svelte 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide Svelte
- **Form Validation**: Zod
- **Form Submission**: Web3Forms API
- **Deployment**: Vercel (via @sveltejs/adapter-vercel)

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel using `@sveltejs/adapter-vercel`. Simply connect your GitHub repository to Vercel for automatic deployments.

## Environment Variables

- `VITE_WEB3FORMS_ACCESS_KEY`: (Optional) Your Web3Forms access key for form submissions
