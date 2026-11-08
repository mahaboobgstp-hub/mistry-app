import { useState } from 'react'
import { Icon } from '../components/Icons'
import Status from '../components/Status'

export default function Customer({ services, bookings, onBook }) {
  const [selected,setSelected] = useState('Plumbing')
  const [issue,setIssue] = useState('')
  const [address,setAddress] = useState('Madhapur, Hyderabad')
  const [showForm,setShowForm] = useState(false)
  return <div className="page-content customer-page">
    <div className="customer-hero"><div className="hero-copy"><span className="hero-kicker"><Icon name="Sparkles" size={14}/> YOUR HOME, IN GOOD HANDS</span><h2>What can we help<br/>you <em>fix today?</em></h2><p>Verified local professionals. Quality work. Peace of mind.</p><button className="btn btn-light" onClick={()=>document.getElementById('service-grid')?.scrollIntoView({behavior:'smooth'})}>Explore services <Icon name="ArrowDown" size={16}/></button></div><div className="hero-art"><div className="hero-circle"><Icon name="House" size={108} strokeWidth={1}/></div><div className="hero-float"><Icon name="ShieldCheck" size={18}/><span><b>Trusted professionals</b><small>At your doorstep</small></span></div></div></div>
    <div className="section-title-row"><div><p className="eyebrow">OUR SERVICES</p><h3>How can we help you?</h3></div><span className="muted-text">Choose a service to get started</span></div>
    <div className="service-grid" id="service-grid">{services.map(s=><button className={`service-tile ${selected===s.name?'service-selected':''}`} key={s.id} onClick={()=>{setSelected(s.name);setShowForm(true)}}><div className={`service-icon ${s.color}`}><Icon name={s.icon} size={25}/></div><b>{s.name}</b><small>{s.detail}</small><span className="service-price">{s.price}</span><Icon name="ArrowUpRight" className="tile-arrow" size={17}/></button>)}</div>
    <div className="customer-lower">
      <section className="panel booking-form-panel"><div className="panel-heading"><div><h3>Book a service</h3><p>Tell us what needs attention</p></div><span className="step-chip">01 / 02</span></div>
        <form onSubmit={e=>{e.preventDefault();onBook({service:selected,issue:issue||`${selected} service required`,address});setIssue('');setShowForm(false)}}><label>Selected service</label><div className="selected-service"><div className={`service-icon ${services.find(s=>s.name===selected)?.color}`}><Icon name={services.find(s=>s.name===selected)?.icon} size={20}/></div><b>{selected}</b><button type="button" className="text-btn" onClick={()=>document.getElementById('service-grid')?.scrollIntoView({behavior:'smooth'})}>Change</button></div><label>Describe your issue</label><textarea value={issue} onChange={e=>setIssue(e.target.value)} placeholder="E.g. Water is leaking under the kitchen sink..." rows="3"/><label>Service address</label><div className="input-icon"><Icon name="MapPin" size={17}/><input value={address} onChange={e=>setAddress(e.target.value)} /></div><button className="btn btn-primary full-btn" type="submit">Continue to booking <Icon name="ArrowRight" size={17}/></button><small className="form-foot"><Icon name="ShieldCheck" size={14}/> No payment required to submit a request.</small></form>
      </section>
      <section className="panel my-bookings-panel"><div className="panel-heading"><div><h3>Your recent bookings</h3><p>Stay updated on your service requests</p></div><button className="text-btn">View all <Icon name="ArrowRight" size={15}/></button></div>{bookings.slice(0,3).map(b=><div className="customer-booking" key={b.id}><div className="booking-symbol"><Icon name="Wrench"/></div><div className="customer-booking-info"><b>{b.service}</b><small>{b.id} · {b.date}</small><Status value={b.status}/></div><b className="amount-cell">{b.amount?`₹${b.amount}`:'—'}</b></div>)}</section>
    </div>
  </div>
}
