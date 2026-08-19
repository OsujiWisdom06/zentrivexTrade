import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Services from './Pages/Services'
import Forgotpassword from './Pages/Forgotpassword'
import Resetpassword from './Pages/Resetpassword'
import EarningsNotification from './Component/EarningsNotification'
import SplashScreen from './Component/SplashScreen'
import ViewMarket from './Component/ViewMarket'
import SumarryDasboard from './Pages/SumarryDashdoard'
import Profile from './Pages/Profile'
import Deposit from './Pages/Deposit'
import Withdraw from './Pages/Withdraw'
import MyWallet from './Pages/My Wallet'
import Markets from './Pages/Market'
import MyStocks from './Pages/MyStocks'
import DasboardInvestmentPlans from './Component/DasboardInvestmentPlans'
import { ToastContainer } from 'react-toastify'
import MyTransactions from './Pages/My Transaction'
import MyMarkets from './Pages/Mymarket'
import VerifyEmail from './Pages/VerifyEmail'


const App = () => {
  return (
    <div>
        <BrowserRouter>

        <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  pauseOnHover
  toastClassName="custom-toast"
/>
          <EarningsNotification/>
         <Routes>
          <Route path='/' element={<SplashScreen/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
           <Route path='/about-us' element={<Aboutus/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<SignUp/>}></Route>
             <Route path='/forgot-password' element={<Forgotpassword/>}></Route>
              <Route path='/reset-password' element={<Resetpassword/>}></Route>
              <Route path='/verify-email' element={< VerifyEmail/>}></Route>
              <Route path='/market-overview' element={<ViewMarket />}></Route>
               <Route path='/dash-board' element={< SumarryDasboard/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
                 <Route path='/deposit' element={<Deposit/>}></Route>
                 <Route path='/withdraw' element={< Withdraw/>}></Route>
                 <Route path='/my-wallet' element={< MyWallet/>}></Route>
                  <Route path='/markets' element={< Markets/>}></Route>
                   <Route path='/my-stocks' element={<   MyStocks/>}></Route>
                   <Route path='/my-dashboard/investment-plans' element={<DasboardInvestmentPlans/>}></Route>
                   <Route path='/transactions/history' element={ < MyTransactions />}></Route>
                   <Route path='/dashboard/my-market' element={ < MyMarkets />}></Route>

          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App