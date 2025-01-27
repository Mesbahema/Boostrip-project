import { FormHelperText, FormLabel, Grid2, MenuItem, OutlinedInput, Select, styled } from '@mui/material'
import { useFormikContext } from 'formik';

const FormGrid = styled(Grid2)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

type SelectInputProps = {
    name: string,
    placeholder: string,
    label: string,
    options: Array<{
        label: string, 
        value: string
    }>
}

interface FormValues {
    [key: string]: string; // If your form has dynamic fields
}

const SelectInput = ({ name, placeholder, label, options }: SelectInputProps) => {

    const { errors, touched, values, handleChange, handleBlur } = useFormikContext<FormValues>()

    const isError = Boolean(errors[name]) && Boolean(touched[name])

    return (
        <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel error={isError} htmlFor={name} required>
                {label}
            </FormLabel>
            <Select
                error={isError}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]}
                displayEmpty
                sx={{
                    '& > div': { padding: '8.5px 14px', color: values[name] ? 'text.primary': 'text.disabled' }
                }}
                input={<OutlinedInput sx={{color: values[name] ? 'text.primary': 'text.disabled', 
                    '& > div': { padding: '8.5px 14px' }
                }}/>}
                
            >
                <MenuItem disabled value="">
                    <em>{placeholder}</em>
                </MenuItem>
                {options.map((item) => (<MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>))}
                
            </Select>
            {touched[name] && <FormHelperText error id="filled-weight-helper-text">{errors[name]}</FormHelperText>}
        </FormGrid>
    )
}

export default SelectInput