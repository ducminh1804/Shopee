import { RegisterOptions } from 'react-hook-form';
import { IFormInput } from '../types/IFormInput';

export type Rules = {
  [key in 'email' | 'password']: RegisterOptions<IFormInput, key>;  // Đảm bảo các field có kiểu RegisterOptions chính xác
};

export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^(?!.*\s)\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: 'Nhập sai định dạng email',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    pattern: {
      value: /^\S+$/,
      message: 'Không được chứa khoảng trắng',
    },
  },
};
