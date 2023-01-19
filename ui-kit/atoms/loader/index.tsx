/*
  This file is used to manage loaders
*/
import { ActivityIndicator, View } from 'react-native';

interface loaderProps {
  size?: 'small' | 'large';
}

const Loader: React.FC<loaderProps> = ({ size = 'small' }) => {
  return (
    <View>
      <ActivityIndicator size={size} />
    </View>
  );
};

export default Loader;
