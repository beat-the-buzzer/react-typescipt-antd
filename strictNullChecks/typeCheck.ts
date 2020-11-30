// 类型检测

let height: number;
height = 100;
height = '100'; // 报错

// 下面两行 是把空类型赋值给数字类型，TS语法是允许的 但是不推荐使用，所以需要加 strictNullChecks 配置
height = undefined; 
height = null;

let width: number;

// 不允许使用未赋值的变量
if(width === 0) {

}

// 不确定类型的时候 可以使用或
let weight:  number | string;
weight = 100;
weight = '100kg';

// undefined 和 null 两个空类型在使用上不方便 使用 strictNullChecks 去进行严格校验，让代码更安全