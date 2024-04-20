import { UNIT } from "../constant";

function getOppositUnit(unit) {
    return unit == UNIT.Celcius ? UNIT.Faranheit : UNIT.Celcius;
}

function convertTemperatureTo(unit, value) {
    if (unit == UNIT.Celcius) {
        return (value - 32) / 1.8

    }
    else {
        return value * 1.8 + 32;
    }
}

function isIceTemperature(value, unit){
    if(unit == UNIT.Celcius){
        return value <=0
    }
    else{
        return value <=32
    }
}

export { getOppositUnit, convertTemperatureTo, isIceTemperature }