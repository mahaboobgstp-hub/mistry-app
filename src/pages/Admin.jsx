import { Icon } from '../components/Icons'
import StatCard from '../components/StatCard'
import Status from '../components/Status'

export default function Admin({ bookings, providers, customers, setActive }) {
  const completed = bookings.filter(b=>b.status==='Completed').length
  const revenue = bookings.reduce((s,b)=>s+(b.amount||0),0)
  const commission = Math.round(revenue*.1)
  return <div className="page-content">
    <div className="welcome-row"><div><p className="eyebrow">SUNDAY, 08 NOVEMBER 2026</p><h2>Good evening, Admin <span>✦</span></h2><p className="muted-text">Here's what's happening across your service network today.</p></div><button className="btn btn-primary" onClick={()=>setActive('Bookings')}><Icon name="Plus" size={17}/> Create booking</button></div>
    <div className="stats-grid">
      <StatCard label="Total bookings" value="1,284" change="+12.8%" note="vs last month" icon="ClipboardList" tone="green"/>
      <StatCard label="Active technicians" value="86" change="+8.2%" note="vs last month" icon="Users" tone="blue"/>
      <StatCard label="Gross service value" value={`₹${(revenue+284500).toLocaleString('en-IN')}`} change="+18.4%" note="this month" icon="IndianRupee" tone="amber"/>
      <StatCard label="Mistry commission" value={`₹${(commission+28450).toLocaleString('en-IN')}`} change="+16.1%" note="10% platform share" icon="Wallet" tone="violet"/>
    </div>
    <div className="content-grid">
      <section className="panel bookings-panel">
        <div className="panel-heading"><div><h3>Recent bookings</h3><p>Track the latest service requests</p></div><button className="text-btn" onClick={()=>setActive('Bookings')}>View all <Icon name="ArrowRight" size={15}/></button></div>
        <div className="table-wrap"><table><thead><tr><th>BOOKING ID</th><th>CUSTOMER</th><th>SERVICE</th><th>TECHNICIAN</th><th>STATUS</th><th>AMOUNT</th></tr></thead><tbody>{bookings.slice(0,4).map(b=><tr key={b.id}><td><b className="id-text">{b.id}</b><small>{b.date}</small></td><td><b>{b.customer}</b><small>{b.address}</small></td><td>{b.service}</td><td>{b.provider}</td><td><Status value={b.status}/></td><td className="amount-cell">{b.amount?`₹${b.amount.toLocaleString('en-IN')}`:'—'}</td></tr>)}</tbody></table></div>
      </section>
      <section className="panel side-panel"><div className="panel-heading"><div><h3>Technician activity</h3><p>Availability right now</p></div><button className="dots-btn"><Icon name="MoreHorizontal"/></button></div>
        <div className="activity-list">{providers.slice(0,4).map((p,i)=><div className="activity-item" key={p.id}><div className={`avatar avatar-${i+1}`}>{p.name.split(' ').map(x=>x[0]).join('')}</div><div className="activity-info"><b>{p.name}</b><small>{p.service} · {p.area}</small></div><Status value={p.status}/></div>)}</div>
        <button className="outline-btn full-btn" onClick={()=>setActive('Technicians')}>Manage technicians <Icon name="ArrowRight" size={15}/></button>
      </section>
    </div>
    <div className="bottom-grid">
      <section className="panel"><div className="panel-heading"><div><h3>Revenue overview</h3><p>Platform earnings · last 7 days</p></div><span className="period-pill">This week <Icon name="ChevronDown" size={13}/></span></div>
        <div className="chart-area"><div className="chart-y"><span>₹8k</span><span>₹6k</span><span>₹4k</span><span>₹2k</span><span>₹0</span></div><div className="chart-main"><div className="chart-gridlines"><i/><i/><i/><i/><i/></div><div className="bars">{[42,66,52,83,61,92,74].map((h,i)=><div className="bar-group" key={i}><div className="bar" style={{height:`${h}%`}}/><small>{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</small></div>)}</div></div></div>
      </section>
      <section className="panel split-panel"><div className="panel-heading"><div><h3>Platform split</h3><p>Completed service value</p></div></div><div className="split-visual"><div className="donut"><div><b>10%</b><small>Mistry</small></div></div><div className="split-legend"><div><i className="dot-green"/><span>Technician share</span><b>90%</b></div><div><i className="dot-blue"/><span>Mistry commission</span><b>10%</b></div></div></div><div className="split-note"><Icon name="Info" size={15}/> Commission shown as a demo calculation.</div></section>
    </div>
  </div>
}
