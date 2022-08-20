import { StaticImageData } from 'next/image';

export default interface INews {
  title: string;

  cover?: StaticImageData;
  date: string;
  description: string;
}
