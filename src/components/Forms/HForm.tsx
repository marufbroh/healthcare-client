import React from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
};

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

export default function HForm({ children, onSubmit, resolver }: TFormProps) {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  );
}
