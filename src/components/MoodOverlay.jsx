import { useMemo } from 'react';

function MoodOverlay({ effect, effectKey }) {
  const weatherParticles = useMemo(() => {
    if (!effect) {
      return [];
    }

    const count = effect === 'rain' ? 110 : effect === 'autumn' ? 26 : 40;

    return Array.from({ length: count }, (_, index) => ({
      id: `${effect}-${effectKey}-${index}`,
      left: `${(index * 9 + effectKey * 13) % 100}%`,
      delay: `${((index * 0.09) % 1.8).toFixed(2)}s`,
      duration: `${
        effect === 'rain'
          ? (1 + (index % 8) * 0.08).toFixed(2)
          : effect === 'autumn'
            ? (4.2 + (index % 6) * 0.28).toFixed(2)
            : (3.4 + (index % 7) * 0.26).toFixed(2)
      }s`,
      size:
        effect === 'rain'
          ? `${16 + (index % 8) * 5}px`
          : effect === 'autumn'
            ? `${12 + (index % 5) * 4}px`
            : `${5 + (index % 5)}px`,
      opacity:
        effect === 'rain'
          ? 0.38 + (index % 5) * 0.07
          : effect === 'autumn'
            ? 0.5 + (index % 3) * 0.08
            : 0.42 + (index % 4) * 0.08,
    }));
  }, [effect, effectKey]);

  if (!effect) {
    return null;
  }

  return (
    <div className={`weather-overlay weather-overlay--${effect}`}>
      {weatherParticles.map((particle) => (
        <span
          key={particle.id}
          className={`weather-particle weather-particle--${effect}`}
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            opacity: particle.opacity,
            width:
              effect === 'rain'
                ? '2px'
                : effect === 'autumn'
                  ? `calc(${particle.size} * 0.78)`
                  : particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
}

export default MoodOverlay;
