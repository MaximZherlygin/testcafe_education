class ArrayUtils {

    static isArraySorted(arr, reverse=false) {
        if (!reverse) {
            return arr.every((value, idx, arr) => !idx || arr[idx-1] <= value);
        } else {
            return arr.every((value, idx, arr) => !idx || arr[idx-1] >= value);
        }
    }

}

export { ArrayUtils };