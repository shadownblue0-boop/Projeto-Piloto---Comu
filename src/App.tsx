import { Route, Routes } from 'react-router-dom';
import { PilotoPage } from './app/pages/piloto/PilotoPage';

/**
 * Site independente do piloto: qualquer caminho renderiza a página.
 * Os links internos (/cursos, /projeto/:id...) existem no app real; aqui
 * só não quebram. O objetivo deste projeto é validar a direção visual.
 */
export function App() {
  return (
    <Routes>
      <Route path="*" element={<PilotoPage />} />
    </Routes>
  );
}
