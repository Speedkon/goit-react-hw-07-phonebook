import { updateFilter } from '../../redux/filterSlice';
import { Label, Input } from './Filter.styled';
import { useDispatch } from "react-redux";

export const Filter = () => {
    const dispatch = useDispatch();
    return (
        <Label>
            Find contacts by name
            <Input type="text" name="filter" placeholder="Search" onChange={e => dispatch(updateFilter(e.target.value))} />
        </Label>
    )
}