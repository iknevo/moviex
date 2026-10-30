# Moviex Mobile

Moviex Mobile is a React Native movie-discovery application built with Expo. It brings the Moviex experience to mobile devices with trending, upcoming, and top-rated movies, search, movie details, cast information, similar titles, and person filmographies.

## Features

- Browse trending, upcoming, and top-rated movies
- Search movies through TMDB
- Movie details with posters, ratings, release information, and overview
- Cast and crew browsing
- Similar-movie recommendations
- Person details and filmographies
- Drawer navigation and native stack navigation
- Responsive mobile layouts with NativeWind
- Loading states for remote data

## Tech stack

- React Native 0.81 and Expo 54
- TypeScript
- React Navigation drawer and native stack
- TanStack Query for server state
- Axios and TMDB REST API
- NativeWind and Tailwind CSS
- React Native Reanimated, Gesture Handler, and SVG

## Getting started

### Prerequisites

- Node.js 20 or newer
- Bun or npm
- Expo CLI through the project scripts
- Expo Go or an Android/iOS development environment

### Installation

```bash
git clone https://github.com/iknevo/moviex.git
cd moviex
bun install
bun start
```

Then scan the QR code with Expo Go, or run one of the platform-specific commands:

```bash
bun run android
bun run ios
bun run web
```

## Configuration

The TMDB API client currently uses a key defined in `lib/api.ts`. For a production or public redistribution build, move the key to a secure configuration mechanism and rotate any credential committed to a public repository.

## Available scripts

| Command | Description |
| --- | --- |
| `bun start` | Start the Expo development server |
| `bun run android` | Start on Android |
| `bun run ios` | Start on iOS |
| `bun run web` | Start the web target |
| `bun run prebuild` | Generate native projects |
| `bun run lint` | Run ESLint and Prettier checks |
| `bun run format` | Fix lint and formatting issues |

## Project structure

```text
App.tsx                  # Application entry point
navigation/              # Drawer and stack navigation
screens/                 # Home, search, movie, and person screens
components/              # Movie lists, trending sections, cast, and loading UI
hooks/api/               # TanStack Query hooks for TMDB resources
lib/api.ts               # TMDB client and image helpers
config/constants.ts      # API endpoint definitions
theme/                   # Application theme
```

## API integration

The client uses TMDB endpoints for trending, upcoming, top-rated, search, movie details, credits, similar movies, person details, and person filmographies. Poster URLs are generated from TMDB image paths at multiple sizes for different mobile layouts.

## License

No license file is currently included in the repository.
