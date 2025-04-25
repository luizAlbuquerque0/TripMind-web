import { cn } from "@/lib/utils";
import { Eye, EyeOff, XIcon } from "lucide-react";
import React from "react";
import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, name, id, error, className, type: initialType, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const type =
      initialType === "password" && showPassword ? "text" : initialType;
    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={id ?? name}
          type={type}
          className={cn(
            "bg-white w-full rounded-lg border border-input px-3 h-[52px] text-gray-800 pt-0 placeholder-shown:pt-0 peer focus:border-gray-800 transition-all outline-none",
            error && "!border-red-500",
            className
          )}
          placeholder=" "
        />
        <label
          className="absolute text-xs left-[13px] -top-[7px] bg-white pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all duration-400"
          htmlFor="name"
        >
          {placeholder}
        </label>

        {initialType === "password" && (
          <div
            className="absolute top-0 right-0 flex h-12 w-12 cursor-pointer items-center justify-center hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="text-brand-neutral-400 h-5 w-5" />
            ) : (
              <Eye className="text-brand-neutral-400 h-5 w-5" />
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
