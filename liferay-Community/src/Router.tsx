import { Routes, Route } from 'react-router-dom'
import { Explore } from './pages/Explore/Explore.tsx'
import { Friends } from './pages/Friends/Friends.tsx';
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx';
import { CommunityView } from './components/CommunityView/CommunityView.tsx';
import { CommunityDatailView } from './components/CommunityDatailView/CommunityDatailView.tsx';


export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Explore />}/>
            <Route path='/amigos' element={<Friends />}/>
            <Route path='/' element={<CommunityView />}/>
            <Route path="/community/:communityId" element={<CommunityDatailView />} />
            <Route path="/community/:communityId1" element={<CommunityDatailView />} />
            </Route>
        </Routes>
    );
}