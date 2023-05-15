import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking, TouchableHighlight } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewsFeed = () => {
    const [newsData, setNewsData] = useState(null);
    const [showDescription, setShowDescription] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const options = {
                method: 'GET',
                url: 'https://videogames-news2.p.rapidapi.com/videogames_news/recent',
                headers: {
                    'X-RapidAPI-Key': '4c634aa9cbmsh0ded2c6aa69d197p1739f5jsn7672212113fc',
                    'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
                }
            };

            const response = await axios.request(options);
            const initialShowDescription = {};
            response.data.forEach((newsItem) => {
                initialShowDescription[newsItem.title] = false;
            });
            setShowDescription(initialShowDescription);
            setNewsData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const toggleDescription = (title) => {
        setShowDescription((prevState) => ({
            ...prevState,
            [title]: !prevState[title]
        }));
    };

    const openLink = (url) => {
        Linking.openURL(url);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${formattedDate} ${formattedTime}`;
    };

    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.pageHeader}>News Feed 📣</Text>
            <Text style={styles.pageSubHeader}>Recent News From The Gaming Community</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {newsData ? (
                    newsData.map((newsItem, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.newsItemContainer}
                            onPress={() => toggleDescription(newsItem.title)}
                        >
                            <Text style={styles.newsHeader}>{newsItem.title}</Text>
                            <Text style={styles.newsDate}> {formatDate(newsItem.date)}</Text>
                            {showDescription[newsItem.title] && (
                                <>
                                    <Text style={styles.newsDescription}>{newsItem.description}</Text>
                                    <TouchableHighlight
                                        style={styles.coolButton}
                                        underlayColor="#2f7cba"
                                        onPress={() => openLink(newsItem.link)}
                                    >
                                        <Text style={styles.buttonText}>Open Link</Text>
                                    </TouchableHighlight>
                                </>
                            )}
                            <Image source={{ uri: newsItem.image }} style={styles.image} />
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text>Loading news data...</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center'
    },

    pageHeader: {
        color: 'white',
        fontSize: 27,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    pageSubHeader: {
        color: 'grey',
        fontSize: 14,
        marginBottom: 40,
        textAlign: 'center',
        fontWeight: 'bold'
      },

    newsItemContainer: {
        marginBottom: 20,
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        width: 300,
        alignItems: 'flex-start',
        textAlign: 'left',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },

    newsHeader: {
        color: '#0088B4',
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',

        
    },

    newsDate: {
        color: 'white',
        marginBottom: 10,
        fontSize: 12
        
    },

    newsDescription: {
        color: 'white',
        marginTop: 10,
        marginBottom: 10,
    },

    text: {
        color: 'white',
        marginBottom: 10,
        
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        color: 'red'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },

    coolButton: {
        backgroundColor: '#0088B4',
        padding: 5,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
    }
});

export default NewsFeed;
