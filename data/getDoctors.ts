/*
  This file will simulate fetching doctors. It's total trash, but enough for demonstration
*/
import humps from 'humps';
import type {
  DoctorAddressInterface,
  AddressesSlotInterface,
  DoctorBasicInfoInterface,
} from '../types/doctor';

/* c-spell: disable */
// Lib
import wait from '../lib/wait';

// Data
/* eslint-disable-next-line import/extensions */
import doctorData from './rawJson/doctors.json';
/* eslint-disable-next-line import/extensions */
import slots from './rawJson/slots.json';

const getSlots = (id: string): Array<AddressesSlotInterface> | null => {
  // @ts-expect-error json
  if (!slots[id]) {
    return null;
  }
  const newSlots: Array<AddressesSlotInterface> = [];
  // @ts-expect-error json
  const slot = slots[id];
  // @ts-expect-error json
  slot.slots.forEach(item => {
    const newSlot: AddressesSlotInterface = {
      start: item.start,
      booked: item.booked,
      link: item.link,
    };
    newSlots.push(newSlot);
  });

  return newSlots;
};

const getDoctors = async (): Promise<Array<DoctorBasicInfoInterface>> => {
  // Simulating API response
  await wait(1000);
  /* c-spell: disable-next-line */
  const doctorDataCamelized = humps.camelizeKeys(doctorData.items);

  const doctors: Array<DoctorBasicInfoInterface> = [];

  /* c-spell: disable-next-line */
  doctorDataCamelized.forEach(doctorObject => {
    // @ts-expect-error json
    const { specializations } = doctorObject;
    const specializationNames = specializations.map(
      // @ts-expect-error json
      specializationObject => specializationObject.specialization.name,
    );
    // @ts-expect-error json
    const { addresses } = doctorObject;
    const newAdresses: Array<DoctorAddressInterface> = [];
    // @ts-expect-error json
    addresses.forEach(adreess => {
      let newServices = null;
      if (adreess.services) {
        // @ts-expect-error json
        newServices = adreess.services.services.map(service => ({
          id: service.id,
          name: service.name,
          price: service.price.price,
        }));
      }
      const addSlots = getSlots(adreess.id);
      newAdresses.push({
        id: adreess.id,
        name: adreess.name,
        street: adreess.street,
        services: newServices,
        slots: addSlots,
      });
    });

    const doctor: DoctorBasicInfoInterface = {
      // @ts-expect-error json
      id: doctorObject.id,
      // @ts-expect-error json
      fullName: doctorObject.name,
      // @ts-expect-error json
      isVerified: doctorObject.isVerified,
      // @ts-expect-error json
      profilePictureUrl: doctorObject.photoUrl,
      badge: 'Perfil nuevo', // c-spell: disable-line
      // @ts-expect-error json
      profileUrl: doctorObject.profileUrl,
      // @ts-expect-error json
      ratingCount: doctorObject.rating.count,
      // @ts-expect-error json
      stars: doctorObject.rating.stars,
      specializations: specializationNames,
      addresses: newAdresses,
    };

    doctors.push(doctor);
  });

  return doctors;
};

export default getDoctors;
