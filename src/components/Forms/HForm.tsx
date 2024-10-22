import React from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

export default function HForm({ children, onSubmit }: TFormProps) {
  const methods = useForm();
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
