import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './pages/App'
import Curriculo from './pages/Curriculo'
import Portifolio from './pages/Portifolio'

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/curriculo", element: <Curriculo /> },
    { path: "/portifolio", element: <Portifolio /> },
  ],
  {
    // npm run dev → ambiente local → usa "/"
    // npm run build → produção/preview → usa "/NOME_DO_REPOSITORIO/"
    basename: import.meta.env.BASE_URL,
  }
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)