import React from "react";
import {View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    Pressable,
    Linking

} from 'react-native';

// ::::: CONSTANTES :::: //
const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/78884474?s=100&v=4';
const fontGeral = 'montserrat';
const colorFontgit = '#C9D1D9';
const colorFontdarkGit = '#4F565E';

const Urlgithub = 'https://github.com/igomarcos';

const App = () =>{

    const handlePressGotoGithub = async ()=>{
    const res = await Linking.canOpenURL(Urlgithub);
       if (res) {
            await Linking.openURL(Urlgithub);
       }
    };

    return (
        <SafeAreaView style={style.container}>     
            <StatusBar backgroundColor={colorGithub} barStyle= "light-content" /> 
                
            <View style={style.content}>  
                <Image
                accessibilityLabel="foto igo" 
                style={style.avatar} 
                source={{uri: imageProfileGithub}}
                />

                <Text accessibilityLabel="nome: igo marcos" style={[style.defaultText, style.name]}>Igo Marcos</Text>
                <Text accessibilityLabel="nick: name igomarcos" style={[style.defaultText, style.nick]} >@igomarcos</Text>
                <Text accessibilityLabel="descrição: 🔭Estudante de Análise e Desenvolvimento de Sistemas🌱 Desenvolvendo algumas habilidades com React Native🎸 Músico🖥 Design gráfico📫 email para contato: igomarcos@gmail.com" style={[style.defaultText, style.descricao]} >
                    🔭Estudante de Análise e Desenvolvimento de Sistemas
                    🌱 Desenvolvendo algumas habilidades com React Native
                    🎸 Músico
                    🖥 Design gráfico
                    📫 email para contato: igomarcos@gmail.com
                </Text>
                <Pressable onPress={ handlePressGotoGithub }>
                    <View style = {style.buttom}>
                        <Text style = {style.textButtom} >
                            Click-ME
                        </Text>
                    </View>
                </Pressable>
                
            </View>
        </SafeAreaView>

    );
};

export default App;

// ::::: ESTILOS :::://
const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar:{
        height: 150,
        width: 150,
       borderRadius: 75,
       borderColor: 'white',
       borderWidth: 3,
    },

    defaultText: {
        color: colorFontgit,
        color: 'white',
        margin: 10,
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: fontGeral,
    },

    nick: {
        color: colorFontdarkGit,
        fontSize: 18,
        fontStyle: 'italic',
        fontFamily: fontGeral,
    },

    descricao: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: fontGeral,
    },

    buttom : {
        marginTop: 10,
        backgroundColor: colorFontdarkGit,
        borderRadius: 100,
        padding: 20,
    },

    textButtom : {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
    },
});