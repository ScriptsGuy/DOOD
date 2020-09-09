import moment from 'moment';

export default function isOpen(openTime, closeTime, timezone) {
  // handle special case
  if (openTime === '24HR') {
    return 'open';
  }

  // get the current date and time in the given time zone
  const now = moment();
  console.log(now);

  // Get the exact open and close times on that date in the given time zone
  // See https://github.com/moment/moment-timezone/issues/119
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
