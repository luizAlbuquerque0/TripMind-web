"use client";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, LucideIcon } from "lucide-react";
import * as React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "error"> {
  error?: string | boolean;
  icon?: LucideIcon;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      type: initialType,
      error,
      icon: Icon,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const type =
      initialType === "password" && showPassword ? "text" : initialType;

    return (
      <>
        <div className={cn("relative", containerClassName)}>
          {Icon && (
            <div className="absolute top-1/2 left-3 -translate-y-1/2 text-white/50">
              <Icon className="h-5 w-5 text-neutral-500" />
            </div>
          )}
          <input
            type={type}
            className={cn(
              "border-brand-blue-100 flex h-12 w-full rounded-sm border px-4 py-3 text-base text-black transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              !error && [
                "border-brand-black-300",
                "focus:border-principal-purple-1",
              ],
              error && ["border-red-400", "focus-visible:ring-red-400"],
              Icon && "pl-12",
              initialType === "password" && "pr-12",
              className
            )}
            ref={ref}
            {...props}
          />
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
        {error && (
          <p className="mt-1 text-sm text-red-400">{error.toString()}</p>
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
