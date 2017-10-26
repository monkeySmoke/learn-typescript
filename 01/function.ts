/**
 * Created by yanyuan on 2017/10/26.
 */
function sum(x: number, y:number):number {
    return x + y ;
}
sum(1, 2)

let mySum: (x:number, y:number) => number = function (x: number, y:number):number {
    return x + y
}
interface SearchFun {
    (source: string, subString: string): boolean
}
let mySearch:SearchFun
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1 ;
}

function sum2(x: number, y?: number) {
    if(y) {
        return x + y
    } else {
        return x
    }
}
function sum3(x: number = 1, y:number) {
    return x + y
}