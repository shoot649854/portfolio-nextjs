export const getFilePathFromSlug = (slug: string) => {
    const file = slugMapper.find((item) => item.slug === slug);
    return file ? file.file : "";
  };
  
  export const recommendedSlug = [
    "rhino-plugin-gltf",
    "grasshopper-threejs",
    "pipe-connection",
    "curtain",
    "gallery",
  ];
  
  interface SlugMapper {
    slug: string;
    file: string;
  }
  
  const slugMapper: SlugMapper[] = [
    {
      slug: "gumball",
      file: "Rhinoceros/gumball/index.md",
    },
    {
      slug: "vertical-louver",
      file: "Grasshopper/vertical-louver/index.md",
    },
    {
      slug: "usertext",
      file: "Rhinoceros/usertext/index.md",
    },
    {
      slug: "elefront",
      file: "Grasshopper/elefront/index.md",
    },
    {
      slug: "elefront2",
      file: "Grasshopper/elefront2/index.md",
    },
    {
      slug: "parametric-vase",
      file: "Grasshopper/parametric-vase/index.md",
    },
    {
      slug: "random",
      file: "Grasshopper/random/index.md",
    },
    {
      slug: "rhpython",
      file: "Rhinoceros/rhpython/index.md",
    },
    {
      slug: "tree-parasol",
      file: "Grasshopper/tree-parasol/index.md",
    },
    {
      slug: "parametric-bench",
      file: "Grasshopper/parametric-bench/index.md",
    },
    {
      slug: "mesh-dome",
      file: "Grasshopper/mesh-dome/index.md",
    },
    {
      slug: "remap",
      file: "Grasshopper/remap/index.md",
    },
    {
      slug: "sine-wave",
      file: "Grasshopper/sine-wave/index.md",
    },
    {
      slug: "kumiko-kikyou",
      file: "Grasshopper/kumiko-kikyou/index.md",
    },
    {
      slug: "galapagos",
      file: "Grasshopper/galapagos/index.md",
    },
    {
      slug: "spiral-tower",
      file: "Grasshopper/spiral-tower/index.md",
    },
    {
      slug: "plane-pattern",
      file: "Grasshopper/plane-pattern/index.md",
    },
    {
      slug: "hexagon-dome",
      file: "Grasshopper/hexagon-dome/index.md",
    },
    {
      slug: "waffle-structure",
      file: "Grasshopper/waffle-structure/index.md",
    },
    {
      slug: "paper-sphere",
      file: "Grasshopper/paper-sphere/index.md",
    },
    {
      slug: "waffle2",
      file: "Grasshopper/waffle2/index.md",
    },
    {
      slug: "tree-components",
      file: "Grasshopper/tree-components/index.md",
    },
    {
      slug: "voronoi-tunnel",
      file: "Grasshopper/voronoi-tunnel/index.md",
    },
    {
      slug: "hexagon-pattern",
      file: "Grasshopper/hexagon-pattern/index.md",
    },
    {
      slug: "wave-bench",
      file: "Grasshopper/wave-bench/index.md",
    },
    {
      slug: "waffle-tree",
      file: "Grasshopper/waffle-tree/index.md",
    },
    {
      slug: "vector-field",
      file: "Grasshopper/vector-field/index.md",
    },
    {
      slug: "kangaroo2-dome",
      file: "Grasshopper/kangaroo2-dome/index.md",
    },
    {
      slug: "origami-fold",
      file: "Grasshopper/origami-fold/index.md",
    },
    {
      slug: "metaball-bench",
      file: "Grasshopper/metaball-bench/index.md",
    },
    {
      slug: "random-tilt-surface",
      file: "Grasshopper/random-tilt-surface/index.md",
    },
    {
      slug: "wave-pavilion",
      file: "Grasshopper/wave-pavilion/index.md",
    },
    {
      slug: "ribbon-kangaroo2",
      file: "Grasshopper/ribbon-kangaroo2/index.md",
    },
    {
      slug: "wavy-shelf",
      file: "Grasshopper/wavy-shelf/index.md",
    },
    {
      slug: "twisted-tunnel",
      file: "Grasshopper/twisted-tunnel/index.md",
    },
    {
      slug: "glass-feather",
      file: "Grasshopper/glass-feather/index.md",
    },
    {
      slug: "paper-lamp-shade",
      file: "Grasshopper/paper-lamp-shade/index.md",
    },
    {
      slug: "sphere-dome",
      file: "Grasshopper/sphere-dome/index.md",
    },
    {
      slug: "use-anemone",
      file: "Grasshopper/use-anemone/index.md",
    },
    {
      slug: "twisted-arc-pavilion",
      file: "Grasshopper/twisted-arc-pavilion/index.md",
    },
    {
      slug: "recursive-processing",
      file: "Grasshopper/recursive-processing/index.md",
    },
    {
      slug: "animation",
      file: "Grasshopper/animation/index.md",
    },
    {
      slug: "lunchbox",
      file: "Grasshopper/lunchbox/index.md",
    },
    {
      slug: "windload",
      file: "Grasshopper/windload/index.md",
    },
    {
      slug: "collider",
      file: "Grasshopper/collider/index.md",
    },
    {
      slug: "vector-field-2",
      file: "Grasshopper/vector-field-2/index.md",
    },
    {
      slug: "damped-wave-louver",
      file: "Grasshopper/damped-wave-louver/index.md",
    },
    {
      slug: "spiral-vector-field",
      file: "Grasshopper/spiral-vector-field/index.md",
    },
    {
      slug: "curtain",
      file: "Grasshopper/curtain/index.md",
    },
    {
      slug: "wavy-ball",
      file: "Grasshopper/wavy-ball/index.md",
    },
    {
      slug: "pipe-connection",
      file: "Grasshopper/pipe-connection/index.md",
    },
    {
      slug: "growing-town",
      file: "Grasshopper/growing-town/index.md",
    },
    {
      slug: "voronoi-move",
      file: "Grasshopper/voronoi-move/index.md",
    },
    {
      slug: "deformation-mesh",
      file: "Grasshopper/deformation-mesh/index.md",
    },
    {
      slug: "scale-gradually",
      file: "Grasshopper/scale-gradually/index.md",
    },
    {
      slug: "balls-popping-up",
      file: "Grasshopper/balls-popping-up/index.md",
    },
    {
      slug: "rainbow-bubbles",
      file: "Blender/rainbow-bubbles/index.md",
    },
    {
      slug: "wavy-moving-light",
      file: "Blender/wavy-moving-light/index.md",
    },
    {
      slug: "plasma-ball",
      file: "Blender/plasma-ball/index.md",
    },
    {
      slug: "display-dice-number",
      file: "Grasshopper/display-dice-number/index.md",
    },
    {
      slug: "virus",
      file: "Blender/virus/index.md",
    },
    {
      slug: "voronoi3d-weaverbird-subd",
      file: "Grasshopper/voronoi3d-weaverbird-subd/index.md",
    },
    {
      slug: "cubic-building",
      file: "Grasshopper/cubic-building/index.md",
    },
    {
      slug: "bl-moving-face",
      file: "Blender/bl-moving-face/index.md",
    },
    {
      slug: "gh-moving-face",
      file: "Grasshopper/gh-moving-face/index.md",
    },
    {
      slug: "torus-pattern",
      file: "Grasshopper/torus-pattern/index.md",
    },
    {
      slug: "pipe-generator",
      file: "Grasshopper/pipe-generator/index.md",
    },
    {
      slug: "folded-surface",
      file: "Grasshopper/folded-surface/index.md",
    },
    {
      slug: "rubiks-cube",
      file: "Grasshopper/rubiks-cube/index.md",
    },
    {
      slug: "folding-fan",
      file: "Grasshopper/folding-fan/index.md",
    },
    {
      slug: "falling-ball",
      file: "Grasshopper/falling-ball/index.md",
    },
    {
      slug: "ribbon-object",
      file: "Grasshopper/ribbon-object/index.md",
    },
    {
      slug: "popping-sphere-animation",
      file: "Threejs/popping-sphere-animation/index.md",
    },
    {
      slug: "surf-deformation-pattern",
      file: "Grasshopper/surf-deformation-pattern/index.md",
    },
    {
      slug: "elefront1",
      file: "Grasshopper/elefront1/index.md",
    },
    {
      slug: "elefront2-2",
      file: "Grasshopper/elefront2-2/index.md",
    },
    {
      slug: "api-ghpython",
      file: "Grasshopper/api-ghpython/index.md",
    },
    {
      slug: "bend-deform",
      file: "Grasshopper/bend-deform/index.md",
    },
    {
      slug: "three-grasshopper",
      file: "Grasshopper/three-grasshopper/index.md",
    },
    {
      slug: "r3f-ifcjs",
      file: "Threejs/r3f-ifcjs/index.md",
    },
    {
      slug: "gallery",
      file: "Threejs/gallery/index.md",
    },
    {
      slug: "hops-spreadsheet",
      file: "Grasshopper/hops-spreadsheet/index.md",
    },
    {
      slug: "random-values",
      file: "Grasshopper/random-values/index.md",
    },
    {
      slug: "circle-packing",
      file: "Grasshopper/circle-packing/index.md",
    },
    {
      slug: "broken-sphere",
      file: "Grasshopper/broken-sphere/index.md",
    },
    {
      slug: "wavy-bowl",
      file: "Grasshopper/wavy-bowl/index.md",
    },
    {
      slug: "grasshopper-threejs",
      file: "Grasshopper/grasshopper-threejs/index.md",
    },
    {
      slug: "gltf",
      file: "Rhinoceros/gltf/index.md",
    },
    {
      slug: "rhino-plugin-gltf",
      file: "Rhinoceros/rhino-plugin-gltf/index.md",
    },
  ];
  