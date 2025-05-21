export const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  {
    label: 'Tutorials',
    subItems: [
      { path: '/tutorials/dsa', label: 'DSA' },
      { path: '/tutorials/system-design', label: 'System Design' },
      { path: '/tutorials/design-patterns', label: 'Design Patterns' },
      { path: '/tutorials/principles', label: 'General Principles' }
    ]
  },
    { path: '/blog', label: 'Blog' },
    { path: '/courses', label: 'Courses' },
    { path: '/about', label: 'About' }
  ];

  export interface NavItemProp {
    label: string;
    path?: string;
    subItems?: Array<{
      path: string;
      label: string;
    }>;
  }