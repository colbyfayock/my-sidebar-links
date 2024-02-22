'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils';

interface SidebarLink {
  label: string;
  path: string;
  children?: Array<SidebarLink>;
}

interface SidebarProps {
  links: Array<SidebarLink>;
}

export default function Sidebar({ links }: SidebarProps) {
  const pathname = usePathname();
  return (
    <ul className="-mt-1">
      {links.map(link => {
        const isParentActive = pathname === link.path;;
        return (
          <li key={`${link.label}-${link.path}`} className="mb-1">
            <Link
              className={cn(
                'block font-semibold px-6 py-2',
                isParentActive && 'text-white bg-blue-500'
              )} href={link.path}
            >
              { link.label }
            </Link>
            {link.children && link.children.length > 0 && (
              <ul className="pl-2">
                { link.children.map(child => {
                  const isChildActive = pathname === child.path;
                  return (
                    <li key={`${child.label}-${child.path}`}>
                      <Link
                        className={cn(
                          'border-l-2 border-transparent block px-6 py-2',
                          isChildActive && 'border-blue-500'
                        )} href={child.path}
                      >
                        { child.label }
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}