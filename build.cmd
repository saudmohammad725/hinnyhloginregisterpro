@echo off
echo Starting build process...

echo Installing dependencies...
call npm ci

echo Building the project...
call npx vite build

echo Build completed successfully!
