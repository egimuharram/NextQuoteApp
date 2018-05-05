import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
// import { FontAwesome, Font } from 'react-vector-icons';
// import Expo, { Font } from 'expo';

const quotes = [{
        message: 'I’m not dismissing the value of higher education; I’m simply saying it comes at the expense of experience.',
        author: 'Steve Jobs',
    }, {
        message: 'The greatest artists like Dylan, Picasso and Newton risked failure. And if we want to be great, we’ve got to risk it too.',
        author: 'Steve Jobs',
    }, {
        message: 'How does somebody know what they want if they haven’t even seen it?',
        author: 'Steve Paul Jobs',
    }, {
        message: 'Everything around you that you call life was made up by people that were no smarter than you, and you can change it, you can influence it, you can build your own things that other people can use.',
        author: 'Jobs',
    }, {
        message: 'I would rather gamble on our vision than make a ‘me, too’ product.',
        author: 'Jobs',
    }, {
        message: 'We’ve got to make the small things unforgettable.',
        author: 'Steve Jobs',
    }, {
        message: 'Here`s to the crazy ones.The misfits.The rebels.The trouble - makers.The round pegs in the square holes.The ones who see things differently…they change things.They push the human race forward.And while some may see them as the crazy ones, we see genius.',
        author: 'Jobs',
    }, {
        message: 'You`ve got to have a problem that you want to solve a wrong that you want to right.',
        author: 'Steve Jobs',
    }, {
        message: 'It [what you choose to do] has got to be something that you’re passionate about zbecause otherwise you won’t have the perseverance to see it through.',
        author: 'Jobs',
    }, {
        message: 'In your life you only get to do so many things and right now we’ve chosen to do this, so let’s make it great.',
        author: 'Steve Jobs',
}];

export default class App extends React.Component {
    state = {
        activeQuoteIndex: 0,
        isFontLoaded: false
    }

    componentDidMount() {
        Font.loadAsync({'Average': require('./assets/fonts/Roboto.ttf'), 'Prata': require('./assets/fonts/Roboto.ttf')}).then(() => {
            this.setState({isFontLoaded: true});
        })
    }

    nextQuote = () => {
        const {activeQuoteIndex} = this.state;

        if (activeQuoteIndex < quotes.length - 2) {
            this.setState({
                activeQuoteIndex: activeQuoteIndex + 1
            });
        } else {
            this.setState({activeQuoteIndex: 0});
        }
    }

    render() {
        const activeQuote = quotes[this.state.activeQuoteIndex];
        const {isFontLoaded} = this.state;
    return (
        <View style={styles.container}>
            <Text
                style={[
                styles.message, isFontLoaded && {
                    fontFamily: 'Prata'
                }
            ]}>
                {activeQuote.message}
            </Text>
            <Text
                style={[
                styles.author, isFontLoaded && {
                    fontFamily: 'Average'
                }
            ]}>
                {activeQuote.author}
            </Text>

            <View style={styles.button}>
                <Button title={'Next quote'} onPress={this.nextQuote}/>
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    message:{
        fontSize: 24,
        marginBottom: 20,
    },
    author:{
        fontSize: 18,
    },
    button:{
        position:'absolute',
        bottom: 30,
    }
});