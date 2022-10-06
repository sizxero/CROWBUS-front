import { Date, LeftButton, RightButton, Input, SearchButton } from '../atoms';
import { RowFlexBox } from '../molecules';

const DateSearch = () => {
    return (<RowFlexBox>
        <LeftButton /><Date /><RightButton />
    </RowFlexBox>);
}

const TextSearch = () => {
    return (<RowFlexBox>
        <Input /><SearchButton />
    </RowFlexBox>);
}

export { DateSearch, TextSearch }