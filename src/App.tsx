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
// Field note articles
import HandoffBreaks from './pages/field-notes/HandoffBreaks'
import TaskVsDecision from './pages/field-notes/TaskVsDecision'
import HumanInLoop from './pages/field-notes/HumanInLoop'
import ToolSprawl from './pages/field-notes/ToolSprawl'
import WorkflowMemory from './pages/field-notes/WorkflowMemory'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="method" element={<MethodPage />} />
          <Route path="use-cases" element={<UseCasesPage />} />
          <Route path="field-notes" element={<FieldNotesPage />} />
          <Route path="field-notes/handoff-breaks" element={<HandoffBreaks />} />
          <Route path="field-notes/task-vs-decision" element={<TaskVsDecision />} />
          <Route path="field-notes/human-in-loop" element={<HumanInLoop />} />
          <Route path="field-notes/tool-sprawl" element={<ToolSprawl />} />
          <Route path="field-notes/workflow-memory" element={<WorkflowMemory />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="work-with-me" element={<WorkWithMePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
