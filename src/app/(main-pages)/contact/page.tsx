"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import css from "./style.module.scss";
import TextInput from "@/components/atoms/form/text-input";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormSchemaType,
  contactFormSchema,
} from "@/data/schemas/contact-form-schema";
import Container from "@/components/atoms/container";
import Button from "@/components/atoms/button";
import TextArea from "@/components/atoms/form/text-area";
import useSubmitContactForm from "@/hooks/use-submit-contact-form";
import { useToast } from "@/contexts/toast-context";

export default function ContactPage() {
  const { handleSubmit, control, reset } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });
  const { isLoading, submitForm } = useSubmitContactForm();
  const { setToast } = useToast();

  const onSubmit: SubmitHandler<ContactFormSchemaType> = async (data) => {
    await submitForm(data);

    setToast({ message: "Success submit form!" });
    reset();
  };

  return (
    <Container className={css.root}>
      <h1 className={css.root__heading}>Contact</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <TextInput
          control={control}
          name="name"
          defaultValue=""
          label="What is your name?"
          placeholder="Your name here"
          className={css.form__field}
        />

        <TextInput
          control={control}
          name="email"
          defaultValue=""
          type="email"
          label="What is your email address?"
          placeholder="Your email here"
          className={css.form__field}
        />

        <TextArea
          control={control}
          name="message"
          defaultValue=""
          label="How can I help you?"
          placeholder="Your message here"
          className={css.form__field}
        />

        <Button
          variant="contained"
          type="submit"
          style={{ marginTop: "1rem" }}
          isLoading={isLoading}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
