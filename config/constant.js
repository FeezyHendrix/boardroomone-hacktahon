const STATE_MACHINE = {
  PROCESSING: 'processing',
  DONE: 'done',
  ERROR: ERROR_TYPE
};

const ERROR_TYPE = {
  CROP_ERROR: 'crop_error',
  BG_ERROR: 'bg_error',
};

module.exports = {
  STATE_MACHINE,
  ERROR_TYPE,
};