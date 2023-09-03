import './App.scss';
import NavBar from './components/nav/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collections from './pages/Collections';
import Home from './pages/Home';
import ViewChart from './pages/ViewChart';
import BottomNav from './components/BottomNav';
import SideNav from './components/nav/SideNav';
import { MusicProvider } from './context/MusicContext'
import OnProgress from './pages/OnProgress';
import NotFound from './pages/NotFound';

function App() {

  return (
    <MusicProvider>
      <div className="App relative">

        <Router>
          <NavBar />
          <SideNav />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/viewChart/:id' element={<ViewChart />} />
            <Route exact path='/collections' element={<Collections />} />
            <Route exact path='/onprogress' element={<OnProgress />} />
            <Route exact path='/*' element={<NotFound />} />
          </Routes>
        </Router>
        <BottomNav />
      </div>
    </MusicProvider>
  );
}

export default App;
