import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { s } from './App.style';
import hotBackground from './assets/hot.png';
import coldBackground from './assets/cold.png';
import { InputTemperaure } from './components/InputTemperature/InputTemperature';
import { TemperatureDisplay } from './components/TemperatureDisplay/TemperatureDisplay';
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNIT } from './constant';
import { getOppositUnit, convertTemperatureTo, isIceTemperature } from './services/temperature-service';
import { ButtonConvert } from './components/ButtonConvert/ButtonConvert';

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBackground, setCurrentBackground] = useState();
  const oppositUnit = getOppositUnit(currentUnit);

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIceTemperature(temperatureAsFloat, currentUnit);
      setCurrentBackground(isColdBackground ? coldBackground : hotBackground);
    }
  }, [inputValue, currentUnit]); 
  

  function getConvertedTemperature(){
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat) 
    ? "" 
    : convertTemperatureTo(oppositUnit, valueAsFloat).toFixed(1);
  }

  console.log('oppositUnit:', oppositUnit);

  return (
    <ImageBackground source={currentBackground} style={s.container}>
      <View style={s.workspace}>

        <TemperatureDisplay 
        value={getConvertedTemperature(oppositUnit,inputValue)} 
        unit={(oppositUnit)}
        />

        <InputTemperaure 
        onChangeText={setInputValue} 
        defaultValue={DEFAULT_TEMPERATURE} 
        UNIT={currentUnit}
        />

        <View>
          <ButtonConvert onPress={()=>{
            setCurrentUnit(oppositUnit);
          }} UNIT={currentUnit} />
        </View>
      </View>
    </ImageBackground>
  );
}


