"use client";

import Button, { ButtonProps } from "@/components/atoms/button";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

export default function BackButton({ ...props }: ButtonProps) {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} {...props}>
      <MdArrowBack />
    </Button>
  );
}
