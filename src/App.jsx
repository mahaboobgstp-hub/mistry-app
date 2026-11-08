import { useMemo, useState } from 'react'
import { Icon } from './components/Icons'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Admin from './pages/Admin'
import Customer from './pages/Customer'
import Technician from './pages/Technician'
import Management from './pages/Management'
import { services as serviceData, initialBookings, providers as providerData, customers as customerData } from './data/mockData'

export default function App() {
  const [role,setRole] = useState('Admin')
  const [active,setActive] = useState('Overview')
  const [mobileOpen,setMobileOpen] = useState(false)
  const [bookings,setBookings] = useState(initialBookings)
  const [providers] = useState(providerData)
  const [customers] = useState(customerData)
  const [toast,setToast] = useState('')
  const title = active==='Overview' ? (role==='Customer'?'Home':role==='Technician'?'Overview':'Overview') : active
  const notify = message => { setToast(message); window.setTimeout(()=>setToast(''),2800) }
  const changeRole = value => { setRole(value); setActive('Overview'); setMobileOpen(false) }
  const createBooking = data => {
    const id = `MIS-${1050+bookings.length}`
    setBookings(old=>[{id,customer:role==='Customer'?'Ananya Reddy':'Walk-in customer',phone:'98765 43210',service:data.service,issue:data.issue,address:data.address,date:'Just now',status:'Pending',provider:'—',amount:0,visit:199,created:'08 Nov 2026'},...old])
    notify(`Request ${id} created successfully (demo).`)
    setRole('Customer'); setActive('Home')
  }
  const body = useMemo(()=>{
    if(role==='Customer') return <Customer services={serviceData} bookings={bookings} onBook={createBooking}/>
    if(role==='Technician') return <Technician bookings={bookings} setBookings={setBookings}/>
    if(active==='Overview') return <Admin bookings={bookings} providers={providers} customers={customers} setActive={setActive}/>
    return <Management active={active} bookings={bookings} providers={providers} customers={customers} services={serviceData} setActive={setActive} onBook={createBooking}/>
  },[role,active,bookings,providers,customers])
  return <div className="app-shell">
    <Sidebar role={role} active={active} setActive={setActive} mobileOpen={mobileOpen} closeMobile={()=>setMobileOpen(false)}/>
    <main className="main-area">
      <Topbar role={role} setRole={changeRole} title={title} onMenu={()=>setMobileOpen(true)}/>
      {body}
      <footer className="app-footer"><span>© 2026 Mistry Home Services</span><span><i/> Prototype environment · Sample data only</span></footer>
    </main>
    {toast&&<div className="toast"><Icon name="CheckCircle2" size={18}/>{toast}</div>}
  </div>
}
