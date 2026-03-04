export interface Destination {
  id: number;
  name: string;
  district: string;
  description: string;
  imageUrl: string;
  entryFee: number;
  category: 'Beach' | 'Hill Station' | 'Backwaters' | 'Culture';
}