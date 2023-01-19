/*
  This component is for displaying only doctor name, description, profile picture and starts
*/
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import styled, { useTheme } from 'styled-components/native';

// Types
import type { DoctorBasicInfoInterface } from '../../../types/doctor';

// Atoms
import Avatar from '../../atoms/avatar';
import { WorkSansSemiBold } from '../../atoms/typography/work-sans';
import { RobotoRegular } from '../../atoms/typography/roboto';
import Badge from '../../atoms/badge';
import { VerifiedIcon, HeartIcon } from '../../atoms/icons';

// Components
import StarRatingWithOpinionsOnSide from '../star-rating/StarRatingWithOpinionsOnSide';

// Styled components
interface IconWrapperInterface {
  height: number;
}
const IconWrapper = styled.View<IconWrapperInterface>`
  height: ${props => props.height};
`;

const DoctorCardSmall: React.FC<DoctorBasicInfoInterface> = ({
  badge,
  fullName,
  profilePictureUrl,
  isVerified,
  ratingCount,
  stars,
  specializations,
}) => {
  const tailwind = useTailwind();
  const theme = useTheme();

  // Getting proper height of icon wrapper
  const iconWrapperHeight = theme.fontSize.lg[1];

  // Parsing specializations
  const specializationsString = specializations.join(', ');

  return (
    <View style={tailwind('w-full py-1 flex-row items-start')}>
      <Avatar source={{ uri: `https:${profilePictureUrl}` }} />
      <View style={tailwind('pl-3 items-start flex-1')}>
        {badge && (
          <Badge size="md" variant="secondary">
            {badge}
          </Badge>
        )}
        <View
          style={tailwind(
            `flex-row justify-between w-full ${badge && 'pt-0-8'}`,
          )}
        >
          <View style={tailwind('flex-2')}>
            <WorkSansSemiBold style={tailwind('text-lg text-gray-900')}>
              {fullName}
              {isVerified && (
                <IconWrapper
                  height={iconWrapperHeight}
                  style={tailwind('items-center pl-1 justify-center pt-1')}
                >
                  <VerifiedIcon size={13} color="secondary" />
                </IconWrapper>
              )}
            </WorkSansSemiBold>
          </View>
          <IconWrapper
            height={iconWrapperHeight}
            style={tailwind(
              'items-center pl-1 justify-center flex-row justify-between',
            )}
          >
            <HeartIcon size={18} color="black" />
          </IconWrapper>
        </View>
        <RobotoRegular
          style={tailwind('text-base text-gray-900')}
          numberOfLines={1}
        >
          {specializationsString}
        </RobotoRegular>
        <View style={tailwind('pt-1')}>
          <StarRatingWithOpinionsOnSide
            numberOfOpinions={ratingCount}
            rate={stars}
            colorIfTrueStar="secondary"
          />
        </View>
      </View>
    </View>
  );
};

export default DoctorCardSmall;
