/**
 * Created by yanyuan on 2017/10/26.
 */
interface Person {
    readonly id: number;
    name: string;
    age: number;
    [propName: string]: any;
}

let my: Person = <Person>{
    id: 1,
    name: '123',
    age: 1,
}