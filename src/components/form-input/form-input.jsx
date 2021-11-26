import { InputGroup, FormInputContainer, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
    <InputGroup>
        <FormInputContainer onChange={handleChange} {...props} />
        {
            label ?
                (<FormInputLabel className={`${props.value.length ? 'shrink' : ''}`}>
                    {label}
                </FormInputLabel>
                ) : null
        }
    </InputGroup>
)

export default FormInput;