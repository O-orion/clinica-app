import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Consultas from "./Consultas";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Explorar from "./Explorar";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarStyle: {
        backgroundColor: '#002851',
        paddingBottom: 2,
    },
    tabBarActiveTintColor: '#339cff',
    tabBarInactiveTintColor: '#fff'
}

const tabs = [
    {
        name: 'Home',
        component: Home,
        icon: 'home'
    },
    {
        name: 'Consultas',
        component: Consultas,
        icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: Explorar,
        icon: 'search'
    },
    {
        name: 'Perfil',
        component: Perfil,
        icon: 'person'
    },
]

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={ screenOptions } >
            { tabs.map((tab) => (
                <Tab.Screen key={tab.name} name={tab.name} component={tab.component} options={{ 
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (<Ionicons color={color} size={size} name={tab.icon} /> )
                    }}  />
            )) 
            }
        </Tab.Navigator>
    )
}
