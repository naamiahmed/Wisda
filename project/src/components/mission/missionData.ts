import { Compass, Eye } from 'lucide-react';

export const missionData = {
  mission: {
    icon: Compass,
    title: 'Our Mission',
    description: 'To empower and uplift communities through sustainable welfare programs, education initiatives, and social support systems.',
    points: [
      'Provide educational support to underprivileged children',
      'Implement sustainable community development projects',
      'Offer healthcare assistance to those in need',
      'Create employment opportunities through skill development',
    ],
    gradient: 'bg-gradient-to-br from-blue-600/90 to-blue-800/90',
  },
  vision: {
    icon: Eye,
    title: 'Our Vision',
    description: 'To create a world where every individual has access to opportunities for growth, development, and a dignified life.',
    points: [
      'Build self-sustaining communities',
      'Promote social equality and justice',
      'Foster environmental consciousness',
      'Encourage community leadership',
    ],
    gradient: 'bg-gradient-to-br from-emerald-600/90 to-emerald-800/90',
  },
} as const;