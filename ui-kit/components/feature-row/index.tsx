/*
  This component is for displaying doctor properties.
*/
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import styled, { useTheme } from 'styled-components/native';

// Types
import type { ReactElement } from 'react';
import type { IconInterface } from '../../atoms/icons/index';

// Atoms
import { RobotoRegular, RobotoBold } from '../../atoms/typography/roboto';

// Styled components
interface IconsWrapperInterface {
  height: number;
}
const IconWrapper = styled.View<IconsWrapperInterface>`
  height: ${props => props.height}px;
`;

interface FeatureRowInterface {
  headline: string;
  description?: string;
  icon: ReactElement<IconInterface>;
  clickableText?: string;
  clickableTextOnPress?: void;
}

const FeatureRow: React.FC<FeatureRowInterface> = ({
  headline,
  description,
  icon,
  clickableText = null,
  clickableTextOnPress = () => null,
}) => {
  const tailwind = useTailwind();
  const { fontSize, featureRowTitleFontsSize } = useTheme();

  // Getting proper height of icon wrapper
  const iconWrapperHeight: number = fontSize[featureRowTitleFontsSize][1];

  // Need to address descriptions with a length = 0
  const hideDescription = !description || description.length === 0;

  return (
    <View style={tailwind('flex-row items-start my-2')}>
      {/* Icon */}
      <IconWrapper
        height={iconWrapperHeight}
        style={tailwind('justify-center w-6')}
      >
        {icon}
      </IconWrapper>
      {/* Data */}
      <View style={tailwind('flex-2')}>
        <RobotoRegular
          style={tailwind(
            `text-${featureRowTitleFontsSize} text-gray-900 flex-1`,
          )}
        >
          {headline}

          {/* Only visible when link needs to be added */}
          {clickableText && (
            <>
              <RobotoRegular style={tailwind('text-gray-600')}>
                {` • `}
              </RobotoRegular>
              <RobotoRegular
                onPress={clickableTextOnPress}
                style={tailwind('text-gray-600 underline')}
              >
                {clickableText}
              </RobotoRegular>
            </>
          )}
        </RobotoRegular>

        {/* Description */}
        {!hideDescription && (
          <RobotoBold style={tailwind('text-sm text-gray-600')}>
            {description}
          </RobotoBold>
        )}
      </View>
    </View>
  );
};

export default FeatureRow;
