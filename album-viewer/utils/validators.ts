// validate date from text input in french format and convert it to a date object
export const validateDate = (date: string): Date => {
  const [day, month, year] = date.split('/');
  return new Date(`${year}-${month}-${day}`);
};

// function that validates the format of a GUID string
export const validateGUID = (guid: string): boolean => {
  const guidRegex = new RegExp(
    '^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$',
    'i'
  );
  return guidRegex.test(guid);
};

// function that validates the format of a IPV6 address string
export const validateIPV6 = (ip: string): boolean => {
  const ipRegex = new RegExp(
    '^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$',
    'i'
  );
  return ipRegex.test(ip);
};

// validate phone number from text input and extract the country code
export const validatePhone = (phone: string): string => {
  const phoneRegex = new RegExp(
    '^\\+\\d{1,3}\\s\\d{1,14}$',
    'i'
  );
  if (phoneRegex.test(phone)) {
    return phone.split(' ')[0];
  }
  return '';
};