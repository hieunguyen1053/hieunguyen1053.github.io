import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'honoré blog',
  description:
    'honoré blog is a personal blog for sharing my thoughts and experiences.',
  href: 'https://hieunguyen1053.github.io',
  author: 'honoré',
  locale: 'vi-VN',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/hieunguyen1053',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/hieunguyen1053',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:hieunguyen1053@outlook.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
