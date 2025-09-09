'use strict';

/**
 * Функция, сортирующая массив строк по длине, а при одинаковой длине - по алфавиту
 * @param {string[]} array массив строк для сортировки
 * 
 * @example
 * // returns ["fig", "kiwi", "apple", "grape", "banana"]
 * sortByLength(["apple", "banana", "kiwi", "fig", "grape"]);
 * 
 * @example  
 * // returns ["ant", "bat", "cat", "dog"]
 * sortByLength(["cat", "bat", "ant", "dog"]);
 * 
 * @returns {string[]} новый отсортированный массив строк
 */
const sortByLength = (array) => {
    if (!Array.isArray(array)) {
        throw new TypeError('Input must be an array');
    }
    return [...array].sort((a, b) =>
        a.length - b.length || a.localeCompare(b)
    );
}