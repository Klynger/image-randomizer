import { fetchFromKv } from "@/modules/fetchFromkv";

const IMAGE_COUNT_KEY = "image-count";

async function Home() {
  const imageCount = await fetchFromKv(IMAGE_COUNT_KEY);

  const imageUrl = await getImageUrl(imageCount);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Image count: {imageCount}
      <div className="w-80 h-80 border border-black">
        <img src={imageUrl} alt="Random image" />
      </div>
    </main>
  );
}

async function getImageUrl(imageCountStr: string) {
  const imageCount = parseInt(imageCountStr, 10);

  const imageIndex = imageCount - 1;

  const imageId = await fetchFromKv(getImageKey(imageIndex));

  console.log("imageId................", imageId);

  return `https://images.prismic.io/getcircuit/${imageId}`;
}

function getImageKey(imageIndex: number) {
  return `image-${imageIndex}`;
}

export default Home;
