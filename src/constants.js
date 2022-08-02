export const sun = {
  size: 16, 
  texturePath: 'img/sun.jpeg',
  rotation: 0.004,
}

export const planets = [
  {name: 'mercury', size: 3.2, position: 28, rotation: { self: 0.004, aroundSun: 0.04, obliquity: 0.0017}, texturePath: 'img/mercury.jpeg' },
  {name: 'venus', size: 5.8, position: 44, rotation: { self: 0.002, aroundSun: 0.015, obliquity: 3.09, clockwise: true}, texturePath: 'img/venus.jpeg'},
  {name: 'earth', size: 6, position: 62, rotation: { self: 0.02, aroundSun: 0.01, obliquity: 0.4}, texturePath: 'img/earth.jpeg'},
  {name: 'mars', size: 4, position: 78, rotation: { self: 0.018, aroundSun: 0.008, obliquity: 0.436}, texturePath: 'img/mars.jpeg'},
  {name: 'jupiter', size: 12, position: 100, rotation: { self: 0.04, aroundSun: 0.002, obliquity: 0.052}, texturePath: 'img/jupiter.jpeg'},
  {name: 'saturn', size: 10, position: 138, rotation: { self: 0.038, aroundSun: 0.0009, obliquity: 0.47}, texturePath: 'img/saturn.jpeg', ring: {innerRadius: 10, outerRadius: 20, texturePath: 'img/saturn-ring.png'}},
  {name: 'uranus', size: 7, position: 176, rotation: { self: 0.03, aroundSun: 0.0004, obliquity: 1.71}, texturePath: 'img/uranus.jpeg', ring: {innerRadius: 7, outerRadius: 12, texturePath: 'img/uranus-ring.png'}},
  {name: 'neptune', size: 7, position: 200, rotation: { self: 0.032, aroundSun: 0.0001, obliquity: 0.52}, texturePath: 'img/neptune.jpeg'},
  {name: 'pluto', size: 2.8, position: 216, rotation: { self: 0.008, aroundSun: 0.00007, obliquity: 2.09}, texturePath: 'img/pluto.jpeg'},
]