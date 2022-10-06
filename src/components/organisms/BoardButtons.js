import { ContainedButton } from "../atoms";
import { RowFlexBoxCenter } from "../molecules";

const BoardButtons = (props) => {
    if(props.auth === 'me') {
        return (<RowFlexBoxCenter className="BoardButtonsMe">
            <ContainedButton 
            className="containedBtnBlue"
            content="수정" />
            <ContainedButton 
            className="containedBtnBlue"
            content="삭제" />
            <ContainedButton
            className="containedBtnGray" 
            content="목록" />
        </RowFlexBoxCenter>);
    } else {
        return (<RowFlexBoxCenter className="BoardButtonsOther">
            <ContainedButton 
            className="containedBtnGray" 
            content="목록" />
        </RowFlexBoxCenter>);
    }
}

export { BoardButtons }