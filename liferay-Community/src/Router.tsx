import { Routes, Route } from 'react-router-dom'
import { Explore } from './pages/Explore/Explore.tsx'
import { Friends } from './pages/Friends/Friends.tsx';
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Explore />}/>
            <Route path='/amigos' element={<Friends />}/>
            </Route>
        </Routes>
    );
}