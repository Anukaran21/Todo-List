import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes ,Route} from 'react-router-dom' 
import Header from './components/Header';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Todo from './components/Todo'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/todo' element={<Todo/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
