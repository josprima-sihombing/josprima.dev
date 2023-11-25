"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import css from "./style.module.scss";
import TextInput from "@/components/atoms/form/text-input";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormSchemaType,
  contactFormSchema,
} from "@/data/schemas/contact-form";
import Container from "@/components/atoms/container";
import Button from "@/components/atoms/button";

export default function ContactPage() {
  const { handleSubmit, control } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormSchemaType> = (data) => {
    console.log(data, "<<<< data");
    // TODO: submit the data
  };

  return (
    <Container className={css.root}>
      <h1 className={css.root__heading}>Contact</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          control={control}
          name="name"
          defaultValue=""
          label="Who is your name?"
          placeholder="Your name here"
        />

        <Button variant="contained" type="submit" style={{ marginTop: "1rem" }}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
