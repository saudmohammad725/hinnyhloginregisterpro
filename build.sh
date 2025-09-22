#!/bin/bash

# Build script for Vercel deployment
echo "Starting build process..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run the build
echo "Building the project..."
npx vite build

echo "Build completed successfully!"
