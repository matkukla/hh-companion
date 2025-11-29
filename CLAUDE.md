# CLAUDE.md - HH Companion Development Guide

## Project Overview

**HH Companion** is a React Native mobile application built with Expo that simplifies household organization. The app provides features for managing shopping lists, chores, budgets, contact lists, and schedules.

- **Repository**: matkukla/hh-companion
- **Version**: 1.0.0
- **Main Language**: TypeScript (strict mode)
- **Framework**: React Native 0.73.6 with Expo SDK 51
- **Navigation**: Expo Router v3 (file-based routing)

## Tech Stack

### Core Dependencies
- **React**: 18.2.0
- **React Native**: 0.73.6
- **Expo**: ^51.0.31
- **Expo Router**: ^3.5.23 (file-based routing system)
- **React Navigation**: v6 (native-stack)
- **TypeScript**: ^5.1.3

### UI & Styling
- React Native StyleSheet (no external styling libraries)
- Custom component system with theming support
- Light/Dark mode support
- @expo/vector-icons for icons

### Testing
- **Jest**: ^29.2.1
- **Jest-Expo**: ~50.0.4
- **Test Command**: `npm test` (runs with --watchAll)

## Project Structure

```
/hh-companion
├── app/                      # Expo Router screens (file-based routing)
│   ├── _layout.tsx          # Root layout with Stack navigation
│   ├── MainMenu.tsx         # Main menu/home screen
│   ├── ShoppingList.tsx     # Shopping list feature
│   ├── Chores.tsx           # Chores management
│   ├── ChoreSelection.tsx   # Chore selection screen
│   ├── ChecklistScreen.tsx  # Generic checklist screen
│   ├── +html.tsx            # Custom HTML wrapper
│   └── +not-found.tsx       # 404 screen
├── components/              # Reusable components
│   ├── Task.tsx            # Task item component
│   ├── StyledButton.tsx    # Custom styled button
│   ├── Themed.tsx          # Theme-aware Text/View components
│   ├── StyledText.tsx      # Styled text component
│   ├── EditScreenInfo.tsx  # Info component
│   ├── ExternalLink.tsx    # External link component
│   ├── useColorScheme.ts   # Color scheme hook
│   ├── useClientOnlyValue.ts # Client-only value hook
│   └── __tests__/          # Component tests
├── constants/              # App constants
│   └── Colors.ts          # Color scheme definitions
├── assets/                # Static assets
│   ├── images/           # App images and icons
│   │   ├── SPO_Logo.png  # Main logo
│   │   ├── icon.png      # App icon
│   │   ├── splash.png    # Splash screen
│   │   └── ...
│   └── fonts/            # Custom fonts
│       └── SpaceMono-Regular.ttf
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── babel.config.js       # Babel configuration
└── .gitignore           # Git ignore rules
```

## Architecture & Patterns

### Routing System
- Uses **Expo Router** (file-based routing)
- Routes are defined by file structure in `/app` directory
- Initial route set to `MainMenu` in `_layout.tsx:16`
- Stack navigation configured in `RootLayoutNav` function

### Navigation Flow
```
MainMenu (initial) →
  ├── /ShoppingList
  ├── /Chores
  ├── /Budget (not yet implemented)
  ├── /ContactList (not yet implemented)
  └── /Schedule (not yet implemented)
```

### Theming System
- Automatic light/dark mode support
- Theme defined in `constants/Colors.ts:1`
- `useColorScheme` hook for detecting system theme
- `Themed.tsx` provides theme-aware `<Text>` and `<View>` components
- `useThemeColor` utility for accessing theme colors

### Component Patterns

#### Custom Button Pattern
```typescript
// StyledButton.tsx:4
<StyledButton
  title="Button Text"
  onPress={() => router.push('/Route')}
/>
```

**Styling**:
- Background: #f04763 (pink/red)
- Oval shape with 30px border radius
- White bold text, 16px, Sofia font family
- 10px vertical margin

#### Task Component Pattern
```typescript
// Task.tsx:5
<Task text="Task description" />
```

