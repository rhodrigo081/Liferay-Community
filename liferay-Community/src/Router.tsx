import { Routes, Route } from 'react-router-dom'
import { Explore } from './pages/Explore/Explore.tsx'
import { Friends } from './pages/Friends/Friends.tsx';
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx';
import { CommunityPage } from './pages/Community/Community.tsx';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Explore />}/>
            <Route path='/amigos' element={<Friends />}/>
            {/* Página de comunidades */}
            <Route path='/community/:id' element={<CommunityPage />}/>
            </Route>
        </Routes>
    );
}