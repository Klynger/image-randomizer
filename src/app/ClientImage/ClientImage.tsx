import Link from 'next/link'

type Props = {
  image: Image
}

function ClientImage(props: Props) {
  const { image } = props

  return (
    <Link href={image.link} target="_blank">
      <img src={image.src} alt="A dick illustration" />
    </Link>
  )
}

export type Image = {
  src: string
  link: string
}

export default ClientImage
