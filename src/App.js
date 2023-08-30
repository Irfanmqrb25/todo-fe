import HomePage from "./page/HomePage";
import AddPage from "./page/AddPage";
import EditPage from "./page/EditPage";
import TrashPage from "./page/TrashPage";
import CompletePage from "./page/CompletePage";
import ExpiredSoonPage from "./page/ExpiredSoonPage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <HomePage /> : <Navigate to="/login" />} />
          <Route path='/todo/new' element={user ? <AddPage /> : <Navigate to="/login" />} />
          <Route path='/todo/edit/:id' element={user ? <EditPage /> : <Navigate to="/login" />} />
          <Route path='/todos/due-date' element={user ? <ExpiredSoonPage /> : <Navigate to="/login" />} />
          <Route path='/todos/trash' element={user ? <TrashPage /> : <Navigate to="/login" />} />
          <Route path='/todos/completed' element={user ? <CompletePage /> : <Navigate to="/login" />} />
          <Route path='/register' element={!user ? <RegisterPage /> : <Navigate to="/" />} />
          <Route path='/login' element={!user ? <LoginPage /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
