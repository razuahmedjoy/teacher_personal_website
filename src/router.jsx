import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx'
import LandingPage from "./pages/LandingPage.jsx";
import { ExperiencePage } from "./pages/Experience.jsx";
import { PublicationPage } from "./pages/PublicationPage.jsx";
import { ScholarshipAndAwardsPage } from "./pages/ScholarshipAward.jsx";
import ResearchPage from "./pages/ResearchPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import TeachingAndSupervisionPage from "./pages/Teaching.jsx";

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'publications', element: <PublicationPage /> },
      { path: 'scholarship_awards', element: <ScholarshipAndAwardsPage /> },
      { path: 'research', element: <ResearchPage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'teaching_supervision', element: <TeachingAndSupervisionPage /> },


      // 404 Not Found route
      { path: "*", element: <NotFound /> },
    ],
  }
])


export default router