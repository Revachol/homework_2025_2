'use strict';

/**
 * Функция, сортирующая массив строк по длине, а при одинаковой длине - по алфавиту
 * @param {Array<String>} arr - массив строк для сортировки
 * 
 * @example
 * // returns ["fig", "kiwi", "apple", "grape", "banana"]
 * sortByLength(["apple", "banana", "kiwi", "fig", "grape"]);
 * 
 * @example  
 * // returns ["ant", "bat", "cat", "dog"]
 * sortByLength(["cat", "bat", "ant", "dog"]);
 * 
 * @returns {Array<String>} новый отсортированный массив строк
 */

function sortByLength(arr) {
    const sortedArray = arr.slice();
    sortedArray.sort((a, b) => {
        const lengthDifference = a.length - b.length;
        if (lengthDifference !== 0) {
            return lengthDifference;
        }
        return a.localeCompare(b);
    });
    return sortedArray;
}