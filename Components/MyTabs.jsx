import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Groups from './Groups';
import Chats from './Chats';
import Updates from './Updates';
import Calls from './Calls';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

const Tab = createMaterialTopTabNavigator();
const StyledText = styled(Text);

export default function MyTabs() {
    return (
        <View className='h-full bg-green-800'>
            <SafeAreaView style={{ height: "100%" }}>
                <View>
                    <StyledText className='text-3xl pt-3 pl-2 pb-3 text-white'>WhatsApp </StyledText>
                </View>
                <Tab.Navigator
                    initialRouteName='Chats'
                    screenOptions={{
                        tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
                        tabBarActiveTintColor: 'white',
                        tabBarStyle: { backgroundColor: "#166534" },
                        tabBarIndicatorStyle: { backgroundColor: 'green' },
                    }}
                >
                    <Tab.Screen name="Groups" component={Groups} />
                    <Tab.Screen name="Chats" component={Chats} />
                    <Tab.Screen name="Updates" component={Updates} />
                    <Tab.Screen name="Calls" component={Calls} />
                </Tab.Navigator>
            </SafeAreaView>
        </View>
    );
}
