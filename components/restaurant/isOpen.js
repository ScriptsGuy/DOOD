import moment from 'moment';

export default function isOpen(openTime, closeTime) {
  // handle special case
  if (openTime === '24HR') {
    return 'open';
  }

  const now = moment();
  //   console.log(now);

  const date = now.format('YYYY-MM-DD');
  const storeOpenTime = moment(date + ' ' + openTime, 'YYYY-MM-DD h:mmA');
  const storeCloseTime = moment(date + ' ' + closeTime, 'YYYY-MM-DD h:mmA');

  let check;
  if (storeCloseTime.isBefore(storeOpenTime)) {
    // Handle ranges that span over midnight
    check = now.isAfter(storeOpenTime) || now.isBefore(storeCloseTime);
  } else {
    // Normal range check using an inclusive start time and exclusive end time
    check = now.isBetween(storeOpenTime, storeCloseTime, null, '[)');
  }

  return check ? 'open' : 'closed';
}
