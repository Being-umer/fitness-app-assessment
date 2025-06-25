# Fitness App Routing Documentation

## Overview

This fitness app implements a modern, optimized routing structure using React Router DOM v7 with the following features:

- **Lazy Loading**: All components are lazy-loaded for better performance
- **Protected Routes**: Results pages are protected and require quiz completion
- **Individual Card Routes**: Each result card has its own dedicated route
- **Type Safety**: Full TypeScript support with shared types
- **Code Splitting**: Automatic code splitting for better bundle optimization

## Route Structure

### Main Routes

| Route | Component | Description | Protection |
|-------|-----------|-------------|------------|
| `/` | Redirect | Redirects to `/quiz-form` | None |
| `/quiz-form` | QuizFormPage | Quiz form for user input | None |
| `/results` | ResultsPage | All result cards with navigation | Protected |
| `/results/:cardName` | IndividualCardPage | Individual result card | Protected |
| `*` | Redirect | Catch-all redirects to `/quiz-form` | None |

### Individual Card Routes

| Route | Card Name | Description |
|-------|-----------|-------------|
| `/results/body-fat` | Body Fat % | Body fat percentage analysis |
| `/results/bmi-insights` | BMI Insights | BMI analysis and recommendations |
| `/results/calorie-recommendations` | Calorie Recommendations | Personalized calorie intake |
| `/results/water-intake` | Water Intake | Hydration recommendations |
| `/results/weight-loss-rate` | Weight Loss Rate | Weight loss timeline |
| `/results/visible-changes` | Visible Changes Timeline | When you'll see results |

## Key Features

### 1. Lazy Loading & Code Splitting

All components are lazy-loaded using React's `lazy()` function:

```typescript
const QuizFormPage = lazy(() => import("../pages/QuizFormPage"));
const ResultsPage = lazy(() => import("../pages/ResultsPage"));
```

### 2. Protected Routes

Results pages are protected using the `ProtectedRoute` component:

```typescript
const ProtectedRoute = ({ children }) => {
  const { quizData } = useQuizContext();
  
  if (!quizData) {
    return <Navigate to="/quiz-form" replace />;
  }
  
  return <>{children}</>;
};
```

### 3. Centralized Route Configuration

Routes are defined in `src/routes/index.tsx` with a clean configuration:

```typescript
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/quiz-form" replace />,
  },
  {
    path: "/quiz-form",
    element: <QuizFormPage />,
  },
  // ... more routes
];
```

### 4. Card Configuration System

Individual cards are configured with metadata:

```typescript
export const cardConfig = {
  "body-fat": {
    component: lazy(() => import("../components/cards/BodyFatCard")),
    title: "Body Fat %",
    description: "Your body fat percentage analysis",
  },
  // ... more cards
};
```

### 5. Type Safety

Shared types are defined in `src/types/index.ts`:

```typescript
export interface UserFormData {
  gender: Gender;
  bodyFatPercent: number;
  BMI: number;
  calorieTarget: string;
  waterIntake: WaterIntake;
  weightLossRate: string;
  seeResultsDays: string;
}
```

## Navigation Flow

1. **Initial Load**: User lands on `/quiz-form`
2. **Form Submission**: User fills form and clicks "Get My Results"
3. **Results Page**: Redirected to `/results` with all cards
4. **Individual Cards**: User can click any card to view it individually at `/results/:cardName`
5. **Navigation**: Users can navigate between cards using prev/next buttons

## Performance Optimizations

### 1. Lazy Loading
- All page components are lazy-loaded
- Individual card components are lazy-loaded
- Reduces initial bundle size

### 2. Suspense Boundaries
- Loading spinners shown during component loading
- Smooth user experience during navigation

### 3. Route Protection
- Prevents unnecessary loading of protected components
- Redirects users without quiz data

### 4. Code Splitting
- Automatic code splitting by route
- Smaller chunks for faster loading

## File Structure

```
src/
├── components/
│   ├── routing/
│   │   └── ProtectedRoute.tsx
│   ├── ui/
│   │   └── LoadingSpinner.tsx
│   └── ...
├── pages/
│   ├── QuizFormPage.tsx
│   ├── ResultsPage.tsx
│   └── IndividualCardPage.tsx
├── routes/
│   └── index.tsx
├── types/
│   └── index.ts
└── App.tsx
```

## Usage Examples

### Navigating to Individual Cards

```typescript
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/results/body-fat");
```

### Getting Card Configuration

```typescript
import { getCardConfig } from "../routes";

const cardConfig = getCardConfig("body-fat");
const CardComponent = cardConfig?.component;
```

### Checking Route Protection

```typescript
import { useQuizContext } from "../context/QuizContext";

const { quizData } = useQuizContext();
if (!quizData) {
  // User needs to complete quiz first
}
```

## Best Practices

1. **Always use lazy loading** for new components
2. **Protect routes** that require user data
3. **Use shared types** to avoid duplication
4. **Implement loading states** for better UX
5. **Handle edge cases** like invalid card names
6. **Use proper TypeScript** for type safety

## Future Enhancements

- Add route-based analytics
- Implement route transitions/animations
- Add breadcrumb navigation
- Support for deep linking to specific cards
- Add route-based SEO optimization 