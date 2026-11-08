import { Icon } from './Icons'
export default function StatCard({ label, value, change, icon, tone='green', note }) {
  return <div className="stat-card"><div className="stat-top"><span>{label}</span><div className={`stat-icon ${tone}`}><Icon name={icon} size={19}/></div></div><div className="stat-value">{value}</div><div className="stat-foot">{change && <span className="trend"><Icon name="TrendingUp" size={13}/>{change}</span>}<span>{note}</span></div></div>
}
