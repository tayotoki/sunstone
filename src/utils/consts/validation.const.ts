import { RegisterOptions } from 'react-hook-form';

export const defaultRules: Pick<RegisterOptions, 'required'> = {
  required: {
    value: true,
    message: 'Это обязательное поле',
  },
};
