'use client';
import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSnowPreset } from "tsparticles-preset-snow";

export const ParticleSection = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSnowPreset(engine);
    }, []);
    return (
        <Particles
            className="absolute h-full w-full"
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: 1 },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: "#ffff",
                    },
                    move: {
                        enable: true,
                        outModes: {
                            default: "none",
                        },
                        random: true,
                        speed: 0.20,
                        straight: false,
                    },
                    number: {
                        limit: 120,
                        density: {
                            enable: false,
                        },
                        value: 150,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.2,
                            speed: 0.25,
                            sync: false
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.5
                        },
                        value: 1
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        animation: {
                            enable: true,
                            minimumValue: 0.6,
                            speed: 0.25,
                            sync: false
                        },
                        value: { min: 0.8, max: 1.2 },
                    },
                }
            }}
        />
    );
};