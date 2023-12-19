import { Text } from 'react-native';
import { globalTextStyles } from '../globalStyles/text';

export default function TestComponent() {
    return (
        <Text style={globalTextStyles.textStylesSmall}>This is the test component</Text>
    );
}
