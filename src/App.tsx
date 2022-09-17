import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { create } from 'jss';
import jssIncreaseSpecificity from 'jss-increase-specificity';
import { ThemeProvider } from '@mui/material/styles';
import {
  StylesProvider,
  jssPreset,
  createGenerateClassName,
} from '@mui/styles';

import { Layout } from 'components';
import { DetailsFarmPage, ListFarmPage } from 'pages';

import { createAppTheme } from 'theme/theme';

const App = () => {
  const theme = createAppTheme();
  const jss = create({
    plugins: [...jssPreset().plugins, jssIncreaseSpecificity()],
  });
  const generateClassName = createGenerateClassName({
    productionPrefix: 'fetss-',
    disableGlobal: false,
    seed: 'ss',
  });

  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ListFarmPage />} />

              <Route path="/details" element={<DetailsFarmPage />} />
              <Route path="/details/:id" element={<DetailsFarmPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
