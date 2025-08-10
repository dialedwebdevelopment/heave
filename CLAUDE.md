# Project Overview
This is a Next.js 15 project using TypeScript, Tailwind CSS, and Zustand for state management.

# Project Structure
```
📂 webild-frontend
.
├── src/
│   ├── app/                    # App Router pages and layouts
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   ├── ui/               # Reusable UI components
│   │   └── widgets/          # Feature-specific components
│   ├── hooks/                # Custom React hooks
│   ├── stores/               # Zustand state stores
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Utility functions
│   └── constants/            # Constants and configs
└── public/                   # Static assets
    ├── images/              # Images
    ├── icons/               # Icons
    ├── videos/              # Videos
    ├── audio/               # Audio files
    └── brand/               # Brand assets
```

# Bash Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

# Code Style & Standards

## General
- Use ES modules (import/export) syntax, not CommonJS (require)
- Destructure imports when possible (e.g., `import { foo } from 'bar'`)
- NO COMMENTS in code unless explicitly requested by user
- Use TypeScript strict mode
- Prefer `const` over `let`, avoid `var`
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Avoid `any` type, use proper TypeScript types

## React/Next.js Specific
- Use function components with TypeScript interfaces/types
- Wrap components with `memo()` when appropriate for performance
- Use `"use client"` directive only when necessary
- Keep components pure and side-effect free
- Use Next.js 15 async params pattern for dynamic routes
- Prefer server components by default
- Use `next/image` for all images
- Use `next/link` for all internal navigation
- Use `next/font` for font optimization

## State Management
- Use Zustand for global state
- Access stores directly in components
- Use proper TypeScript types for store interfaces
- Implement devtools in development

## Styling
- Use Tailwind CSS for all styling
- NO inline styles unless absolutely necessary
- Follow mobile-first responsive design
- Use Tailwind's built-in animations when possible

## Component Guidelines
- Export components as default with memo when appropriate
- Use proper TypeScript interfaces for props
- Destructure props in function parameters
- Handle loading and error states properly
- Implement proper accessibility

## Performance Best Practices
- Use dynamic imports for code splitting
- Implement proper image optimization
- Use React.memo for expensive components
- Avoid unnecessary re-renders
- Use useCallback and useMemo appropriately

# Workflow

## Before Starting
1. Understand the existing code patterns
2. Check for similar components/utilities before creating new ones
3. Review the types and interfaces

## During Development
1. Follow existing patterns and conventions
2. Maintain consistent code style
3. Use proper TypeScript types
4. Handle edge cases and errors

## After Changes
1. Run `npm run typecheck` to ensure no type errors
2. Run `npm run lint` to check for linting issues
3. Test the changes in the browser
4. Verify responsive behavior

# Important Project-Specific Notes
- Always use absolute imports (e.g., `@/components/...`)
- Follow the existing animation patterns with AnimationContainer
- Use the established button patterns and hooks
- Maintain consistency with existing UI components
- Always handle loading states for async operations

# Common Patterns

## API/Data Fetching
- Use async/await syntax
- Handle errors properly with try/catch
- Show loading states during fetch
- Cache data when appropriate

## Forms
- Use controlled components
- Validate input on client side
- Show proper error messages
- Handle submit states

## Navigation
- Use Next.js router for programmatic navigation
- Handle loading states during navigation
- Preserve scroll position when needed

# Security
- Never expose API keys or secrets
- Validate and sanitize user input
- Use HTTPS for external requests
- Implement proper authentication checks