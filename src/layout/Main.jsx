import * as React from 'react';
import Header from './Header'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';
import CarouselPage from '../component/widgets/Carousel';
import ImageList from '../assets/json/ImageList.json'
import { useNavigate, useLocation, useParams } from 'react-router-dom';

function Main(props) {

  const navigate = useNavigate();
  const location = useLocation();
  const match = useParams();

  console.log(navigate)
  console.log(location)
  console.log(match)
  return (
    <div>
      <Header />
      <Breadcrumb />
      {location.pathname === '/' ?
        <CarouselPage
          arrayList={ImageList}
          height="400"
          indicators={false} /> : ''}
      <Box sx={{ p: 3, pb: 16 }}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
}
export default Main;