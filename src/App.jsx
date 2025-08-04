import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./component/footer";

import Hero from "./component/hero";
import NavBar from "./component/navBar";
import Destination from "./component/destination";
import BlogOverview from "./component/blog";
import Blog from "./pages/blog";
import TravelTips from "./pages/travelTips";
import Inspiration from './pages/inspiration';
import ContactUs from './pages/contactUs';
import TipsDetail from './pages/TipsDetail';
import InspirationDetail from './pages/InspirationDetail';
import BlogDetail from './pages/blogDetail';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Destination />
            <BlogOverview />
          </>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail/>}/>
        <Route path='/tips' element={< TravelTips/>} />
        <Route path='/tips/:slug' element={<TipsDetail/>}/>
        <Route path='/inspiration' element={<Inspiration/>}/>
        <Route path='/inspiration/:slug' element={<InspirationDetail/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

