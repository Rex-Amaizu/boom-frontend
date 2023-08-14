import * as yup from "yup";

const passwordRules =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

export const registerSchema = yup.object().shape({
  firstName: yup.string().min(2).required("first name is required"),
  lastName: yup.string().required("last name is required"),
  email: yup
    .string()
    .email("Please add a valid email")
    .required(" email is required"),
  phoneNumber: yup.number().required("phone number is required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message: "Must have upper, lower, num & special char",
    })
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password does not match")
    .required("confirm password is required"),
  userReferals: yup.string(),
  termsOfService: yup
    .bool()
    .oneOf([true], "Please Accept the terms of service")
    .required(),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please add a valid email")
    .required("email is required"),
});

export const withdrawalSchema = yup.object().shape({
  amount: yup
    .number("Please add a valid amount")
    .required("amount is required"),
});

export const investSchema = yup.object().shape({
  amount: yup
    .number("Please add a valid amount")
    .required("amount is required"),
});

export const adminSchema = yup.object().shape({
  amount: yup
    .number("Please add a valid amount")
    .required("amount is required"),
  email: yup
    .string()
    .email("Please add a valid email")
    .required("email is required"),
  status: yup.string().required(),
});
