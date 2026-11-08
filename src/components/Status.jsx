export default function Status({ value }) {
  const cls = value==='Completed'?'success':value==='In Progress'?'info':value==='Assigned'?'purple':value==='Pending'?'warning':value==='Online'?'success':value==='Busy'?'warning':'muted'
  return <span className={`status ${cls}`}><i/>{value}</span>
}
