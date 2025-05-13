import { MilindsTweets } from '@/components/milinds-tweets';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tweets | Milind Mishra',
  description: 'Milind\'s tweets',
}


export default function TweetsPage() {
  return (
    <MilindsTweets />
  );
}