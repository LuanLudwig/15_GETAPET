import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* componentes */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Message from './components/layout/Message';

/* pages */
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Home from './components/pages/Home';
import Profile from './components/pages/user/Profile';
import MyPets from './components/pages/pet/MyPets';
import AddPet from './components/pages/pet/AddPet';
import EditPet from './components/pages/pet/EditPet';
import PetDetails from './components/pages/pet/PetDetails';
import MyAdoptions from './components/pages/pet/MyAdoptions';


/* context */
import { UserProvider } from './context/UserContext';




function App() {
  return (
    <BrowserRouter>
    <UserProvider>
      <Navbar />
      <Message />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/pet/mypets" element={<MyPets />} />
            <Route path="/pet/add" element={<AddPet />} />
            <Route path="/pet/edit/:id" element={<EditPet />} />
            <Route path="pet/:id" element={<PetDetails />} />
            <Route path="pet/myadoptions" element={<MyAdoptions />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
