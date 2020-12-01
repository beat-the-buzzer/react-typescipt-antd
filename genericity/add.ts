// function add(arg1: any, arg2: any): any {
//   return arg1 + arg2;
// }

// 两个参数的类型都是一样的  返回的类型和参数的类型也是一样的
function add<T>(arg1: T, arg2: T): T {
  return arg1 + arg2;
}

add<number>(1, 2); // 指定T是number类型
add<string>('1', '2');

// <T>(arg1: T, arg2: T) => T  // 作为一种数据类型

// 泛型接口
let st: string;
// let addFunc: <T>(arg1: T, arg2: T) => T;
// let addFunc: { <T>(arg1: T, arg2: T) :T };
// addFunc = add; // 函数的格式要符合上面的声明

interface GenAdder { <T>(arg1: T, arg2: T) :T }; // 定义泛型接口

let addFunc: GenAdder; // 写法就和let st: string是类似的
addFunc = add;
addFunc<number>(1, 2);
addFunc<string>('1', '2');

// 在声明的时候 就可以指定类型 
interface GenAdder1<T> {(arg1: T, arg2: T): T};
let addFunc1: GenAdder1<string>;
addFunc1('1', '2');

//泛型类
class Adder<T> {
  add: (arg1: T, arg2: T) => T;
}
const adder = new Adder<number>();
adder.add = function add(arg1, arg2) {
  return arg1 + arg2;
}
adder.add(1, 2);

const stringAdder = new Adder<string>();
stringAdder.add = function add(arg1, arg2) {
  return arg1 + arg2;
}
stringAdder.add('1', '2');
// function add 可以单独拿出去

// 泛型约束 例子1
interface ILength {
  length: number
}
// 让T继承ILength，保证T有length属性
function getLength<T extends ILength>(arg: T): T {
  console.log(arg.length); // arg可能没有length属性
  return arg;
}
getLength(0); // 报错，没有length属性
getLength([]);; // 有length属性

// 例子2
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
// keyof 取出对象的key 组成一个联合类型
const people = {
  name: 'Jame',
  age: 18,
};
let keys: keyof typeof people;
getProperty(people, 'name');
