module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }
var arrUnits = [
        '',
        ' one',
        ' two',
        ' three',
        ' four',
        ' five',
        ' six',
        ' seven',
        ' eight',
        ' nine'
      ],
    arrFirstDozens = [
        ' ten',
        ' eleven',
        ' twelve',
        ' thirteen',
        ' fourteen',
        ' fifteen',
        ' sixteen',
        ' seventeen',
        ' eighteen',
        ' nineteen'
    ],
    arrDozens = [
        '',
        ' twenty',
        ' thirty',
        ' forty',
        ' fifty',
        ' sixty',
        ' seventy',
        ' eighty',
        ' ninety'
    ],
    arrHundreds = [
        '',
        'one hundred',
        'two hundred',
        'three hundred',
        'four hundred',
        'five hundred',
        'six hundred',
        'seven hundred',
        'eight hundred',
        'nine hundred'
    ],
    result = '',
    arrNumber = '';
    if (number < 10){
        arrNumber = ("00"+number).split("");
    }
    if (number < 100 && number >= 10){
        arrNumber = ("0"+number).split("");
    }
    if (number >= 100){
        arrNumber = (""+number).split("");
    }
    if (arrNumber[0] !== undefined) {
        result = arrHundreds[arrNumber[0]];
    }
    if (arrNumber[1] !== undefined) {
        if (arrNumber[1] === '1') {
            result += arrFirstDozens[arrNumber[2]];
        } else if (arrNumber[1] === '0'){

        } else {
            result += arrDozens[arrNumber[1] - 1];
        }
    }
    if (arrNumber[2] !== undefined && arrNumber[1] !== '1') {
        result += arrUnits[arrNumber[2]];
    }
    return result.trim();
}
