import * as Lucide from 'lucide-react'
export function Icon({ name='CircleHelp', size=20, ...props }) {
  const C = Lucide[name] || Lucide.CircleHelp
  return <C size={size} strokeWidth={1.8} {...props} />
}
