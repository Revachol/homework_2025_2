'use strict';

QUnit.module("Тестируем функцию sortByLength", function () {
    QUnit.test("Правильно сортирует строки по длине", function (assert) {
        const result = sortByLength(["apple", "banana", "kiwi", "fig", "grape"]);

        assert.deepEqual(result, ["fig", "kiwi", "apple", "grape", "banana"], "Строки должны быть отсортированы по длине.");
    });

    QUnit.test("Правильно сортирует строки с одинаковой длиной", function (assert) {
        const result = sortByLength(["cat", "bat", "ant", "dog"]);

        assert.deepEqual(result, ["ant", "bat", "cat", "dog"], "Строки с одинаковой длиной должны быть отсортированы в алфавитном порядке.");
    });

    QUnit.test("Правильно сортирует массив с одной строкой", function (assert) {
        const result = sortByLength(["hello"]);

        assert.deepEqual(result, ["hello"], "Массив с одной строкой должен вернуть ту же строку.");
    });
    QUnit.test("Правильно сортирует пустой массив", function (assert) {
        const result = sortByLength([]);
        assert.deepEqual(result, [], "Пустой массив должен вернуть пустой массив.");
    });

    QUnit.test("Правильно сортирует сложный случай с разными длинами и одинаковыми длинами", function (assert) {
        const result = sortByLength(["zz", "aa", "bbb", "ccc", "a", "b", "c", "dddd"]);
        assert.deepEqual(
            result,
            ["a", "b", "c", "aa", "zz", "bbb", "ccc", "dddd"],
            "Сначала короткие строки, при одинаковой длине - алфавитный порядок."
        );
    });
});
