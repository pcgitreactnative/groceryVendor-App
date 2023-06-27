export const _validatePhone = async phone => {
  let phoneReg = /^[6-9]{1}[0-9]{9}$/;
  if (phoneReg.test(phone)) {
    return true;
  }
  return false;
};

export const _validatePAN = async phone => {
  let regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  if (regex.test(phone)) {
    return true;
  }
  return false;
};

export const _validateAadhar = async phone => {
  // let regex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
  let regex = new RegExp(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/);
  if (regex.test(phone)) {
    return true;
  }
  return false;
};
