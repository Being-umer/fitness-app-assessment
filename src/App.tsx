import { QuizProvider } from "./context/QuizContext";
import "./styles/tailwind.css";
import "./styles/custom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";

// Main App Component
function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
