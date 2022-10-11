import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrentLocation, CurrentLocationDetail, Home, Login, LostAndFoundBoard, MyPage, NoticeBoard, TimeTable,
  PostCreate, PostDetail, ReservationStep1, ReservationStep2, RideStatus, SignUpStep1, SignUpStep2} from "./pages";

import { Provider } from 'react-redux';
import store from './redux/Store';
import rootReducer from './redux/RootReducer';
import { getCookie } from "./hooks/api/Cookie";

const App = () => {
    return (
      <Provider store={store(rootReducer)}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Routes>
                  <Route path='/' element={getCookie('user') === null || getCookie('user') === undefined ? <Login /> : <Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup-step1' element={<SignUpStep1 />} />
                  <Route path='/signup-step2' element={<SignUpStep2 />} />
                  <Route path='/mypage' element={<MyPage />} />
                  <Route path='/timetable' element={<TimeTable />} />

                  <Route path='/notice' element={<NoticeBoard />} />
                  <Route path='/lost-found' element={<LostAndFoundBoard />} />
                  <Route path='/write' element={<PostCreate />} />
                  <Route path='/post/:pid' element={<PostDetail />} />

                  <Route path='/reservation-step1' element={<ReservationStep1 />} />
                  <Route path='/reservation-step2' element={<ReservationStep2 />} />
                  <Route path='/curr-location/detail' element={<CurrentLocationDetail />} />
                  <Route path='/curr-location' element={<CurrentLocation />} />

                  <Route path='/ride-status' element={<RideStatus />} />
              </Routes>        
          </BrowserRouter>
      </Provider>
    );
  }
export default App;
