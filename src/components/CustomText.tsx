import type { FC } from "react";

type Props = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
};

const CustomText: FC<Props> = (props) => {
  const { variant, children } = props;

  const Text = variant;

  const styles = {
    h1: "font-bold text-4xl",
    h2: "font-bold text-3xl",
    h3: "font-bold text-2xl",
    h4: "font-bold text-xl",
    h5: "font-bold text-lg",
    h6: "font-bold text-base",
    p: "text-base",
    span: "text-sm",
  };

  return <Text className={`${styles[variant]}`}>{children}</Text>;
};

export default CustomText;
