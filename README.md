# test-array-shifts
[TEST] Array shifting

## Task 2
Дан одномерный массив длиной ​N ​случайно заполнен числами все из которых являются степенями двойки. Над массивом можно выполнить две операции: сдвиг влево и вправо.
При сдвиге влево (вправо) два рядом стоящих одинаковых числа суммируются и новое значение помещается в левую (правую) ячейку. Значения в массиве которые находились правее (левее) сдвигаются на одну позицию влево (вправо).

```diff
! [1,4,16,8,​8​,2,1]
# влево
- [1,4,16,​16​,2,1]
# вправо
+ [1,4,​32,​2,1]
```

Найти последовательность сдвигов, которая приведет к минимальной длине
массива.
### Технические требования
Node.js, JS || TS, все параметры передаются через командную строку, несколько unit тестов, любые библиотеки из npm, cli-интерфейс, unittests

## Комментарии

1. В задаче не сформулировано что при сдвиге вправо или влево одинаковое число должно стоять именно справа или слева и вообще все ли пары "сливаются" при каждом сдвиге? Если сливаются все пары, то вообще говоря правый и левый сдвиг становятся тождественными и надо просто найти количество сдвигов. Например, `[1,1,4,16,8,8]` вправо -> `[2,4,16,16]`, и влево -> `[2,4,16,16]` :question:
2. Или у каждого сдвига должен быть еще индекс ячейки которую мы сдвигаем? В условиях написано "над массивом" - значит сдвигается весь массив :sparkles: .
3. Из примера и описание, непонятно можно ли "сдвинуть" и что при этом происходит, если в массиве нет соседних одинаковых чисел? Он не сдвигается, или прокручивается? Если прокручивается, то `[1,4,16,1]` -> вправо -> `[1,1,4,16]`.
4. Может это не алгоритмическая задачка, а на структуры данных? Или какое-то ограничение на BigO или использование памяти :confused:


### Это просто для меня

| Число в десятичной СС | Степень числа 2 | Число в двоичной |
| --------------------: | :-------------: | :--------------: |
|                     1 |  2<sup>0</sup>  |       `1`        |
|                     2 |  2<sup>1</sup>  |       `10`       |
|                     4 |  2<sup>2</sup>  |      `100`       |
|                     8 |  2<sup>3</sup>  |      `1000`      |
|                    16 |  2<sup>4</sup>  |     `10000`      |
|                    32 |  2<sup>5</sup>  |     `100000`     |
|                    64 |  2<sup>6</sup>  |    `1000000`     |
|                   128 |  2<sup>7</sup>  |    `10000000`    |
|                   256 |  2<sup>8</sup>  |   `100000000`    |
|                   512 |  2<sup>9</sup>  |   `1000000000`   |
|                  1024 | 2<sup>10</sup>  |  `10000000000`   |
