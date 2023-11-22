"use client";

import { MdArrowBack } from "react-icons/md";
import Button, { ButtonProps } from "@/components/atoms/button";
import { useRouter } from "next/navigation";

export default function BackButton({ ...props }: ButtonProps) {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} {...props}>
      <MdArrowBack />
    </Button>
  );
}
