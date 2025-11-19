# Project Overview

This project is an app called Cookie Quest. It allows users to reference and track the best cookies and where to buy them.

# Framework

- The app is built with Next.js
- The styling is done using Tailwind CSS
- The app uses React for the frontend components
- Authentication is handled using NextAuth.js with Google as the provider, and uses JWT for session management
- The app is deployed on Vercel

# Left to do

[] allow to create new cookies entry

- disallow creation for non logged in users
  [] add a shop model
  [] support FR language
  [] make the app a pwa

## forcast database schema

- User table
  - id (primary key)
  - username
  - email
  - password_hash
  - profile picture
  - created_at
  - updated_at
- Cookie table
  - id (primary key)
  - name
  - description
  - images
  - reference to shop
  - created_at
- Shop table
  - id (primary key)
  - name
  - location
  - created_at
  - updated_at

Unsure:

- relation between a user and a cookie (favorite, added, reviewed?)
- relation between a user and a shop (favorite, added, reviewed?)
