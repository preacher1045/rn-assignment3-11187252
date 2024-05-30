import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,ScrollView, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.heading}>Hello, Devs</Text>
            <Text style={styles.subHeading}>14 tasks today</Text>
          </View>
          <View style={styles.profileIcon}>
            <Image source={require('./assets/profile.png')} style={styles.profileImg}/>
          </View>
        </View>
        <View>
          <View style={styles.searchFlex}>
            <Image source={require('./assets/magnifying.png')} style={styles.magnify}/>
            <TextInput style={styles.searchInput} placeholder='search'/>
          </View>
        </View>
      </ScrollView>
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
    marginTop: 70,
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
    width: 260,
    height: 43,
    borderRadius: 14,
    marginTop: 40,
    backgroundColor: '#FBF9F7',
    paddingHorizontal: 20,

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
});
