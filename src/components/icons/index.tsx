"use clietn";
export const HomeIcon =({
  size = 24,
  strokeWidth = 1.5,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17 21.002H7a4 4 0 0 1-4-4V10.71a4 4 0 0 1 1.927-3.42l5-3.031a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.71v6.292a4 4 0 0 1-4 4Z" />
    <path d="M9 17h6" />
  </svg>
);

export const FoodIcon = ({
  size = 24,
  strokeWidth = 1.5,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 22a8 8 0 0 0 8-8c0-4.418-3.582-12-8-12S4 9.582 4 14a8 8 0 0 0 8 8Z" />
  </svg>
);


export const NotifyIcon = ({
  size = 24,
  strokeWidth = 1.5,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18 8.4c0-1.697-.624-3.245-1.757-4.525C15.117 2.675 13.59 2 12 2c-1.591 0-3.117.674-4.243 1.875C6.624 5.075 6 6.703 6 8.4 6 15.867 3 18 3 18h18s-3-2.133-3-9.6Z" />
    <path d="M13.73 21a1.999 1.999 0 0 1-3.46 0" />
  </svg>
);

export const ProfileIcon = ({
    size = 24,
    strokeWidth = 1.5,
    color = "currentColor",
    ...props
  }) => (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" />
      <path d="M4.271 18.346s2.23-2.846 7.73-2.846 7.729 2.846 7.729 2.846" />
      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );

export const MuscleIcon = ({
  size = 24,
  strokeWidth = 1.5,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.4 7H4.6a.6.6 0 0 0-.6.6v8.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6Z" />
    <path d="M19.4 7h-2.8a.6.6 0 0 0-.6.6v8.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6Z" />
    <path d="M1 14.4V9.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H1.6a.6.6 0 0 1-.6-.6Z" />
    <path d="M23 14.4V9.6a.6.6 0 0 0-.6-.6h-1.8a.6.6 0 0 0-.6.6v4.8a.6.6 0 0 0 .6.6h1.8a.6.6 0 0 0 .6-.6Z" />
    <path d="M8 12h8" />
  </svg>
);

export const TrashIcon = ({
  size = 24,
  strokeWidth = 1.5,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19 11v9.4a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V11" />
    <path d="M10 17v-6" />
    <path d="M14 17v-6" />
    <path d="M8 7h8m5 0h-5 5ZM3 7h5-5Zm5 0V3.6a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6V7H8Z" />
  </svg>
);
