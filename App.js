

import { StyleSheet, Text, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';


const App = () => {

  // const source = { uri: 'https://pdfobject.com/pdf/sample.pdf', cache: true };
  const source = { uri: 'https://www.grandstream.com/hubfs/Product_Documentation/gxp16xx_user_guide.pdf', cache: false }; // OK tested-20240827@1500

  return (
    <View style={styles.container}>
        <Text>Mobile App (gigFinder02) Testing GS01.pdf, NOT using JSX.Element.</Text>
              <Pdf
                  trustAllCerts={false}     // https://github.com/wonday/react-native-pdf/issues/757  
                  source={source}
                  onLoadComplete={(numberOfPages,filePath) => {
                      console.log(`Number of pages: ${numberOfPages}`);
                  }}
                  onPageChanged={(page,numberOfPages) => {
                      console.log(`Current page: ${page}`);
                  }}
                  onError={(error) => {
                      console.log(error);
                  }}
                  onPressLink={(uri) => {
                      console.log(`Link pressed: ${uri}`);
                  }}
                  style={styles.pdf}>
              </Pdf>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});

export default App;
