import { kv } from '@vercel/kv'

import { ClientImage } from './ClientImage'

import type { Image } from './ClientImage/ClientImage'

const IMAGE_COUNT_KEY = 'image-count'
const IMAGE_BASE_KEY = 'image:'

async function Home() {
  const imageCount = (await kv.get<number>(IMAGE_COUNT_KEY)) as number

  const index = getRandomIndex(imageCount)

  const image = (await kv.hgetall<Image>(`${IMAGE_BASE_KEY}${index}`)) as Image

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientImage image={image} />
    </main>
  )
}

function getRandomIndex(totalImages: number) {
  return Math.random() * (totalImages - 1)
}

export default Home
