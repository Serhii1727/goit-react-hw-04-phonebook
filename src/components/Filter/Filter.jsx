import PropTypes from 'prop-types';
import { ContainerFilter, Input } from './Filter.styled'

const Filter = ({ value, onChange }) => {
    return (
        <ContainerFilter>
            <label htmlFor="">
                Find contacts by name
                <Input type="text" value={value} onChange={onChange}></Input>
            </label>
        </ContainerFilter>
    )
}

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

