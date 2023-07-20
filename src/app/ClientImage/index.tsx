import dynamic from 'next/dynamic'

const Component = dynamic(() => import('./ClientImage'))

export const ClientImage: typeof Component = (props) => {
  return <Component {...props} />
}