**Visual Design**:
- White background with rounded corners
- Blue square indicator (#55BCF6, 40% opacity)
- Circular status indicator on the right
- 15px padding, 20px bottom margin

### TypeScript Configuration
- Strict mode enabled (`tsconfig.json:4`)
- Path alias: `@/*` maps to project root (`tsconfig.json:6-8`)
- Usage example: `import Colors from '@/constants/Colors'`

## Development Workflow

### Setup & Installation
```bash
npm install                  # Install dependencies
```

### Running the App
```bash
npm start                    # Start Expo dev server
npm run android             # Run on Android emulator/device
npm run ios                 # Run on iOS simulator/device
npm run web                 # Run in web browser
```

### Testing
```bash
npm test                    # Run Jest in watch mode
```

### Building for Production
```bash
# Expo build commands (use Expo documentation for latest)
```

## Coding Conventions

### File Naming
- **Screens**: PascalCase (e.g., `MainMenu.tsx`, `ShoppingList.tsx`)
- **Components**: PascalCase (e.g., `StyledButton.tsx`, `Task.tsx`)
- **Utilities**: camelCase (e.g., `useColorScheme.ts`)
- **Constants**: PascalCase (e.g., `Colors.ts`)
- **Special files**: lowercase with + prefix (e.g., `+html.tsx`, `+not-found.tsx`)

### Import Order
1. React imports
2. React Native core imports
3. Third-party libraries
4. Local components (using `@/` alias)
5. Utilities and hooks
6. Types and interfaces

Example from `MainMenu.tsx:1-4`:
```typescript
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StyledButton } from '../components/StyledButton';
import { useRouter } from 'expo-router';
```

### Component Structure
1. Imports
2. Type definitions (if any)
3. Component function
4. Styles (StyleSheet)
5. Export statement

### Styling Guidelines
- Use React Native `StyleSheet.create()` for all styles
- Define styles at the bottom of the file
- Use flexbox for layouts
- Follow existing color scheme from `constants/Colors.ts`
- Primary brand color: #f04763 (buttons)
- Task accent color: #55BCF6 (blue)

### TypeScript Conventions
- Use TypeScript for all new files (`.tsx` or `.ts`)
- Define prop types for all components
- Leverage strict mode type checking
- Use `@/` path alias for imports from project root

## Common Tasks for AI Assistants

### Adding a New Screen
1. Create new file in `/app` directory (e.g., `NewScreen.tsx`)
2. Add screen to Stack in `app/_layout.tsx:51-58`
3. Add navigation button in `MainMenu.tsx`
4. Follow existing screen patterns

### Creating a New Component
1. Create file in `/components` directory
2. Use TypeScript with proper prop types
3. Follow existing component patterns (Task, StyledButton)
4. Define styles with StyleSheet.create()
5. Consider theme support using `Themed.tsx` utilities

### Modifying Styles
- Main button style: `components/StyledButton.tsx:12-28`
- Task component style: `components/Task.tsx:18-53`
- Color scheme: `constants/Colors.ts`
- Don't hardcode colors; use the Colors constant

### Working with Navigation
```typescript
// Import router
import { useRouter } from 'expo-router';

// In component
const router = useRouter();

// Navigate
router.push('/ScreenName');
router.back();
```

### Adding Tests
1. Create test file in `components/__tests__/`
2. Use `.js` or `.tsx` extension
3. Follow Jest + React Test Renderer patterns
4. Reference: `components/__tests__/StyledText-test.js`

## Key Files Reference

### Configuration Files
- `app.json:1` - Expo app configuration (name, slug, icon, splash)
- `tsconfig.json:1` - TypeScript config (strict mode, path aliases)
- `babel.config.js:1` - Babel config (expo preset)
- `package.json:1` - Dependencies and scripts

### Layout & Navigation
- `app/_layout.tsx:22` - Root layout component with font loading
- `app/_layout.tsx:46` - Navigation stack configuration
- `app/_layout.tsx:16` - Initial route setting

### Theming
- `constants/Colors.ts:1` - Color definitions for light/dark themes
- `components/Themed.tsx:19` - `useThemeColor` hook
- `components/useColorScheme.ts:1` - Color scheme detection hook

### Core Components
- `components/StyledButton.tsx:4` - Reusable button component
- `components/Task.tsx:5` - Task list item component
- `components/Themed.tsx:33` - Theme-aware Text component
- `components/Themed.tsx:40` - Theme-aware View component

## Git Workflow

### Branch Strategy
- Work on feature branches prefixed with `claude/`
- Branch naming: `claude/claude-md-<session-id>`
- Never push directly to main/master

### Commit Guidelines
- Write clear, descriptive commit messages
- Focus on "why" rather than "what"
- Stage relevant files only
- Don't commit secrets (.env, credentials, etc.)

### Pull Requests
- Create PRs with comprehensive summaries
- Include test plan in PR description
- Reference related issues

## Platform-Specific Notes

### Expo Configuration (`app.json`)
- **iOS**: Tablet support enabled (`app.json:19`)
- **Android**: Adaptive icon configured (`app.json:22-25`)
- **Web**: Metro bundler, static output (`app.json:28-30`)
- **Typed routes** experiment enabled (`app.json:36`)

### Asset Paths
- Icon: `./assets/images/icon.png`
- Splash: `./assets/images/splash.png`
- Logo: `./assets/images/SPO_Logo.png`
- Adaptive icon: `./assets/images/adaptive-icon.png`

## Planned Features (Not Yet Implemented)

Based on `MainMenu.tsx:24-34`, the following screens are referenced but not yet fully implemented:
- **Budget** - Budget tracking and management
- **ContactList** - Household contact management
- **Schedule** - Calendar and scheduling

When implementing these features:
1. Create the screen file in `/app`
2. Implement basic functionality
3. Ensure consistent styling with existing screens
4. Add appropriate navigation

## Known Issues & Quirks

### Font Loading
- SpaceMono font import is commented out in `_layout.tsx:24`
- Currently uses FontAwesome fonts only
- Sofia font referenced in StyledButton but may not be loaded

### Navigation
- Some screens referenced in `_layout.tsx:55-57` may not exist yet (Budget, ContactList, Schedule)
- This is expected for planned features

## Best Practices for AI Assistants

### Before Making Changes
1. **Always read files first** - Never propose changes without reading the current code
2. **Check existing patterns** - Follow established conventions in the codebase
3. **Understand the context** - Read related files to understand how components interact
4. **Verify imports** - Ensure all imports use correct paths (prefer `@/` alias)

### When Adding Features
1. **Keep it simple** - Don't over-engineer; match existing complexity level
2. **Maintain consistency** - Use same styling patterns, component structure
3. **Test your changes** - Ensure TypeScript compiles without errors
4. **Update documentation** - If adding significant features, update this file

### Code Quality
1. **TypeScript strict mode** - All code must pass strict type checking
2. **No unused code** - Remove unused imports, variables, or commented code
3. **Proper error handling** - Handle errors at appropriate boundaries
4. **Security** - Avoid XSS, injection vulnerabilities, validate external inputs

### Common Mistakes to Avoid
1. Don't add dependencies without checking if functionality exists
2. Don't create new styling patterns; use existing StyleSheet approach
3. Don't ignore TypeScript errors; fix them properly
4. Don't hardcode values that should be in constants
5. Don't skip reading files before editing them

## Dependencies to Know

### Critical Dependencies
- `expo-router` - File-based routing (read docs for navigation)
- `react-navigation` - Underlying navigation library
- `expo-font` - Font loading system
- `expo-splash-screen` - Splash screen management

### Utility Dependencies
- `@expo/vector-icons` - Icon library (FontAwesome, etc.)
- `expo-checkbox` - Checkbox component
- `expo-status-bar` - Status bar control
- `expo-linking` - Deep linking support

## Useful Commands

```bash
# Development
npm start                    # Start dev server
npm run android             # Android dev
npm run ios                 # iOS dev
npm run web                 # Web dev

# Testing
npm test                    # Run tests in watch mode

# Troubleshooting
rm -rf node_modules package-lock.json
npm install                 # Clean install
npx expo start -c           # Clear cache and start
```

## Resources & Documentation

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Docs](https://expo.github.io/router/docs/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Docs](https://reactnative.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Questions?

When uncertain about:
- **Routing**: Check `app/_layout.tsx` and Expo Router docs
- **Styling**: Reference `components/StyledButton.tsx` and `components/Task.tsx`
- **Theming**: Review `constants/Colors.ts` and `components/Themed.tsx`
- **Navigation**: See `MainMenu.tsx` for router usage examples
- **Configuration**: Check `app.json` and `tsconfig.json`

---

**Last Updated**: 2025-11-29
**Maintainer**: AI Assistant Analysis
**Status**: Active Development
