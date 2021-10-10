console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const fruits = [`apple`, `banana`, `pear`, `melon`];
  console.log(fruits[0]);
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  const fruits = [`apple`, `banana`, `pear`];
  function removeFirst(fruits){
   }
   console.log(fruits.shift());
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const fruits = [`apple`, `banana`, `pear`, `lemon`];
  const last = fruits[fruits.length -1];
  console.log(last);
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  const fruits = [`apple`, `banana`, `pear`];
  function removeFirst(fruits){
   }
   console.log(fruits.pop());
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  const countrys = [`Portugal`, `Norway`, `Brasil`];
  console.log(countrys.length);
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  const countrys = [`Portugal`, `Norway`, `Brasil`, `Lithuania`];
  function lastIndex(countrys){
    console.log((countrys.length - 1));
}
lastIndex(countrys);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elementų indeksus eilutėmis');
{
  const countrys = [`Portugal`, `Norway`, `Brasil`, `Lithuania`];
  function indexes(countrys) {
    for (let i = 0; i < countrys.length; i++) 
    console.log(i);
  }
indexes(countrys);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const countrys = [`Portugal`, `Norway`, `Brasil`, `Lithuania`];
  function values(countrys) {
    for (let i = 0; i < countrys.length; i++) 
    console.log(countrys[i]);
  }
values(countrys);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
  const countrys = [`Portugal`, `Norway`, `Brasil`, `Lithuania`];
  countrys.forEach((x, i) => console.log(`[${i}] => ${x}`));
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const arr = [2, 4, 7, 5, 6];
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    const fruits = ["apple", "cherry", "pear"];
    function indexInLine(fruits){
      const index = []
      for (let i = 0; i < fruits.length; i++) {
        index.push(i)
      }
      return console.log(...index)
    }
    indexInLine(fruits)
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  const colors = ['red','black','blue','yellow','white'];
  const str = colors.join(',' + ' ');
  console.log(str);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
  const array = [18, 7, 853, 44, 623, 4];
  array.map(function(array, index){
console.log(`${index} => ${array}`)
  });
}
console.groupEnd();
