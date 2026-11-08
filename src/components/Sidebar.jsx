import { Icon } from './Icons'

const menus = {
  Admin: [
    ['Overview','LayoutDashboard'],['Bookings','ClipboardList'],['Technicians','Wrench'],['Customers','Users'],['Services & pricing','Grid2X2'],['Payments & payouts','WalletCards'],['Reports','ChartNoAxesCombined']
  ],
  Customer: [['Home','House'],['My bookings','CalendarCheck'],['Addresses','MapPin'],['Help & support','Headphones']],
  Technician: [['Overview','LayoutDashboard'],['Nearby jobs','Radar'],['My jobs','BriefcaseBusiness'],['Earnings','Wallet'],['My profile','UserRound']]
}

export default function Sidebar({ role, active, setActive, mobileOpen, closeMobile }) {
  return <>
    {mobileOpen && <div className="mobile-scrim" onClick={closeMobile}/>}
    <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
      <div className="brand">
        <div className="brand-mark"><Icon name="House" size={22}/></div>
        <div><strong>mistry<span>.</span></strong><small>HOME SERVICES</small></div>
        <button className="icon-btn sidebar-close" onClick={closeMobile}><Icon name="X"/></button>
      </div>
      <div className="workspace-label">WORKSPACE</div>
      <div className="menu-list">
        {menus[role].map(([label, icon]) => <button key={label} className={`menu-item ${active===label?'selected':''}`} onClick={()=>{setActive(label);closeMobile()}}>
          <Icon name={icon} size={19}/><span>{label}</span>{label==='Nearby jobs' && <i className="menu-count">4</i>}
        </button>)}
      </div>
      <div className="sidebar-bottom">
        <div className="support-card"><div className="support-icon"><Icon name="LifeBuoy"/></div><b>Need a hand?</b><p>Our support team is here to help.</p><button onClick={()=>setActive(role==='Admin'?'Reports':'Help & support')}>Get support <Icon name="ArrowUpRight" size={14}/></button></div>
        <div className="profile-mini"><div className="avatar avatar-dark">{role==='Admin'?'M':role==='Customer'?'A':'R'}</div><div><b>{role==='Admin'?'Mistry Admin':role==='Customer'?'Ananya Reddy':'Ramesh Kumar'}</b><small>{role==='Admin'?'Owner account':role}</small></div><Icon name="MoreHorizontal" size={20}/></div>
      </div>
    </aside>
  </>
}
