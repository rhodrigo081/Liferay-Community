import { Routes, Route } from 'react-router-dom'
import { Explorer } from './pages/Explorer'
import { Friends } from './pages/Friends';
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Explorer />}/>
            <Route path='/friends' element={<Friends />}/>
            </Route>
        </Routes>
    );
}