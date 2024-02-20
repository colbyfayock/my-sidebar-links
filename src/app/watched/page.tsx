import Image from 'next/image';

import Container from '@/components/Container';

import { sortByKey } from '@/lib/utils';

import movies from '@/data/movies.json';
import tvshows from '@/data/tv.json';

export default async function Watched() {
  const all = sortByKey([...movies, ...tvshows], 'title');
  return (
    <>
      <Container>
        <h1 className="text-2xl font-bold mb-6">Watched</h1>
        <ul className="grid grid-cols-3 gap-6">
          {all.map(item => {
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
