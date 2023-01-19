/*
  Component for displaying badge.
*/
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import classNames from 'classnames';
import { useTheme } from 'styled-components/native';

// Components
import { WorkSansSemiBold } from '../typography/work-sans';

interface BadgeInterface {
  children: string;
  size?: 'sm' | 'md' | 'xl';
  variant?: 'primary' | 'secondary';
}
const Badge: React.FC<BadgeInterface> = ({
  children,
  variant = 'primary',
  size = 'sm',
}) => {
  const tailwind = useTailwind();
  const theme = useTheme();

  // Classes for badge
  const viewClassNames = classNames(
    ['rounded'],
    theme.badges[size].wrapper,
    theme.badges[variant].wrapper,
  );
  const textClassNames = classNames(
    ['uppercase'],
    theme.badges[size].text,
    theme.badges[variant].text,
  );

  return (
    <View style={[tailwind(viewClassNames)]}>
      <WorkSansSemiBold style={tailwind(textClassNames)}>
        {children}
      </WorkSansSemiBold>
    </View>
  );
};

export default Badge;
