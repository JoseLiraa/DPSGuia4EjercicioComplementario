import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Result(props){
    const { salario, setSalarioNeto, salarioNeto, nombre, errorMessage } = props;

    const descuentoISS=salario*0.03;
    const descuentoAFP=salario*0.04;
    const descuentoRenta=salario*0.05;

    return(
        <View style={styles.content}>
            <Text style={styles.title}>RESUMEN</Text>
                <View style={styles.boxResult}>
                    <DataResult title="Nombre del empleado: " value={`${nombre}`}/>
                    <DataResult title="Descuentos %: " value={`(AFP-4%, ISS-3%, Renta-5%)`}/>
                    <DataResult title="Descuento AFP: " value={`-${descuentoAFP} $`}/>
                    <DataResult title="Descuento ISS: " value={`-${descuentoISS} $`}/>
                    <DataResult title="Descuento Renta: " value={`-${descuentoRenta} $`}/>
                    <DataResult title="Salario base: " value={`${salario} $`}/>
                    <DataResult title="Salario neto: " value={`${salarioNeto} $`}/>
                </View>
            <Text style={styles.error}>{errorMessage}</Text>
        </View>
    );
}

function DataResult(props){
    const { title, value } = props;

    return(
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    content:{
        marginHorizontal:40,
    },
    boxResult:{
        padding:30,
    },
    title:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom: 20,
    },
    value:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error:{
        textAlign: 'center',
        color:'#f00',
        fontWeight:'bold',
        fontSize: 20,
    },
});