import { Icon } from './Icons'
export default function Topbar({ role, setRole, title, onMenu }) {
  return <header className="topbar">
    <div className="topbar-left"><button className="icon-btn mobile-menu" onClick={onMenu}><Icon name="Menu"/></button><div><div className="breadcrumb">Mistry <span>/</span> {title}</div><h1>{title}</h1></div></div>
    <div className="topbar-actions">
      <div className="role-switch"><Icon name="Users" size={15}/><select value={role} onChange={e=>setRole(e.target.value)} aria-label="Switch demo role"><option>Admin</option><option>Customer</option><option>Technician</option></select><Icon name="ChevronDown" size={14}/></div>
      <button className="icon-btn notification-btn"><Icon name="Bell" size={19}/><i/></button>
      <div className="top-avatar">{role==='Admin'?'M':role==='Customer'?'A':'R'}</div>
    </div>
  </header>
}
