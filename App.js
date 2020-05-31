/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('./assets/img/bg.jpg')}
            style={styles.banner}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.titulo}>Que hacer en Paris?</Text>
          <ScrollView horizontal>
            <View>
              <Image
                source={require('./assets/img/actividad1.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View>
              <Image
                source={require('./assets/img/actividad2.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View>
              <Image
                source={require('./assets/img/actividad3.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View>
              <Image
                source={require('./assets/img/actividad4.jpg')}
                style={styles.ciudad}
              />
            </View>
            <View>
              <Image
                source={require('./assets/img/actividad5.jpg')}
                style={styles.ciudad}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Los mejores Alojamientos</Text>
          <View>
            <View>
              <Image
                source={require('./assets/img/mejores1.jpg')}
                style={styles.mejores}
              />
            </View>
            <View>
              <Image
                source={require('./assets/img/mejores2.jpg')}
                style={styles.mejores}
              />
            </View>
            <View>
              <Image
                source={require('./assets/img/mejores3.jpg')}
                style={styles.mejores}
              />
            </View>
          </View>
          <Text style={styles.titulo}>Hospedajes en LA</Text>
          <View style={styles.listado}>
            <View style={styles.listadoItem}>
              <Image
                source={require('./assets/img/hospedaje1.jpg')}
                style={styles.mejores}
              />
              <Text>Casa 4 Recamaras</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image
                source={require('./assets/img/hospedaje2.jpg')}
                style={styles.mejores}
              />
              <Text>Casa 4 Recamaras</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image
                source={require('./assets/img/hospedaje3.jpg')}
                style={styles.mejores}
              />
              <Text>Casa 4 Recamaras</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  banner: {
    height: 225,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  content: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    flexBasis: '49%'
  }
});

export default App;
