import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const product = {
  name: 'Điện Thoại Vsmart Joy 3',
  price: '1.790.000 đ',
  supplier: 'Tiki Trading',
  colors: {
    blue: {
      name: 'Xanh dương',
      image: require('./assets/vs_blue.png'),
    },
    red: {
      name: 'Đỏ',
      image: require('./assets/vs_red.png'),
    },
    dark: {
      name: 'Đen',
      image: require('./assets/vs_black.png'),
    },
    white: {
      name: 'Trắng',
      image: require('./assets/vs_silver.png'),
    },
  },
};

function HomeScreen({ navigation }) {
  const route = useRoute();
  const [selectedColor, setSelectedColor] = useState('blue');
  useEffect(() => {
    setSelectedColor('blue');
  }, []);
  useEffect(() => {
    if (route.params?.color) {
      setSelectedColor(route.params.color);
    }
  }, [route.params?.color]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 5,
          width: 354,
          height: 420,
        }}>
        {selectedColor ? (
          <Image
            source={product.colors[selectedColor].image}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        ) : null}
      </View>
      <View
        style={{
          flex: 2.6,
          gap: 10,
        }}>
        <Text
          style={{
            fontSize: 17,
          }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 4,
            }}>
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
            <Image source={require('./star.png')} />
          </View>
          <Text style={{ fontSize: 15, color: 'black' }}>
            (Xem 828 đánh giá){' '}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 45, alignItems: 'center' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>1.790.000 đ</Text>
          <Text
            style={{
              textDecorationLine: 'line-through',

              fontWeight: 'bold',
              color: 'gray',
              fontSize: 15,
            }}>
            1.790.000 đ
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 13,
            }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image source={require('./assets/question.png')} />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'transparent',
            padding: 8,
            borderWidth: 1,
            borderRadius: 10,
            textAlign: 'center',
            textTransform: 'uppercase',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 70,
            shadowColor: 'gray',
            shadowOffset: {
              width: 4,
              height: 2,
            },
            shadowOpacity: 0.6,
            shadowRadius: 5,
            elevation: 5,
          }}
          onPress={() => navigation.navigate('Details')}>
          <Text>4 Màu-Chọn Màu</Text>

          <Image source={require('./assets/Vector.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.7,
          width: 310,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#EE0A0A',
            padding: 15,
            color: 'white',
            borderRadius: 11,
            width: '100%',
            textAlign: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 17,
              textAlign: 'center',
            }}>
            Chọn Mua
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    setSelectedColor('blue');
  }, []);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleDone = () => {
    navigation.navigate({
      name: 'Home',
      params: { color: selectedColor },
      merge: true,
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center',
          width: '100%',
          padding: 10,
          gap: 30,
        }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {selectedColor ? (
            <Image
              source={product.colors[selectedColor].image}
              style={{ width: 150, height: 150 }}
              resizeMode="contain"
            />
          ) : null}
        </View>

        <View style={{ flex: 2, gap: 9 }}>
          <View>
            <Text>{product.name}</Text>
            <Text>Hàng chính hãng</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text>Màu:</Text>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              {product.colors[selectedColor]?.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text>Cung cấp bởi </Text>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              {product.supplier}
            </Text>
          </View>
          <Text style={{ fontWeight: 'bold' }}>{product.price}</Text>
        </View>
      </View>

      <Text style={{ padding: 10, fontSize: 16, alignSelf: 'flex-start' }}>
        Chọn một màu bên dưới:
      </Text>

      <View style={{ padding: 10, justifyContent: 'center', flex: 6 }}>
        <TouchableOpacity
          style={{ backgroundColor: '#C5F1FB', height: 80, width: 85 }}
          onPress={() => handleColorSelect('blue')}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            height: 80,
            width: 85,
            marginTop: 10,
          }}
          onPress={() => handleColorSelect('red')}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            height: 80,
            width: 85,
            marginTop: 10,
          }}
          onPress={() => handleColorSelect('dark')}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#234896',
            height: 80,
            width: 85,
            marginTop: 10,
          }}
          onPress={() => handleColorSelect('white')}
        />
      </View>

      <View
        style={{
          flex: 1.3,
        }}>
        <TouchableOpacity
          onPress={handleDone}
          style={{
            backgroundColor: '#1952E294',
            padding: 10,
            borderRadius: 8,
            marginTop: 20,
            width: 326,
          }}>
          <Text
            style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
