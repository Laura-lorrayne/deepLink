import { Linking, Alert } from 'react-native';

const abrirWhatsApp = async (numero: string, mensagem: string) => {
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlApp = `whatsapp://send?phone=${numero}&text=${mensagemCodificada}`;
    const urlLoja = 'https://play.google.com/store/apps/details?id=com.whatsapp';
    const podeAbrir = await Linking.canOpenURL(urlApp);
    if (podeAbrir) {
        Linking.openURL(urlApp);
    } else {
        Alert.alert(
            'WhatsApp não encontrado',
            'WhatsApp não encontrado neste dispositivo. Deseja baixar o aplicativo?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Baixar', onPress: () => Linking.openURL(urlLoja) }
            ]
        );
        
    }
};

const abrirMaps = async (latitude: number, longitude: number) => {
    const urlApp = `geo:${latitude},${longitude}`; 
     const urlWeb = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const urlLoja = 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps';

    const podeAbrirApp = await Linking.canOpenURL(urlApp);
    if (podeAbrirApp) {
        Linking.openURL(urlWeb);
    } else {
        Alert.alert(
            'Aplicativo de mapas não encontrado',
            'Nenhum aplicativo de mapas foi encontrado neste dispositivo. O que deseja fazer?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Baixar app', onPress: () => Linking.openURL(urlLoja) }
            ]
        );
        
    }
};


const enviarEmail = async (email: string, assunto: string) => {
    const url = `mailto:${email}?subject=${encodeURIComponent(assunto)}`;
    const urlLoja = 'https://play.google.com/store/apps/details?id=com.google.android.gm';
    
    const podeAbrirApp = await Linking.canOpenURL(url);
         if (podeAbrirApp) {
        Linking.openURL(url);
    } else {
            Alert.alert(
                'Aplicativo de e-mail não Gmail',
                'Gmail não encontrado neste dispositivo. Deseja baixar o aplicativo?',
                [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Baixar', onPress: () => Linking.openURL(urlLoja) }
                ]
            );
        }
    
};
const abrirNavegador = async () => {
    const urlWeb = `https://www.google.com`;
    const urlLoja = 'https://play.google.com/store/apps/details?id=com.android.chrome';
    
        const podeAbrirWeb = await Linking.canOpenURL(urlWeb);
        if (podeAbrirWeb) {
            Linking.openURL(urlWeb);
        } else {
            Alert.alert(
                'Navegador não encontrado',
                'Navegador não encontrado neste dispositivo. Deseja baixar o aplicativo?',
                [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Baixar', onPress: () => Linking.openURL(urlLoja) }
                ]
            );
        }
}


export { abrirWhatsApp, abrirMaps, abrirNavegador,  enviarEmail };