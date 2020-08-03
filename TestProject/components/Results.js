import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';

const DATA = [
  ['1', '£5', 'great'],
  ['2', '£5', 'great'],
  ['3', '£5', 'great'],
];

const imageURL = {
  uri:
    'https://image.freepik.com/free-vector/elegant-white-texture-background_23-2148431731.jpg',
};

const Results = ({route}) => {
  const [resultData, setResults] = React.useState(null);

  const {searchInput} = route.params;
  const findItem = async () => {
    console.log(`finding ${searchInput}`);
    const res = await fetch(`http://localhost:5000/api/search/${searchInput}`);
    const json = await res.json();
    // console.log(json);
    setResults(json);

    console.log('FOUND WOO');
  };

  React.useEffect(() => {
    findItem(searchInput);
  }, []);

  const renderItem = ({item}) => {
    return <Item title={item[0]} price={item[1]} condition={item[2]} />;
  };

  const renderImage = () => {
    console.log(resultData.image);
    console.log(typeof resultData.image);
    const image = resultData.image;
    return <Image style={styles.logo} source={{uri: image}} />;
  };

  if (resultData && resultData.average_price == undefined) {
    return (
      <ImageBackground source={imageURL} style={styles.image}>
        <View style={styles.notFound}>
          <Text style={styles.resultTitle}>{searchInput}</Text>
          <Text>Could not find any results</Text>
          <Text>Please try again</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={imageURL} style={styles.image}>
      <View style={styles.homeContainer}>
        <Text style={styles.resultTitle}>{searchInput}</Text>
        {resultData ? renderImage() : <Text />}
        {resultData ? (
          <View style={styles.priceContainer}>
            <Text style={styles.priceInfo}>Average Buyout Price:</Text>
            <Text style={styles.price}>
              £{resultData.average_price.toFixed(2)}
            </Text>
          </View>
        ) : (
          <Text>Searching</Text>
        )}
        {resultData ? (
          <FlatList
            data={resultData.results}
            renderItem={renderItem}
            keyExtractor={(item) => item}
          />
        ) : (
          <Text />
        )}
      </View>
    </ImageBackground>
  );
};

const Item = ({title, price, condition}) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{title}</Text>
    <Text style={styles.itemPrice}>£{price.toFixed(2)}</Text>
    <Text style={styles.itemCondition}>{condition}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  notFound: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  resultTitle: {
    fontSize: 25,
    margin: 5,
    marginTop: 25,
    padding: 10,
  },
  item: {
    backgroundColor: 'white',
    shadowColor: 'green',
    shadowRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 17,
    color: '#691c3a',
  },
  itemPrice: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: '600',
  },
  itemCondition: {
    color: 'grey',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    margin: 10,
  },
  priceContainer: {
    margin: 10,
  },
  priceInfo: {
    fontSize: 15,
    textAlign: 'center',
  },
  price: {
    fontSize: 27,
    textAlign: 'center',
    fontWeight: '500',
    color: '#691c3a',
  },
});

export default Results;
