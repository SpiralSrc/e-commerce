"use client";

import { ReactNode, useRef } from "react";

interface formProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
}

const Form = ({ children, action, className, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          await action(formData);
          ref.current?.reset(); //This ref is to reset form after sumbitting data to the db
        }}
        className={className}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </>
  );
};

export default Form;
