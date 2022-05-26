import { Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    console.log(campsiteId);
    console.log("1sadsadsa");

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm campsiteId={campsiteId} />
            </Col>
        );
    }

    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
            {campsiteId}
        </Col>
    );
};

export default CommentsList;