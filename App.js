import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Image, 
    TextInput, 
    TouchableOpacity,
    FlatList,
  } from 'react-native';

  import {Data, ongoingTask} from './constants/data';

export default function App() {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Text style={styles.subText}>12 task</Text>
      <Image source={item.image} style={styles.itemImage} />
    </TouchableOpacity>
  );

  const renderOngoingTask = ({item}) => (
    <TouchableOpacity style={styles.items}>
      <Text style={styles.ongoingTask}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
      <View style={styles.header}>
          <View>
            <Text style={styles.heading}>Hello, Devs</Text>
            <Text style={styles.subHeading}>14 tasks today</Text>
          </View>
          <View style={styles.profileIcon}>
            <Image source={require('./assets/profile.png')} style={styles.profileImg}/>
          </View>
        </View>

        <View style={styles.Inputflex}>
          <View style={styles.searchFlex}>
            <Image source={require('./assets/magnifying.png')} style={styles.magnify}/>
            <TextInput style={styles.searchInput} placeholder='search'/>
          </View>
          <TouchableOpacity style={styles.filterIcon}>
            <Image source={require('./assets/filter.png')} style={styles.filterImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.categories}>
          <View style={styles.cartBox}>
            <Text style={styles.cartText}>Categories</Text>
          </View>

          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </View>

        <View>
          <View>
            <Text style={styles.completeTask}>Ongoing Task</Text>
          </View>

          <FlatList
            data={ongoingTask}
            renderItem={renderOngoingTask}
            keyExtractor={item => item.id.toString()}
            vertical={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle = {styles.flatListContent}
          />
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },

  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 57,
  },

  heading: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4
  },
  subHeading: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 14.4,
  },

  profileIcon: {
    marginLeft: 70
  },

  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // backgroundColor: '#000'
  },

  searchFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: .9,
    height: 43,
    borderRadius: 14,
    marginTop: 40,
    backgroundColor: '#FBF9F7',
    paddingHorizontal: 20,

  },

  Inputflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  magnify: {
    width: 16,
    height: 16,
  },

  searchInput: {
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 5,
  },

  filterIcon: {
    backgroundColor: '#F0522F',
    width: 50,
    height: 50,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 39,
  },

  filterImage: {
    width: 32,
    height: 32,
  },

  categories: {
    marginTop: 30.9,
    // paddingHorizontal: 10,
  },

  cartText: {
    fontSize: 26,
    fontWeight: '500',
  },

  item: {
    width: 209,
    height: 210,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  

  itemImage: {
    width: 107,
    height: 110,
    alignSelf: 'center',
    paddingVertical: 10,
  },

  itemText: {
    fontSize: 16,
    fontWeight: '700',
  },

  subText: {
    fontSize: 12,
    fontWeight: '400'
  },

  flatListContent: {
    paddingVertical: 10,
  },

  completeTask: {
    fontSize: 26,
    fontWeight: '500',
    marginTop: 10,
  },

  items: {
    width: 360,
    height: 150,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  ongoingTask: {
    fontSize: 19,
    fontWeight: '700',
    // alignSelf: 'center'
    paddingVertical: 30,
  },
});
