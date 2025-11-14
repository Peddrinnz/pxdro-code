'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setReady(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: false,
            },
            particles: {
                number: { value: 40 },
                color: { value: "#3b82f6" },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 4 } },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#3b82f6",
                    opacity: 0.3,
                    width: 1,
                },
                move: { enable: true, speed: 1 },
            },
        }),
        []
    );

    if (!ready) return <></>;

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
}
