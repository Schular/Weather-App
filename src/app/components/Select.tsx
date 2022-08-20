type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: string[]
  name: string
  label: string
}

export const Select = ({ label, name, options, children: _children, ...props }: SelectProps) => (
  <>
    <label htmlFor={name}>{label}</label>
    <select name={name} id={name} {...props}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </>
)
