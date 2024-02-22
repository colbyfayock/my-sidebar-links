import Sidebar from '@/components/Sidebar';

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
      <Sidebar links={links} />
      <div>{ children }</div>
    </Container>
  )
}
