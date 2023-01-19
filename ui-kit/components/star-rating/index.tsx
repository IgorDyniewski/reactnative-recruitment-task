/*
  Used for ex. rating doctors with starts on their profiles.
*/
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import styled from 'styled-components/native';

// Types
import type { ColorNameFromPalletteType } from '../../../types/colorNameFromPalletteType';

// Atoms
import { StarIcon } from '../../atoms/icons';

// Lib
import generateRandomKey from '../../../lib/generateRandomKey';

// Styled components
const StarWrapper = styled.View`
  padding-left: ${props => props.theme.ratingSpacingBetween};
  padding-right: ${props => props.theme.ratingSpacingBetween}; ;
`;

export interface StarRatingInterface {
  rate: 0 | 1 | 2 | 3 | 4 | 5;
  colorIfTrueStar?: ColorNameFromPalletteType;
  colorIfFalseStar?: ColorNameFromPalletteType;
}

const StarRating: React.FC<StarRatingInterface> = ({
  rate,
  colorIfTrueStar = 'primary',
  colorIfFalseStar = 'custom-gray-1',
}) => {
  const tailwind = useTailwind();
  const rating: Array<boolean> = [];

  // Generating array that wil describe rating
  for (let i = 0; i < 5; i += 1) {
    rating[i] = rate > i;
  }

  return (
    <View style={tailwind('flex-row items-center')}>
      {rating.map(starRate => (
        <StarWrapper key={`rating-start-${generateRandomKey()}`}>
          <StarIcon color={starRate ? colorIfTrueStar : colorIfFalseStar} />
        </StarWrapper>
      ))}
    </View>
  );
};

export default StarRating;
