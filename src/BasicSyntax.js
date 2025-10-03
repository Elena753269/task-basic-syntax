export function romanToInteger(str) {
    let result = 0;
    let check = 0;

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'I':
                result += check < 1 ? 1 - 2 * check : 1;
                check = 1;
                break;
            case 'V':
                result += check < 5 ? 5 - 2 * check : 5;
                check = 5;
                break;
            case 'X':
                result += check < 10 ? 10 - 2 * check : 10;
                check = 10;
                break;
            case 'L':
                result += check < 50 ? 50 - 2 * check : 50;
                check = 50;
                break;
            case 'C':
                result += check < 100 ? 100 - 2 * check : 100;
                check = 100;
                break;
            case 'D':
                result += check < 500 ? 500 - 2 * check : 500;
                check = 500;
                break;
            case 'M':
                result += check < 1000 ? 1000 - 2 * check : 1000;
                check = 1000;
                break;
            default:
                break;
        }
    }

    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    return result;
}
