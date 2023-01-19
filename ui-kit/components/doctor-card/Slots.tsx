/*
  This file is for displaying slots
*/
import { ScrollView, View, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { useTailwind } from 'tailwind-rn';
import i18n from 'i18n-js';

// Types
import type { ReactElement } from 'react';
import type { AddressesSlotInterface } from '../../../types/doctor';

// Lib
import generateRandomKey from '../../../lib/generateRandomKey';

// Components
import Badge from '../../atoms/badge';

interface SlotsInterface {
  slots: Array<AddressesSlotInterface>;
}

const Slots: React.FC<SlotsInterface> = ({ slots }) => {
  const tailwind = useTailwind();

  // Parsing slots
  const allSlots: Array<ReactElement> = [];
  slots.forEach(slot => {
    const text: string = moment(slot.start).format('LT');
    allSlots.push(
      <TouchableOpacity
        key={`slot-${generateRandomKey()}`}
        style={tailwind('mx-1')}
      >
        <Badge size="xl">{text}</Badge>
      </TouchableOpacity>,
    );
  });

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={tailwind('flex-row px-3')}>
          {allSlots}
          <TouchableOpacity style={tailwind('mx-1')}>
            <Badge size="xl">{i18n.t('moreSlotsText')}</Badge>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Slots;
