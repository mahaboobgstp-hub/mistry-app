import { useState } from 'react'
import { Icon } from '../components/Icons'
import StatCard from '../components/StatCard'
import Status from '../components/Status'

export default function Technician({ bookings, setBookings }) {
  const [tab,setTab] = useState('Nearby jobs')
  const [quoteId,setQuoteId] = useState(null)
  const [quote,setQuote] = useState('1450')
  const available = bookings.filter(b=>b.status==='Pending')
  const myJobs = bookings.filter(b=>b.provider==='Ramesh Kumar')
  const accept = id => setBookings(old=>old.map(b=>b.id===id?{...b,provider:'Ramesh Kumar',status:'Assigned'}:b))
  return <div className="page-content">
    <div className="welcome-row"><div><p className="eyebrow">TECHNICIAN WORKSPACE</p><h2>Welcome back, Ramesh <span>👋</span></h2><p className="muted-text">You're online and ready to receive service requests.</p></div><div className="online-pill"><i/> Available for jobs</div></div>
    <div className="stats-grid three-stats"><StatCard label="This month's earnings" value="₹28,450" change="+14.5%" note="vs last month" icon="Wallet" tone="green"/><StatCard label="Jobs completed" value="128" change="+9.2%" note="all time" icon="BadgeCheck" tone="blue"/><StatCard label="Customer rating" value="4.9 / 5" change="+0.2" note="from 86 reviews" icon="Star" tone="amber"/></div>
    <div className="tabs-row">{['Nearby jobs','My jobs'].map(t=><button className={tab===t?'tab-active':''} onClick={()=>setTab(t)} key={t}>{t} {t==='Nearby jobs'&&<span className="tab-count">{available.length}</span>}</button>)}</div>
    {tab==='Nearby jobs'?<div className="job-grid">{available.length?available.map(b=><div className="panel job-card" key={b.id}><div className="job-card-top"><span className="job-tag"><Icon name="MapPin" size={13}/> 2.4 km away</span><span className="job-time">{b.date}</span></div><h3>{b.service} required</h3><p>{b.issue}</p><div className="job-location"><Icon name="MapPin" size={16}/>{b.address}</div><div className="job-card-bottom"><div><small>VISIT CHARGE</small><b>₹{b.visit}</b></div><button className="btn btn-primary" onClick={()=>accept(b.id)}>Accept job <Icon name="ArrowRight" size={15}/></button></div></div>):<div className="empty-state panel"><Icon name="Radar" size={30}/><b>No new requests nearby</b><p>We'll show new customer requests here.</p></div>}</div>:<div className="panel"><div className="panel-heading"><div><h3>Your assigned jobs</h3><p>Manage active service requests</p></div></div>{myJobs.length?myJobs.map(b=><div className="job-row" key={b.id}><div className="booking-symbol"><Icon name="Wrench"/></div><div className="job-row-main"><b>{b.service} · {b.id}</b><small>{b.customer} · {b.address}</small></div><Status value={b.status}/>{b.status!=='Completed'&&<button className="btn btn-small btn-primary" onClick={()=>setQuoteId(quoteId===b.id?null:b.id)}>Update job</button>}</div>):<div className="empty-state">No assigned jobs yet.</div>}</div>}
    {quoteId&&<div className="modal-backdrop"><div className="modal"><button className="modal-close icon-btn" onClick={()=>setQuoteId(null)}><Icon name="X"/></button><p className="eyebrow">JOB UPDATE</p><h3>Submit work estimate</h3><p className="muted-text">Enter the estimated total for customer approval.</p><label>Quotation amount (₹)</label><input value={quote} onChange={e=>setQuote(e.target.value)} type="number"/><div className="commission-preview"><span>Technician share (90%)</span><b>₹{Math.round((Number(quote)||0)*.9).toLocaleString('en-IN')}</b><span>Mistry commission (10%)</span><b>₹{Math.round((Number(quote)||0)*.1).toLocaleString('en-IN')}</b></div><button className="btn btn-primary full-btn" onClick={()=>{setBookings(old=>old.map(b=>b.id===quoteId?{...b,amount:Number(quote),status:'In Progress'}:b));setQuoteId(null)}}>Submit estimate <Icon name="ArrowRight" size={16}/></button></div></div>}
  </div>
}
