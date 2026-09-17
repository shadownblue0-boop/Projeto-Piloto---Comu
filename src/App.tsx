import { Route, Routes } from 'react-router-dom';
import { PilotoPage } from './app/pages/piloto/PilotoPage';
import { ArtefatosPage } from './app/pages/artefatos/ArtefatosPage';
import { ArtefatoPage } from './app/pages/artefatos/ArtefatoPage';
import { ProfessorPage } from './app/pages/professor/ProfessorPage';

/**
 * Site independente do piloto: a home, a estante de artefatos e o perfil dos
 * professores. `/mentoria/mentor/:id` é a rota do app real — fica apontando
 * para o mesmo perfil para nenhum link antigo quebrar. Qualquer outro caminho
 * (rotas do app que não existem aqui) cai na home.
 */
export function App() {
  return (
    <Routes>
      <Route path="/" element={<PilotoPage />} />
      <Route path="/artefatos" element={<ArtefatosPage />} />
      <Route path="/artefatos/:slug" element={<ArtefatoPage />} />
      <Route path="/professor/:id" element={<ProfessorPage />} />
      <Route path="/mentoria/mentor/:id" element={<ProfessorPage />} />
      <Route path="*" element={<PilotoPage />} />
    </Routes>
  );
}
