"use client";

import { useForm } from "react-hook-form";
import css from "./style.module.scss";
import TextInput from "@/components/atoms/form/text-input";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormSchemaType,
  contactFormSchema,
} from "@/data/schemas/contact-form";

export default function ContactPage() {
  const { handleSubmit, control } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data, "<<<<< data");
  };

  return (
    <div className={css.root}>
      <h1 className={css.root__heading}>Contact</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput control={control} name="name" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
