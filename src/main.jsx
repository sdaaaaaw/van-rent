import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
   Route
  ,RouterProvider
  ,createBrowserRouter,
  createRoutesFromElements}from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from './Pages/Home'
import About from './Pages/About'
import Vans ,{loader as vanloader} from './Pages/vans'
import VansDetails ,{loader as vandetailsloader} from './Pages/vandetails'
import Host from './Pages/Host/host'
import Review from './Pages/Host/review'
import Income from './Pages/Host/income'
import Dashboard , {loader as dashboardloader}from './Pages/Host/dashboard'
import Vanhost ,{loader as vanhostloader}from  './Pages/Host/vanhost'
import HostVandDetail , {loader as hostVandDetailloader} from './Pages/Host/hostvandetail'
import Hostvaninfo from './Pages/Host/hostvaninfo'
import HostvanPricing from './Pages/Host/hostvanpricing'
import HostvanPhoto from './Pages/Host/hostvanphoto'
import Login , {loader as loginloader , action as actionlogin} from './Pages/Login'
import Error from './Pages/Error'
import ErrorEl from './Pages/Errorelement'
import '../server'
import { requireAuth } from './utils'
import './index.css'




export default function App(){
 
  const router = createBrowserRouter(createRoutesFromElements(


    <Route path='/' element={<Layout/>} errorElement={<ErrorEl/>} >
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='login'
    element={<Login/>} 
    loader={loginloader} 
    action={actionlogin}/>
    <Route path='vans' element={<Vans/>} loader={vanloader} />
    <Route path='vans/:id' element={<VansDetails/>} loader={vandetailsloader}/>
    
      <Route path='host' element={<Host/>} >
            <Route index element={<Dashboard/>} loader={dashboardloader}/>
            <Route path='review' element={<Review/>} loader={async ({request})=>{
              await requireAuth(request)}}/>
            <Route path='van' element={<Vanhost/>} loader={vanhostloader} />
        <Route path='van/:id' element={<HostVandDetail/>} loader={hostVandDetailloader}>
            <Route index element={<Hostvaninfo/>} loader={async ({request})=>{
              await requireAuth(request)}}/>
            <Route path='pricing' element={<HostvanPricing/>} loader={async ({request})=> {
              await requireAuth(request)}}/>
            <Route path='photo' element={<HostvanPhoto/>} loader={async({request})=>{await requireAuth(request)}}/>
         </Route>
        <Route path='income' element={<Income/>} loader={async({request})=>{
          await requireAuth(request)}}/>
      </Route>
      <Route path='*' element={<Error/>}/>
    </Route>
  ))
 
  return(
<RouterProvider router={router}/>

  )
}


createRoot(document.getElementById('root')).render(
    <App />
)
