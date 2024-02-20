import Image from 'next/image';

import Container from '@/components/Container';

import tvshows from '@/data/tv.json';

export default async function TV() {
  return (
    <>
      <Container>
        <h1 className="text-2xl font-bold mb-6">TV Shows</h1>
        <ul className="grid grid-cols-3 gap-6">
          {tvshows.map(show => {
            return (
              <li key={show.title}>
                <Image
                  width={680}
                  height={1000}
                  src={show.image}
                  alt={ show.title }
                />
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}
