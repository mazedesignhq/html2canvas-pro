export const { Bounds } = await vi.importActual<typeof import('../bounds')>('../bounds');
export const parseBounds = () => {
  return new Bounds(0, 0, 200, 50);
};
