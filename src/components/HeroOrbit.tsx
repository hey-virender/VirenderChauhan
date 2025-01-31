import React, { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -z-10 -translate-y-1/2 size-[${size}px]`}
    >
      <div
        className={`${shouldOrbit && "animate-spin"}`}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex items-start justify-start -z-10"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div className={`${shouldSpin && "animate-spin"}`}  style={{
          animationDuration: spinDuration,
        }}>
            <div
              className="inline-flex"
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
