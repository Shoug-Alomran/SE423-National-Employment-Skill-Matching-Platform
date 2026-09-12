import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Project from './pages/Project.jsx';
import MethodologyRisk from './pages/MethodologyRisk.jsx';
import Planning from './pages/Planning.jsx';
import StakeholdersMetrics from './pages/StakeholdersMetrics.jsx';
import Team from './pages/Team.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="methodology-risk" element={<MethodologyRisk />} />
        <Route path="planning" element={<Planning />} />
        <Route path="stakeholders-metrics" element={<StakeholdersMetrics />} />
        <Route path="team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
