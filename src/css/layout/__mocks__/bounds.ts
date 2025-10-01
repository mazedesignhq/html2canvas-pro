import type { Bounds as BoundsType } from '../bounds';

const BoundsOriginal = (await vi.importActual<typeof import('../bounds')>('../bounds')).Bounds;
export const Bounds: typeof BoundsType = BoundsOriginal;
export const parseBounds = (): BoundsType => {
  return new Bounds(0, 0, 200, 50);
};
