import sunObj from './img/sun.jpeg'
import mercury from './img/mercury.jpeg';
import venus from './img/mercury.jpeg';
import earth from './img/earth.jpeg';
import mars from './img/mercury.jpeg';
import jupiter from './img/jupiter.jpeg';
import saturn from './img/saturn.jpeg';
import saturnRing from './img/saturn-ring.png';
import uranus from './img/uranus.jpeg';
import uranusRing from './img/uranus-ring.png';
import neptune from './img/neptune.jpeg';
import pluto from './img/pluto.jpeg';

export const sun = {
  name: 'sun',
  size: 16, 
  texturePath: sunObj,
  rotation: 0.004,
  yearLength: 230,
  yearLengthUnit: 'million earth year',
  description: "Sun is a yellow dwarf star at the center of our solar system."
};

export const planets = [
  {name: 'mercury', size: 3.2, position: 28, rotation: { self: 0.004, aroundSun: 0.04, obliquity: 0.0017}, texturePath: mercury },
  {name: 'venus', size: 5.8, position: 44, rotation: { self: 0.002, aroundSun: 0.015, obliquity: 3.09, clockwise: true}, texturePath: venus},
  {name: 'earth', size: 6, position: 62, rotation: { self: 0.02, aroundSun: 0.01, obliquity: 0.4}, texturePath: earth},
  {name: 'mars', size: 4, position: 78, rotation: { self: 0.018, aroundSun: 0.008, obliquity: 0.436}, texturePath: mars},
  {name: 'jupiter', size: 12, position: 100, rotation: { self: 0.04, aroundSun: 0.002, obliquity: 0.052}, texturePath: jupiter},
  {name: 'saturn', size: 10, position: 138, rotation: { self: 0.038, aroundSun: 0.0009, obliquity: 0.47}, texturePath: saturn, ring: {innerRadius: 10, outerRadius: 20, texturePath: saturnRing}},
  {name: 'uranus', size: 7, position: 176, rotation: { self: 0.03, aroundSun: 0.0004, obliquity: 1.71}, texturePath: uranus, ring: {innerRadius: 7, outerRadius: 12, texturePath: uranusRing}},
  {name: 'neptune', size: 7, position: 200, rotation: { self: 0.032, aroundSun: 0.0001, obliquity: 0.52}, texturePath: neptune},
  {name: 'pluto', size: 2.8, position: 216, rotation: { self: 0.008, aroundSun: 0.00007, obliquity: 2.09}, texturePath: pluto},
];

export const details  = {
  mercury: {
    name: "mercury",
    description: "The smallest planet and closest to the Sun.",
    moons: 0,
    yearLength: 248.89,
    yearLengthUnit: 'earth day',
  },
  venus: {
    name: 'venus',
    description: "The hottest planet with a thick, toxic atmosphere.",
    moons: 0,
    yearLength: 225,
    yearLengthUnit: 'earth day',
  },
  earth: {
    name: 'earth',
    description: "The only world with liquid water on the surface.",
    moons: 1,
    yearLength: 365.25,
    yearLengthUnit: 'day',
  },
  mars: {
    name: 'mars',
    description: "The second-smallest planet with a very thin atmosphere made of carbon dioxide, nitrogen, and argon.",
    moons: 2,
    yearLength: 1.88,
    yearLengthUnit: 'earth year',
  },
  jupiter: {
    name: 'jupiter',
    description: "Jupiter is more than twice as massive as all the other planets combined.",
    moons: 79,
    yearLength: 11.86,
    yearLengthUnit: 'earth year',
  },
  saturn: {
    name: 'saturn',
    description: "Saturn is a gas-giant planet with the most spectacular ring system.",
    moons: 62,
    yearLength: 29.45,
    yearLengthUnit: 'earth year',
  },
  uranus: {
    name: 'uranus',
    description: "Uranus is an ice giant and the first planet found with the aid of a telescope.",
    moons: 27,
    yearLength: 84,
    yearLengthUnit: 'earth year',
  },
  neptune: {
    name: 'neptune',
    description: "The only planet in our solar system not visible to the naked eye.",
    moons: 0,
    yearLength: 225,
    yearLengthUnit: 'earth year',
  },
  pluto: {
    name: 'pluto',
    description: "Pluto is a dwarf planet in the Kuiper Belt.",
    moons: 5,
    yearLength: 248.89,
    yearLengthUnit: 'earth year',
  },
};