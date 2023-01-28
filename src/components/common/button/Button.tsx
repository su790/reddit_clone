import { buttonStyles } from "@/src/styles/buttonStyles";
import { type VariantProps } from "class-variance-authority";
import React from "react";

type ButtonVariantProps = VariantProps<typeof buttonStyles>;
interface ButtonProps extends ButtonVariantProps {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loadingText?: string;
  otherStyles?: string;
}
const Button = ({
  position,
  intent,
  children,
  onClick,
  type = "button",
  size,
  disabled,
  loading,
  loadingText,
  variant,

  ...rest
}: ButtonProps) => {
  console.log("Sizes", size);
  return (
    <button
      className={buttonStyles({
        intent,
        position,
        size,
        variant,
      })}
      onClick={onClick}
      type={type}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? (
        <>
          <svg
            width="14"
            height="14"
            className="animate-spin "
            viewBox="0 0 14 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_56_7" fill="currentColor">
              <path d="M14 7C14 8.38447 13.5895 9.73785 12.8203 10.889C12.0511 12.0401 10.9579 12.9373 9.67878 13.4672C8.3997 13.997 6.99223 14.1356 5.63437 13.8655C4.2765 13.5954 3.02922 12.9287 2.05025 11.9497C1.07128 10.9708 0.4046 9.7235 0.134503 8.36563C-0.135594 7.00777 0.00302985 5.6003 0.532843 4.32122C1.06266 3.04213 1.95986 1.94888 3.11101 1.17971C4.26215 0.410543 5.61553 -1.65096e-08 7 0L7 1.67532C5.94688 1.67532 4.9174 1.9876 4.04176 2.57269C3.16612 3.15777 2.48365 3.98937 2.08063 4.96233C1.67762 5.93529 1.57218 7.00591 1.77763 8.03879C1.98308 9.07168 2.49021 10.0204 3.23488 10.7651C3.97955 11.5098 4.92832 12.0169 5.96121 12.2224C6.99409 12.4278 8.06471 12.3224 9.03767 11.9194C10.0106 11.5164 10.8422 10.8339 11.4273 9.95824C12.0124 9.0826 12.3247 8.05312 12.3247 7L14 7Z" />
            </mask>
            <path
              d="M14 7C14 8.38447 13.5895 9.73785 12.8203 10.889C12.0511 12.0401 10.9579 12.9373 9.67878 13.4672C8.3997 13.997 6.99223 14.1356 5.63437 13.8655C4.2765 13.5954 3.02922 12.9287 2.05025 11.9497C1.07128 10.9708 0.4046 9.7235 0.134503 8.36563C-0.135594 7.00777 0.00302985 5.6003 0.532843 4.32122C1.06266 3.04213 1.95986 1.94888 3.11101 1.17971C4.26215 0.410543 5.61553 -1.65096e-08 7 0L7 1.67532C5.94688 1.67532 4.9174 1.9876 4.04176 2.57269C3.16612 3.15777 2.48365 3.98937 2.08063 4.96233C1.67762 5.93529 1.57218 7.00591 1.77763 8.03879C1.98308 9.07168 2.49021 10.0204 3.23488 10.7651C3.97955 11.5098 4.92832 12.0169 5.96121 12.2224C6.99409 12.4278 8.06471 12.3224 9.03767 11.9194C10.0106 11.5164 10.8422 10.8339 11.4273 9.95824C12.0124 9.0826 12.3247 8.05312 12.3247 7L14 7Z"
              stroke="currentColor"
              strokeWidth="2"
              mask="url(#path-1-inside-1_56_7)"
            />
          </svg>
          {loadingText && <p className="color-inherit">{loadingText}</p>}
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
