// BDD для функции pow
describe("pow", function() {

    it("возводит в n-ю степень", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("при возведении 2 в 3ю степень результат 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("при возведении 3 в 4ю степень равен 81", function() {
        assert.equal(pow(3, 4), 81);
    });

    function makeTest(x) {
        var expected = x * x * x;
        it("при возведении " + x + " в степень 3 результат: " + expected, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (var x = 1; x <= 5; x++) {
        makeTest(x);
    }

    describe("возводит x в степень n", function() {

        function makeTest(x) {
            var expected = x * x * x;
            it("при возведении " + x + " в степень 3 результат: " + expected, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    // ... расширение спецификации
    // Конечно, новые тесты не проходят, так как наша реализация ещё не поддерживает их.
    // Так и задумано: сначала написали заведомо не работающие тесты, а затем пишем реализацию под них.

    it("при возведении в отрицательную степень результат NaN", function() {
        assert(isNaN(pow(2, -1)));
    });

    it("при возведении в дробную степень результат NaN", function() {
        assert(isNaN(pow(2, 1.5)));
    });

    //-------------------------------------

    describe("Тест", function() {

        before(function() { alert("Начало тестов"); });
        after(function() { alert("Конец тестов"); });

        beforeEach(function() { alert("Вход в тест"); });
        afterEach(function() { alert("Выход из теста"); });

        it('тест 1', function() { alert('1'); });
        it('тест 2', function() { alert('2'); });

        // Начало тестов
        // Вход в тест
        // 1
        // Выход из теста
        // Вход в тест
        // 2
        // Выход из теста
        // Конец тестов


        // assert(value) – проверяет что value является true в логическом контексте.
        // assert.equal(value1, value2) – проверяет равенство value1 == value2.
        // assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.
        //     assert.notEqual, assert.notStrictEqual – проверки, обратные двум предыдущим.
        // assert.isTrue(value) – проверяет, что value === true
        // assert.isFalse(value) – проверяет, что value === false
        //

    });


});

