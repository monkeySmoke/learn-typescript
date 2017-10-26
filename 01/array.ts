/**
 * Created by yanyuan on 2017/10/26.
 */
let array: (number | string)[] = [1, '2', 3];
let array2: number[] = [1, 2, 3];
let array3: Array<number> = [1, 2, 3];

interface NumberArray {
    [index: number]: number
}

let array4: NumberArray = [1, 2, 3];

let array5: any[] = [1, '2', {web: 'test'}];