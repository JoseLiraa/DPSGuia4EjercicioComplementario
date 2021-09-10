/*
 * @format
* @flow strict-local
*/
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
}from 'react-native';

import colors from './src/utils/colors';
import Forms from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App() {

  const [salario, setSalario] = useState(0);
  const [salarioNeto, setSalarioNeto] = useState(0);
  const [nombre, setNombre] = useState('');
  const [errorMessage, setErrorMessage]=useState('');

  const calculate = () => {
    reset();
    if(nombre==""){
      setErrorMessage('Ingrese el nombre empleado');
    }else if(salario=="" || salario<0){
      setErrorMessage('Ingrese un salario base');
    } else{
        let descuentos = (salario*0.03)+(salario*0.04)+(salario*0.05);
        let salNeto= parseFloat(salario-descuentos);
        setSalarioNeto(salNeto)
    }
  };

  useEffect(()=>{
    if(nombre && salario) calculate();
    else reset();
  },[nombre, salario]);


  const reset = () => {
    setErrorMessage("");
    setSalarioNeto(0);
  };

  return (
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.background} />
      <Text style={styles.titleApp}>Cotizador de salario neto</Text>
      <Forms
            setSalario={setSalario}
            setNombre={setNombre}
      />
    </SafeAreaView>
    <Result
      salario={salario}
      setSalarioNeto={setSalarioNeto}
      salarioNeto={salarioNeto}
      nombre={nombre}
      errorMessage={errorMessage}
    />
    <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});