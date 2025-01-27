import { FormHelperText, FormLabel, Grid2, OutlinedInput, styled } from '@mui/material'
import { useFormikContext } from 'formik';

const FormGrid = styled(Grid2)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

type TextInputProps = {
    name: string,
    placeholder: string,
    label: string
}

interface FormValues {
    [key: string]: string; // If your form has dynamic fields
}

const TextInput = ({ name, placeholder, label }: TextInputProps) => {

    const { errors, touched, values, handleChange, handleBlur } = useFormikContext<FormValues>()

    const isError = Boolean(errors[name]) && Boolean(touched[name])

    return (
        <FormGrid size={{ xs: 12 }}>
            <FormLabel error={isError} htmlFor={name} required>
                {label}
            </FormLabel>
            <OutlinedInput
                error={isError}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]}
                id={name}
                name={name}
                type="name"
                placeholder={placeholder}
                size="small"
            />
            {touched[name] && <FormHelperText error id="filled-weight-helper-text">{errors[name]}</FormHelperText>}
        </FormGrid>
    )
}

export default TextInput