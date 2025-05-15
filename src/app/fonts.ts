import localFont from 'next/font/local';

export const neueHaasGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasDisplayLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayRoman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-neue-haas',
});
