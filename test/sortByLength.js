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

    QUnit.test("Выбрасывает ошибку когда входной параметр не массив", function (assert) {
        assert.throws(
            () => sortByLength("not an array"),
            "Должна быть ошибка для строки"
        );

        assert.throws(
            () => sortByLength(123),
            "Должна быть ошибка для числа"
        );

        assert.throws(
            () => sortByLength({}),
            "Должна быть ошибка для объекта"
        );

        assert.throws(
            () => sortByLength(null),
            "Должна быть ошибка для null"
        );

        assert.throws(
            () => sortByLength(undefined),
            "Должна быть ошибка для undefined"
        );
    });

    QUnit.test("Выбрасывает ошибку когда массив содержит числа", function (assert) {
        assert.throws(
            () => sortByLength(["a", 2, "b"]),
            "Должна быть ошибка для смешанного массива с числами"
        );
    });

    QUnit.test("Выбрасывает ошибку когда массив содержит null или undefined", function (assert) {
        assert.throws(
            () => sortByLength([null, "text"]),
            "Должна быть ошибка для массива с null"
        );

        assert.throws(
            () => sortByLength([null, undefined, "text"]),
            "Должна быть ошибка для массива с null и undefined"
        );
    });
});
