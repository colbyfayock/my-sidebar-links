import Image from 'next/image';

import Container from '@/components/Container';

import { shuffleArray } from '@/lib/utils';

import movies from '@/data/movies.json';
import tvshows from '@/data/tv.json';

export default async function Home() {
  const featured = shuffleArray([...movies, ...tvshows]).splice(0, 6);

  return (
    <>
      <Container className="mt-12">
        <h1 className="text-center font-bold">
          <span className="block text-5xl">Movies &amp; TV Shows</span>
          <span className="block text-3xl mt-4">...That I watched</span>
        </h1>
      </Container>
      <Container className="mt-12">
        <ul className="grid grid-cols-3 gap-6">
          {featured.map(item => {
            return (
              <li key={item.title}>
                <Image
                  width={680}
                  height={1000}
                  src={item.image}
                  alt={ item.title }
                />
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}
