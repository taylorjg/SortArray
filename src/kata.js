function sortArray(xs) {

    function swap(i1, i2) {
        const t = xs[i2];
        xs[i2] = xs[i1];
        xs[i1] = t;
        return true;
    }

    for (;;) {
        let swapped = false;
        for (let i = 0; i + 1 < xs.length; i++) {
            if (xs[i] > xs[i + 1]) {
                swapped = swap(i, i + 1);
            }
        }
        if (!swapped) break;
    }
    return xs;
}

module.exports = {
    sortArray: sortArray
}
