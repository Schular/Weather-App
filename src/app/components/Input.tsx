type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string
  label: string
}

export const Input = ({ name, label, type = 'text', ...props }: InputProps) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input placeholder={label} type={type} name={name} id={name} {...props} />
  </>
)
