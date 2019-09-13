const dogs = new Map();
dogs.set('snickers', 3);
dogs.set('Sunny', 2);
dogs.set('Huda', 10);

dogs.forEach((val, key) => console.log(val, key))

for (const [val, key] of dogs) {
  console.log(val, key);
}
