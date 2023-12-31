import type { Wheel } from './types';

const PI = Math.PI;
export const wheel: Wheel = {
    // scale is used to scale the tiles at the right size for the screen
    // It is initialized at 1 but customResizeCanvas() update the value when the app starts
    scale: 1,
    position: 0,
    outerRing: {
        labels: ['B°', 'F♯°', 'C♯°', 'G♯°', 'D♯°', 'A♯°', 'F°', 'C°', 'G°', 'D°', 'A°', 'E°'],
        cellSize: (2 * PI) / 48,
        ratio: 4,
        innerDiameter: 0.82,
        outerDiameter: 1
    },
    middleRing: {
        labels: [
            'Em',
            'Am',
            'Bm',
            'Em',
            'F♯m',
            'Bm',
            'C♯m',
            'F♯m',
            'G♯m',
            'C♯m',
            'D♯m',
            'G♯m',
            'A♯m',
            'E♭m',
            'Fm',
            'B♭m',
            'Cm',
            'Fm',
            'Gm',
            'Cm',
            'Dm',
            'Gm',
            'Am',
            'Dm'
        ],
        cellSize: (2 * PI) / 24,
        ratio: 1,
        innerDiameter: 0.6,
        outerDiameter: 0.82
    },
    innerRing: {
        labels: ['C', 'G', 'D', 'A', 'F♭/E', 'C♭/B', 'G♭/F♯', 'D♭/C♯', 'A♭/G♯', 'E♭', 'B♭', 'F'],
        cellSize: (2 * PI) / 12,
        ratio: 1,
        innerDiameter: 0.35,
        outerDiameter: 0.6
    }
};
