import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import { buttonClasses, type StyleProps } from "@/lib/buttonStyles";

const Content = ({
  children,
  leftIcon,
  rightIcon,
}: {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}) => (
  <>
    {leftIcon}
    <span>{children}</span>
    {rightIcon}
  </>
);

export const ButtonLink = ({
  variant,
  size,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={cn(buttonClasses({ variant, size }), className)} {...props}>
    <Content leftIcon={leftIcon} rightIcon={rightIcon}>
      {children}
    </Content>
  </a>
);

export const Button = ({
  variant,
  size,
  leftIcon,
  rightIcon,
  className,
  children,
  type = "button",
  ...props
}: StyleProps & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type={type}
    className={cn(buttonClasses({ variant, size }), className)}
    {...props}
  >
    <Content leftIcon={leftIcon} rightIcon={rightIcon}>
      {children}
    </Content>
  </button>
);
