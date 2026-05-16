import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MethodPage from './pages/MethodPage'
import UseCasesPage from './pages/UseCasesPage'
import FieldNotesPage from './pages/FieldNotesPage'
import ResourcesPage from './pages/ResourcesPage'
import WorkWithMePage from './pages/WorkWithMePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="method" element={<MethodPage />} />
          <Route path="use-cases" element={<UseCasesPage />} />
          <Route path="field-notes" element={<FieldNotesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="work-with-me" element={<WorkWithMePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
