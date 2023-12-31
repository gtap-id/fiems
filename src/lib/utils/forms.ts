import { FormRule } from "antd";
import { DatePickerProps } from "antx";
import dayjs from "dayjs";
import { FilterFunc } from "rc-select/lib/Select";

export const createDate: DatePickerProps = {
  disabled: true,
  initialValue: dayjs(),
};

export const requiredRule: FormRule = {
  required: true,
  message: "Wajib diisi",
};

export const telephoneRule: FormRule = {
  pattern: /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/gm,
  message: "Format nomor telepon salah",
};

export const faxRule: FormRule = {
  pattern: /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/gm,
  message: "Format nomor fax salah",
};

export const emailRule: FormRule = {
  type: "email",
  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm,
  message: "Format email salah",
};

export const autoCompleteFilterOption: FilterFunc<any> = (
  inputValue,
  option
) => {
  return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
};
