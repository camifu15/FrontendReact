
import './App.css'
//importamos react router dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//importamos los componentes
import CompMostrarTareas from './componentes/CompMostrarTareas';
import CompAgregarTareas from './componentes/CompAgregarTareas';
import CompEditarTareas from './componentes/CompEditarTareas';
import CompMenu from './componentes/CompMenu';
import CompFooter from './componentes/CompFooter';
import CompAgregarProveedor from './componentes/CompAgregarProveedor';
import CompMostrarProveedor from './componentes/CompMostrarProveedor';
import CompEditarProveedor from './componentes/CompEditarProveedor';


function App() {
  

  return (
  
      
      <div className='App'>
        <CompMenu/>
        <BrowserRouter>
        <Routes>
        <Route path='/tareas'exact element={<CompMostrarTareas/>}/>
        <Route path='/tareas/agregar'exact element={<CompAgregarTareas/>}/>
        <Route path='/tareas/editar/:id'exact element={<CompEditarTareas/>}/>
        <Route path='/proveedor'exact element={<CompMostrarProveedor/>}/>
        <Route path='/proveedor/agregar'exact element={<CompAgregarProveedor/>}/>
        <Route path='/proveedor/editar/:id'exact element={<CompEditarProveedor/>}/>
        

        </Routes>
        </BrowserRouter>
        <CompFooter/>
</div>    
      
  )
}

export default App
