import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    const phi = 3.5;
    let width = 0;

    const onResize = () => {
      width = window.innerWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 0.5,
      height: width * 0.5,
      phi: phi,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 0.1],
      glowColor: [0.1, 0.8, 0.1],
      markers: [{ location: [12.9716, 77.5946], size: 0.1 }],
      onRender: (state) => {
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 0.5;
        state.height = width * 0.5;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        aspectRatio: "1",
        cursor: "grab",
      }}
      onPointerDown={(e) => {
        pointerInteracting.current =
          e.clientX - pointerInteractionMovement.current;
        canvasRef.current!.style.cursor = "grabbing";
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        canvasRef.current!.style.cursor = "grab";
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        canvasRef.current!.style.cursor = "grab";
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta * 0.01;
        }
      }}
    />
  );
}
