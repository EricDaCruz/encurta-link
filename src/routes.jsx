/*Fazer as configurações de rotas*/
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Links from './pages/Links'
import Error from './pages/Error'

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/myLinks" element={<Links/>}/>
                <Route path="*" element={<Error />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;