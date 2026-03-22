declare module '*.glb' {
  const src: string;
  export default src;
}

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

// Augment JSX for react-three-fiber custom elements
declare namespace JSX {
  interface IntrinsicElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}
