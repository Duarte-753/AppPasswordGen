import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";

export function ModalPassword(){
    return(
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.title}>Senha gerada</Text>

                <Pressable style={style.innerPassword}>
                    <Text style={style.textPassword}>sdsadas12</Text>
                </Pressable>

                <View style={style.buttonArea}>
                   <TouchableOpacity style={style.button}>
                     <Text>Voltar</Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={style.button}>
                     <Text>Salvar senha</Text>
                   </TouchableOpacity>
                </View>
            </View>            
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24,24,24,0.6)',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor:"#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title:{
        fontSize: 20,
        fontWeight:"bold",
        color:"#000",
        marginBottom: 24,
    },
    innerPassword:{
        backgroundColor:"#0e0e0",
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderRadius: 8  
    },
    textPassword:{
        color: "#FFF",
        textAlign:'center'
    }
})