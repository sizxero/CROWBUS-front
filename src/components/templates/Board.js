import { Input, TextArea } from '../atoms';
import { ColumnFlexBoxCenter } from '../molecules';
import { BoardSelectBox, RouteSelectBox, BoardWriteButtons } from '../organisms';

import { useSelector, useDispatch } from 'react-redux';
import * as BoardAction  from '../../redux/actions/BoardAction';
import BoardAPI from '../../hooks/api/BoardAPI';

const PostCreateWrapper = () => {
    const dispatch = useDispatch();
    const postWriteState = useSelector((state) => state.boardReducer.create);    
    
    const onClickCreateBtn = async () => {
        const status = await BoardAPI.postCreate(postWriteState);
        if (status === 200) {
            window.location.href = postWriteState.boardType === '공지사항' ? '/notice' : '/lost-found';
        } else {
            alert('post upload error: ', status);
        }
    }

    return (
        <ColumnFlexBoxCenter className="PostCreateWrapper">
            <table className="PostCreateTable">
                <tr>
                    <th>게시판</th>
                    <td><BoardSelectBox className="CustomInput" 
                    eventHandler={(e) => dispatch(BoardAction.selectBoardPostCreate(e.target.value))} /></td>
                </tr>
                <tr>
                    <th>노선</th>
                    <td><RouteSelectBox className="CustomInput" 
                    eventHandler={(e) => dispatch(BoardAction.selectRoutePostCreate(e.target.value))} /></td>
                </tr>
                <tr>
                    <th>제목</th>
                    <td><Input className="CustomInput" 
                    eventHandler={(e) => dispatch(BoardAction.writeTitlePostCreate(e.target.value))} /></td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td><TextArea className="CustomInput"
                    eventHandler={(e) => dispatch(BoardAction.writeContentPostCreate(e.target.value))} /></td>
                </tr>
            </table>
            <BoardWriteButtons btn={{name: '등록', onclick: onClickCreateBtn}}/>
        </ColumnFlexBoxCenter>
    );
}

export { PostCreateWrapper }