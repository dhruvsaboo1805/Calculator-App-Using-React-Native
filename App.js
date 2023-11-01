import { View, Text, Switch, Touchable, TouchableOpacityBase, TouchableOpacity } from 'react-native'

import React, { useState } from 'react'

export default function App() {

  const [darktheme, setdarktheme] = useState(false);
  const [result, setResult] = useState('dfff');


  const calculate = (title) => {

    if(title == "C")
    {
      setResult('');

    }
    else if(title == "DL"){
      setResult(result.substring(0 , result.length - 1));
    }
    else if(title == '=')
    {
      const ans = Number(eval(result).toFixed(3)).toString()
      setResult(ans);
      setResult(eval(result));
    }
    else{
      setResult(result + title);
    }
  }
  const getColor = (light, dark) => darktheme ? dark : light;

  const getBtnColor = (type) => {
    if(type == "top")
    {
      return '#35fbd6'
    }
    else if(type == "right")
    {
      return '#eb6363'
    }
    else{
      return getColor(colors.dark , colors.light)
    }
  }
  const colors = {
    dark: '#222520',
    dark1: '#292836',
    dark2: '#272833',
    light: '#fff',
    light1: '#f1f1f1',
    light2: '#f7f7f7'
  }

  const Btn = ({title , type}) =>
  (
    <TouchableOpacity onPress = {() => calculate(title)}style={{ paddingRight: 10, borderRadius: 10, elevation: 2, backgroundColor: getColor(colors.light1, colors.dark2), height: 60, width: 60, margin: 19 }}>
      <Text style={{ fontSize: 37, color: 'black', textAlign: 'center', textAlignVertical: 'center', color : getBtnColor(type)}}>{title}</Text>
    </TouchableOpacity>
  )
  return (
    <View style={{ height: '100%', width: '100%', paddingVertical: 20, backgroundColor: getColor(colors.light, colors.dark), alignItems: 'center' }}>


      <Switch style = {{paddingTop : 20}}value={darktheme} onValueChange={() => setdarktheme(!darktheme)} thumbColor={getColor(colors.dark, colors.light)} trackColor={{ true: colors.light2, false: colors.dark2}}></Switch>

      <Text style={{ fontSize: 40, color: getColor(colors.dark, colors.light), width: '100%', textAlign: 'right', paddingRight: 20 , marginTop : 165 , paddingBottom : 45}}>{result}</Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' , justifyContent : 'center' , backgroundColor : getColor(colors.light1 , colors.dark1) , borderTopRightRadius : 20 , borderTopLeftRadius : 20 , borderBottomLeftRadius : 20 , borderBottomRightRadius : 20}}>
        <Btn title="C"  type = "top"/>
        <Btn title="DL" type = "top"/>
        <Btn title="/" type = "top"/>
        <Btn title="%" type = "top"/>
        <Btn title="7" type = "number"/>
        <Btn title="8" type = "number"/>
        <Btn title="9" type = "number"/>  
        <Btn title="*" type = "right"/>
        <Btn title="4" type = "number"/>
        <Btn title="5" type = "number"/>
        <Btn title="6" type = "number"/>
        <Btn title="-" type = "right"/>
        <Btn title="1" type = "number"/>
        <Btn title="2" type = "number"/>
        <Btn title="3" type = "number"/>
        <Btn title="+" type = "right"/>
        <Btn title="00" type = "number"/>
        <Btn title="0" type = "number"/>
        <Btn title="." type = "number"/>
        <Btn title="=" type = "right"/>
      </View>
    </View>


  )
}