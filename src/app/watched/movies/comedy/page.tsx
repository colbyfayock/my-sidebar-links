import Image from 'next/image';

import Container from '@/components/Container';

import movies from '@/data/movies.json';

export default async function Movies() {
  return (
    <>
      <Container>
        <h1 className="text-2xl font-bold mb-6">Comedy</h1>
        <ul className="grid grid-cols-3 gap-6">
          {movies.filter(({ category }) => category === 'comedy').map(movie => {
            return (
              <li key={movie.title}>
                <Image
                  width={680}
                  height={1000}
                  src={movie.image}
                  alt={ movie.title }
                />
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}
