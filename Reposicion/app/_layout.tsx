import { Provider } from 'react-redux';
import { store } from '../store/store';
import Home from './home';
import { View } from 'react-native';

export default function RootLayout() {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <Home />
            </View>
        </Provider>
    );
}
