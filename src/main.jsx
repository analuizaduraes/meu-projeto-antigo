import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//as outras páginas vão aqui, mas eu dei um tempo, tinha mta info
import { CreateMovie } from './pages/MovieVisualizer';
//import { Home } from './pages/MovieVisualizer';
//import { MovieVisualizer } from './pages/MovieVisualizer';
//import { Profile } from './pages/MovieVisualizer';
//import { SignIn } from './pages/MovieVisualizer';
//import { SignUp } from './pages/MovieVisualizer';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <CreateMovie />
    </ThemeProvider>
  </StrictMode>
)