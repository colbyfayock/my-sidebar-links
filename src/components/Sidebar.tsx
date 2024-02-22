'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils';

interface SidebarProps {
  links: Array<{
    label: string;
    path: string;
  }>
}

export default function Sidebar({ links }: SidebarProps) {
  const pathname = usePathname();
  return (
    <ul className="-mt-1">
      {links.map(link => {
        const isActive = pathname === link.path;
        return (
          <li key={`${link.label}-${link.path}`} className="mb-1">
            <Link
              className={cn(
                'block font-semibold px-6 py-2',
                isActive && 'text-white bg-blue-500'
              )} href={link.path}
            >
              { link.label }
            </Link>
          </li>
        )
      })}
    </ul>
  )
}