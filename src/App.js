import UserForm from './pages/UserForm'
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import PopularDishForm from './pages/PopularDishesForm';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<UserForm type='login' />} />
        <Route path='/signup' element={<UserForm type='signup'/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dishes/:id' element={<PopularDishForm isEditable={true}/>} />
        <Route path='/popular-dish-form' element={<PopularDishForm />} />
      </Routes>
    </Layout>
    </BrowserRouter>
    
  );
}

export default App;
