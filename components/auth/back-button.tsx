'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";


interface Props {
  href: string;
  label: string;
}

export const BackButton = ({
  href,
  label
}: Props) => {
  return (
    <Button
      variant="link" 
      className="w-full" 
      size="sm"
    >  
      <Link href={href} >
        {label}
      </Link>
    </Button>
  )
}