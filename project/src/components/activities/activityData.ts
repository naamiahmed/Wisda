import { BookOpen, Heart, Users, Leaf } from 'lucide-react';

export const activities = [
  {
    icon: BookOpen,
    title: 'Education Support',
    description: 'Providing educational resources and mentoring to underprivileged students.',
    stats: '500+ Students Supported',
  },
  {
    icon: Heart,
    title: 'Healthcare Initiatives',
    description: 'Free medical camps and health awareness programs for communities.',
    stats: '1000+ Health Checkups',
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Empowering communities through skill development and support programs.',
    stats: '20+ Active Programs',
  },
  {
    icon: Leaf,
    title: 'Environmental Projects',
    description: 'Promoting sustainability through green initiatives and awareness.',
    stats: '15+ Projects Completed',
  },
] as const;