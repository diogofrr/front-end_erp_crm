import Image from 'next/image';

import RedRose from '@/../public/assets/red-rose.svg';
import GreenRose from '@/../public/assets/green-rose.svg';

import { generateBackgroundElementPositions } from '@/utils/generateBackgroundElementPositions';

const LoginDecorations = () => {
  const rosePositions = generateBackgroundElementPositions(15);

  return (
    <>
      {/* Red Roses */}
      {rosePositions.map((pos, i) => (
        <Image
          key={`red-${i}`}
          src={RedRose.src}
          alt="Red Rose"
          width={pos.size * 0.9}
          height={pos.size * 0.9}
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            opacity: pos.opacity,
            transform: `rotate(${pos.rotation}deg)`,
          }}
          className="absolute animate-float-slow"
        />
      ))}

      {/* Green Roses (com deslocamento sutil para não sobrepor as vermelhas) */}
      {rosePositions.map((pos, i) => (
        <Image
          key={`green-${i}`}
          className="absolute animate-float-slower"
          src={GreenRose.src}
          alt="Green Rose"
          width={pos.size * 0.9}
          height={pos.size * 0.9}
          style={{
            left: `${(pos.left + 5) % 100}%`,
            top: `${(pos.top + 7) % 100}%`,
            opacity: pos.opacity * 0.9,
            transform: `rotate(${(pos.rotation + 20) % 360}deg)`,
          }}
        />
      ))}
    </>
  );
};

export default LoginDecorations;
