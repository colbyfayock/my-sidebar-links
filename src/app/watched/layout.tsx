import Link from 'next/link';

import { cn } from '@/lib/utils';

import Container from '@/components/Container';

const links = [
  {
    label: 'All',
    path: '/watched',
  },
  {
    label: 'Movies',
    path: '/watched/movies',
  },
  {
    label: 'TV Shows',
    path: '/watched/tv',
  },
]

export default async function WatchedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container className="grid grid-cols-[12rem_1fr] mt-6">
      <ul className="-mt-1">
        {links.map(link => {
          return (
            <li key={`${link.label}-${link.path}`} className="mb-1">
              <Link
                className={cn(
                  'block font-semibold px-6 py-2',
                  // 'text-white bg-blue-500'
                )} href={link.path}
              >
                { link.label }
              </Link>
            </li>
          )
        })}
      </ul>
      <div>{ children }</div>
    </Container>
  )
}
