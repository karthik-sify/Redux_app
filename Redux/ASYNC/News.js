import { Button, Text, View, StyleSheet, FlatList, Pressable, Image,RefreshControl } from "react-native";
import { connect } from 'react-redux';
import Swipeout from "react-native-swipeout";
import { RemoveNewsItem } from "./NewsAction";
import { useState } from 'react';
import Modal from 'react-native-modal';

const Cakes = (props) => {
    const [selectedNews, setSelectedNews] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const onDeleteItem = (item) => {
        props.removeNewsItem(item);
    };

    const onNewsItemPress = (item) => {
        setModalVisible(!isModalVisible);
        setSelectedNews(item)
    };

    const onRefresh = async () => {
        setRefreshing(true);
        props.getData();
        setRefreshing(false);
      };

    return (
        <View style={{ marginBottom: 100 }}>
            <Pressable onPress={() => props.getData()}>
                <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 20, marginBottom: 20, color: 'white', backgroundColor: "#eb6c49", borderRadius: 20, padding: 10, width: 150, textAlign: 'center', alignSelf: 'center' }}>GET DATA</Text>
            </Pressable>
            <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 5, marginBottom: 5, color: '#eb6c49', textAlign: 'center', alignSelf: 'center' }}>{props.loading === true ? 'loading....' : ''}</Text>
            <FlatList
                data={props.newsData}
                renderItem={({ item }) => (
                    <Swipeout
                        left={[{
                            text: 'Delete',
                            color: '#eb6c49',
                            backgroundColor: 'white',
                            onPress: () => onDeleteItem(item),
                        }]}
                        right={[{
                            text: 'Delete',
                            color: '#eb6c49',
                            backgroundColor: 'white',
                            onPress: () => onDeleteItem(item),
                        }]}
                        // onOpen={
                        //      ()=>onDeleteItem(item)
                        // }
                        backgroundColor="white"
                        autoClose={true}>
                        <Pressable onPress={() => onNewsItemPress(item)}>
                            <View style={styles.newsItem}>
                                <Image
                                    source={{ uri: item.urlToImage }}
                                    style={styles.newsImage}
                                />
                                <Text style={styles.newsTitle}> {item.title}</Text>
                                <Text style={styles.newsDescription}>{item.description}</Text>
                            </View>
                        </Pressable>
                    </Swipeout>


                )
                }
                keyExtractor={(item) => item.title}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
            />
            < Modal isVisible={isModalVisible} onBackdropPress={()=>setModalVisible(!isModalVisible)}>
                <View style={styles.newsItem}>
                    <Image
                        source={{ uri: selectedNews?.urlToImage }}
                        style={styles.newsImage}
                    />
                    <Text style={styles.newsTitle}> {selectedNews?.title}</Text>
                    <Text style={styles.otherDetails}>AUTHOR:  {selectedNews?.author}</Text>
                    <Text style={styles.otherDetails}>DESCRIPTION:   {selectedNews?.description}</Text>
                    <Text style={styles.otherDetails}>URL:   {selectedNews?.url}</Text>
                    <Text style={styles.otherDetails}>CONTENT:   {selectedNews?.content}</Text>
                    <Text style={styles.newsDescription}>PUBLISHED AT:  {selectedNews?.publishedAt}</Text>
                    
                </View>
            </Modal >
        </View >

    );
};

const mapStateToProps = state => {
    return {
        newsData: state.newsData,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch({ type: 'FETCH_DATA' }),  //news->sagas->action->reducer
        removeNewsItem: (item) => dispatch(RemoveNewsItem(item))

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    newsItem: {
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: '#eb6c49',
        borderRadius: 20,
        paddingBottom: 12,
        paddingTop: 12,
    },
    newsImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'white',
        padding: 10,

    },
    newsDescription: {
        fontSize: 14,
        color: 'black',
        backgroundColor: 'white',
        padding: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    otherDetails: {
        fontSize: 14,
        color: 'black',
        backgroundColor: 'white',
        padding:12,
        textAlign:'justify'
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cakes)