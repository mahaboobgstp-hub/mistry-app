export const services = [
  { id:'plumbing', name:'Plumbing', detail:'Leaks, taps, pipes & fittings', icon:'Droplets', color:'blue', price:'₹199 visit' },
  { id:'electrical', name:'Electrician', detail:'Wiring, fans, switches & repairs', icon:'Zap', color:'amber', price:'₹199 visit' },
  { id:'painting', name:'Painting', detail:'Interior, exterior & touch-ups', icon:'Paintbrush', color:'rose', price:'₹299 visit' },
  { id:'carpentry', name:'Carpentry', detail:'Doors, furniture & woodwork', icon:'Hammer', color:'orange', price:'₹199 visit' },
  { id:'sanitary', name:'Sanitary work', detail:'Bathroom fittings & installations', icon:'Bath', color:'cyan', price:'₹199 visit' },
  { id:'ac', name:'AC technician', detail:'AC service, gas & installation', icon:'Wind', color:'violet', price:'₹249 visit' },
  { id:'fridge', name:'Refrigeration', detail:'Fridge & cooling appliance repair', icon:'Refrigerator', color:'indigo', price:'₹249 visit' },
  { id:'tv', name:'TV technician', detail:'LED/LCD TV diagnosis & repair', icon:'Tv', color:'pink', price:'₹249 visit' }
]

export const initialBookings = [
  { id:'MIS-1048', customer:'Ananya Reddy', phone:'98765 43210', service:'Plumbing', issue:'Kitchen sink leakage', address:'Madhapur, Hyderabad', date:'Today, 10:30 AM', status:'In Progress', provider:'Ramesh Kumar', amount:1450, visit:199, created:'08 Nov 2026' },
  { id:'MIS-1047', customer:'Karthik Rao', phone:'98490 11223', service:'Electrician', issue:'Ceiling fan not working', address:'Kondapur, Hyderabad', date:'Today, 11:15 AM', status:'Assigned', provider:'Suresh Naidu', amount:0, visit:199, created:'08 Nov 2026' },
  { id:'MIS-1046', customer:'Fatima Begum', phone:'97000 44321', service:'AC technician', issue:'AC not cooling', address:'Tolichowki, Hyderabad', date:'Today, 09:00 AM', status:'Completed', provider:'Imran Ali', amount:3200, visit:249, created:'07 Nov 2026' },
  { id:'MIS-1045', customer:'Vikram Singh', phone:'99887 66554', service:'Carpentry', issue:'Main door alignment', address:'Gachibowli, Hyderabad', date:'Yesterday, 04:00 PM', status:'Completed', provider:'Raju Sharma', amount:2100, visit:199, created:'07 Nov 2026' },
  { id:'MIS-1044', customer:'Priya Sharma', phone:'90000 77889', service:'Painting', issue:'Bedroom wall repainting', address:'Jubilee Hills, Hyderabad', date:'Yesterday, 02:00 PM', status:'Pending', provider:'—', amount:0, visit:299, created:'07 Nov 2026' }
]

export const providers = [
  { id:'SP-201', name:'Ramesh Kumar', service:'Plumbing', phone:'98765 10001', area:'Madhapur', rating:4.9, jobs:128, status:'Online', earnings:28450 },
  { id:'SP-202', name:'Suresh Naidu', service:'Electrician', phone:'98765 10002', area:'Kondapur', rating:4.8, jobs:96, status:'Online', earnings:22100 },
  { id:'SP-203', name:'Imran Ali', service:'AC technician', phone:'98765 10003', area:'Tolichowki', rating:4.9, jobs:154, status:'Busy', earnings:39800 },
  { id:'SP-204', name:'Raju Sharma', service:'Carpentry', phone:'98765 10004', area:'Gachibowli', rating:4.7, jobs:73, status:'Offline', earnings:16800 }
]

export const customers = [
  { id:'CUS-301', name:'Ananya Reddy', phone:'98765 43210', bookings:5, area:'Madhapur', joined:'12 Aug 2026' },
  { id:'CUS-302', name:'Karthik Rao', phone:'98490 11223', bookings:3, area:'Kondapur', joined:'21 Sep 2026' },
  { id:'CUS-303', name:'Fatima Begum', phone:'97000 44321', bookings:8, area:'Tolichowki', joined:'02 Jul 2026' },
  { id:'CUS-304', name:'Vikram Singh', phone:'99887 66554', bookings:2, area:'Gachibowli', joined:'18 Oct 2026' }
]
