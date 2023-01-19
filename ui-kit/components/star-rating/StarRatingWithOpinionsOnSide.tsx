/*
  Used for rating doctors with start with number of opinions on the side.
*/
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import i18n from 'i18n-js';

// Types
import type { StarRatingInterface } from './index';

// Atoms
import { RobotoMedium } from '../../atoms/typography/roboto';

// Components
import StarRating from './index';

interface StarRatingWithOpinionsOnSideInterface extends StarRatingInterface {
  numberOfOpinions: number;
}
const StarRatingWithOpinionsOnSide: React.FC<
  StarRatingWithOpinionsOnSideInterface
> = props => {
  const { numberOfOpinions } = props;
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex-row items-center')}>
      {/* We are safe to do thing bellow thanks to TS :) */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StarRating {...props} />
      <RobotoMedium
        style={tailwind('text-sm text-gray-600 ml-2')}
      >{`${numberOfOpinions} ${i18n.t('opinions')}`}</RobotoMedium>
    </View>
  );
};

export default StarRatingWithOpinionsOnSide;
