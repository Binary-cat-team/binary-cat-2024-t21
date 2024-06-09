import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import { StoreProvider } from './app/providers/storeProvider/StoreProvider.tsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './shared/constants/theme.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StoreProvider>
);
