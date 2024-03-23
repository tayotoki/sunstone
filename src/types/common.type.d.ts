declare type FormType<T> = Record<
  keyof T,
  import('react-hook-form').RegisterOptions<T>
>;
