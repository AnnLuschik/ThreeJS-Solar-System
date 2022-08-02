export const sun = {
  size: 16, 
  texturePath: 'img/sun.jpeg',
}

export const planets = [
  {name: 'mercury', size: 3.2, position: 28, rotation: { self: 0.004, aroundSun: 0.04}, texturePath: 'img/mercury.jpeg'},
  {name: 'venus', size: 5.8, position: 44, rotation: { self: 0.002, aroundSun: 0.015}, texturePath: 'img/venus.jpeg'},
  {name: 'earth', size: 6, position: 62, rotation: { self: 0.02, aroundSun: 0.01}, texturePath: 'img/earth.jpeg'},
  {name: 'mars', size: 4, position: 78, rotation: { self: 0.018, aroundSun: 0.008}, texturePath: 'img/mars.jpeg'},
  {name: 'jupiter', size: 12, position: 100, rotation: { self: 0.04, aroundSun: 0.002}, texturePath: 'img/jupiter.jpeg'},
  {name: 'saturn', size: 10, position: 138, rotation: { self: 0.038, aroundSun: 0.0009}, texturePath: 'img/saturn.jpeg', ring: {innerRadius: 10, outerRadius: 20, texturePath: 'img/saturn-ring.png'}},
  {name: 'uranus', size: 7, position: 176, rotation: { self: 0.03, aroundSun: 0.0004}, texturePath: 'img/uranus.jpeg', ring: {innerRadius: 7, outerRadius: 12, texturePath: 'img/uranus-ring.png'}},
  {name: 'neptune', size: 7, position: 200, rotation: { self: 0.032, aroundSun: 0.0001}, texturePath: 'img/neptune.jpeg'},
  {name: 'pluto', size: 2.8, position: 216, rotation: { self: 0.008, aroundSun: 0.00007}, texturePath: 'img/pluto.jpeg'},
]