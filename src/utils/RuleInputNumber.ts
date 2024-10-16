import { RegisterOptions } from "react-hook-form"
import React, { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";


export type RulesNumber = {
  [key in 'price_min' | 'price_max']?: RegisterOptions;
}

export const priceSchema = yup.object().shape({
  price_min: yup.string().default('').matches(/^[0-9]*$/,'Vui lòng nhập số dương'),
  price_max: yup.string().default('').matches(/^[0-9]*$/,'Vui lòng nhập số dương')
    .test(
      'true',
      'Giá trị phải lớn hơn',
      function (value) {
        const { price_min } = this.parent;
        return !value || !price_min || parseFloat(value) > parseFloat(price_min);
      }
    )
})
