import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='test' element={<div>Test</div>} />
        <Route path='*' element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
