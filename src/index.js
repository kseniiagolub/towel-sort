module.exports = function towelSort(matrix) {
    if (matrix) {
        for (let i = 1; i < matrix.length; i += 2) {
            matrix[i] = matrix[i].reverse();
        }
        return matrix.flat();
    }
    return [];
}
