import { Provider } from 'react-redux';
import { store } from '../store/store';
import Home from './home';
import { View } from 'react-native';
import { Stack } from 'expo-router';


export default function RootLayout() {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <Stack>
                <Home />
                </Stack>
            </View>
        </Provider>
    );
}
