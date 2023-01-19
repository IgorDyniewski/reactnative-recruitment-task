/*
  This file is used to display information about address on doctor's profile.
*/
import { View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import i18n from 'i18n-js';

// Types
import type { DoctorAddressInterface } from '../../../types/doctor';

// Atoms
import { MapIcon, MoneyIcon, CalendarIcon } from '../../atoms/icons';

// Components
import FeatureRow from '../feature-row';
import Slots from './Slots';

// Lib
import capitalizeFistLetter from '../../../lib/capitalizeFirstLetter';

const AddressCard: React.FC<DoctorAddressInterface> = ({
  street,
  name,
  services,
  slots = null,
}) => {
  const tailwind = useTailwind();

  // Parsing services
  const allServices: Array<React.ReactElement> = [];
  services?.forEach(service => {
    allServices.push(
      <FeatureRow
        key={service.id}
        headline={`${capitalizeFistLetter(service.name)} • ${service.price} zł`}
        icon={<MoneyIcon size={20} color="gray-900" />}
      />,
    );
  });

  return (
    <View style={tailwind('pb-3')}>
      <View style={tailwind('px-3')}>
        <FeatureRow
          headline={street}
          description={String(name)}
          clickableText={i18n.t('maps')}
          icon={<MapIcon size={18} color="gray-900" />}
        />
        {allServices}

        {slots ? (
          <FeatureRow
            headline={i18n.t('availableSlots')}
            icon={<CalendarIcon size={18} color="gray-900" />}
          />
        ) : (
          <FeatureRow
            headline={i18n.t('noSlotsAvailable')}
            icon={<CalendarIcon size={18} color="gray-900" />}
          />
        )}
      </View>
      {slots && <Slots slots={slots} />}
    </View>
  );
};

export default AddressCard;
