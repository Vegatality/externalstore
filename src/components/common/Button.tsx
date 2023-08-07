import { cn } from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';

export const ButtonVariants = cva(
  `f-ic-jc active:scale-95 rounded-xl text-sm font-bold text-slate-100 transition-all shadow-md hover:scale-105 duration-200
  `,
  {
    variants: {
      intendedColor: {
        primary: ['shadow-lg', 'bg-red-700'],
        secondary: ['shadow-none', 'bg-blue-700', 'ring ring-yellow-400'],
      },
      /**
       * Button Size
       */
      size: {
        default: '',
        md: 'w-[6.875rem] h-[2.375rem] text-[1rem] rounded-md',
        // lg: [' w-[21.875rem] h-[7.5rem] text-[3rem] rounded-2xl'],
        lg: ' px-36 h-[7.5rem] text-[3rem] rounded-2xl',
        wlg: 'w-[24rem] h-[5.25rem] text-[2rem]',
      },
      /**
       * Text formatting
       */
      textTransform: {
        default: '',
        capitalize: 'capitalize',
        lowercase: 'lowercase',
        uppercase: 'uppercase',
      },
      /**
       * for Error notice?
       */
      isError: {
        true: true,
        false: false,
      },
    },
    compoundVariants: [
      {
        size: 'md',
        className: 'max-md:bg-primary lowercase',
      },
      {
        size: 'lg',
        className: 'max-lg:bg-secondary max-lg:px-10',
      },
      {
        size: 'wlg',
        className: 'uppercase ring ring-yellow-400',
      },
      {
        isError: true,
        className: 'text-red-500',
      },
    ],
    defaultVariants: {
      intendedColor: 'primary',
      size: 'default',
      textTransform: 'default',
      isError: false,
    },
  },
);

// export type ButtonVariantProps = {
//   label?: string | number;
// } & React.HTMLAttributes<HTMLButtonElement> &
//   VariantProps<typeof ButtonVariants>;
export type ButtonVariantProps = {
  /**
   * Button name
   */
  label?: string | number;

  /**
   * Button name or svg else...
   */
  children?: React.ReactNode;

  /**
   * custom tailwind style to add on the default selected button style
   */
  className?: string;

  /**
   * isError?
   */
  isError?: boolean;

  /**
   * callback function of mouse click event
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * callback function of mouseover event
   */
  onMouseOver?: () => void;

  /**
   * callback function of keydown event
   */
  onKeyDown?: () => void;
} & VariantProps<typeof ButtonVariants>;
// & ComponentProps<'button'>;
// React.HTMLAttributes<HTMLButtonElement>;

/**
 * @description Required property type.
 */
export interface IbuttonProps
  extends Omit<ButtonVariantProps, 'intendedColor'>,
    Required<Pick<ButtonVariantProps, 'intendedColor'>> {}

const Button = ({
  children,
  className,
  intendedColor,
  size,
  label,
  textTransform,
  isError,
  onClick,
  onMouseOver,
  onKeyDown,
}: IbuttonProps) => {
  /**
   * @description `twMerge` helps overlapping cva's base classValue which is the first argument of `cva` create function.
   */
  //  return <button className={ButtonVariants({intendedColor, size, className})} {...rest}>{label? label : children}</button>
  return (
    <button
      className={cn(
        ButtonVariants({
          intendedColor,
          size,
          className,
          textTransform,
          isError,
        }),
      )}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onKeyDown={onKeyDown}
    >
      {label ? label : children}
    </button>
  );
};

export default Button;
