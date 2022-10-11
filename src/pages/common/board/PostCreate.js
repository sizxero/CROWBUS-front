import { ColumnFlexBox } from '../../../components/molecules';
import { TopLogo } from '../../../components/organisms';
import { PostCreateWrapper } from '../../../components/templates';

const PostCreate = () => {
    return (
        <ColumnFlexBox className="PostCreateContainer">
        <TopLogo />
        <PostCreateWrapper />
        </ColumnFlexBox>
    );
}

export default PostCreate;