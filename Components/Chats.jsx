import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'

const StyledImage = styled(Image)

export default function Chats() {
    const data = [
        { name: "Rizwan Sabir", img: require('../assets/img/p3.jpg'), time: "12:03", message: "How are you?" },
        { name: "Sana", img: require('../assets/img/p4.jpg'), time: "1:34", message: "ok I will be there" },
        { name: "Aqib", img: require('../assets/img/p5.jpg'), time: "12:02", message: "I am fine" },
        { name: "Hanzla", img: require('../assets/img/p6.jpg'), time: "2:34", message: "Vs Code ??" },
        { name: "Screen ", img: require('../assets/img/p7.jpg'), time: "12:21", message: "Using mobile right now" },
        { name: "Ali", img: require('../assets/img/p10.jpg'), time: "3:43", message: "Calling right now!!" },
        { name: "Hamza", img: require('../assets/img/images.jpg'), time: "12:02", message: "Typing right now" },
        { name: "Mobile", img: require('../assets/img/Frame 39 (1).png'), time: "12:24", message: "Coding Right now" },
        { name: "Azeem", img: require('../assets/img/p4.jpg'), time: "4:21", message: "What happen?" },
        { name: "Bhai", img: require('../assets/img/p3.jpg'), time: "5:34", message: "Ohhh  !!!" },
        { name: "Sana", img: require('../assets/img/p7.jpg'), time: "7:34", message: "I am here" },
        { name: "Sana", img: require('../assets/img/p3.jpg'), time: "7:34", message: "I am here" },

    ];
    const renderItem = ({ item }) => (
        <ChatItem
            img={item.img}
            name={item.name}
            time={item.time}
            message={item.message}
        />
    );

    return (
        <View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text> data</Text>
        </View>
    )
}

function ChatItem({ img, name, time, message }) {
    return (
        <View className="flex flex-row pt-2">
            <View className='mr-6 ml-1'>
                <Image source={img} style={{ width: 70, height: 70, borderRadius: 50 }} />
            </View>
            <View className='flex flex-1'>
                <View className='flex flex-row justify-between mt-1'>
                    <Text className='text-lg font-medium'>{name}</Text>
                    <Text className='mr-2 mt-1 text-sm'>{time}</Text>
                </View>
                <View className='pt-1'><Text className='text-base'>{message}</Text></View>
            </View>
        </View>
    )
}

function CustomButton() {
    return (
        <View>
            <Text>Chats</Text>
        </View>
    )
}
