import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface InputFieldProps {
  name: string;
  control: any;
  label: string;
  placeholder: string;
  isRequired: boolean;
}

export const ContactInput = ({
  control,
  name,
  label,
  placeholder,
  isRequired,
}: InputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg font-medium">
            {label}
            {isRequired && (
              <span className="text-red-500 font-semibold ml-1 text-lg">*</span>
            )}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className="h-12 text-muted-foreground font-medium resize-none hover:shadow"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
