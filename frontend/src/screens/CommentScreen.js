import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Moment from 'react-moment'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  listComment,
  createComment,
  updateComment,
  deleteComment,
} from '../actions/commentActions'

import { confirmAlert } from 'react-confirm-alert'
import { Confirm } from '../components/Confirm'

const CommentScreen = () => {
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()
  const commentList = useSelector((state) => state.commentList)
  const { comments, error, loading } = commentList

  const commentCreate = useSelector((state) => state.commentCreate)
  const {
    error: errorCreate,
    loading: loadingCreate,
    success: successCreate,
  } = commentCreate

  const commentUpdate = useSelector((state) => state.commentUpdate)
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = commentUpdate

  const commentDelete = useSelector((state) => state.commentDelete)
  const {
    error: errorDelete,
    loading: loadingDelete,
    success: successDelete,
  } = commentDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const formCleanHandler = () => {
    setComment('')
  }

  useEffect(() => {
    dispatch(listComment())
    if (successCreate || successUpdate) {
      formCleanHandler()
    }
    // eslint-disable-next-line
  }, [dispatch, successCreate, successUpdate, successDelete])

  const deleteHandler = (id) => {
    confirmAlert(Confirm(() => dispatch(deleteComment(id))))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(createComment(comment))
  }

  const editHandler = (e) => {
    dispatch(updateComment(e))
  }

  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems =
    comments && comments.slice(indexOfFirstItem, indexOfLastItem)
  const totalItems = comments && Math.ceil(comments.length / itemsPerPage)

  return (
    <>
      <div
        className='modal fade'
        id='editCommentModal'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='editCommentModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content modal-background'>
            <div className='modal-header'>
              <h5 className='modal-title' id='editCommentModalLabel'>
                Add Comment
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={formCleanHandler}
              ></button>
            </div>
            <div className='modal-body'>
              {successCreate && (
                <Message variant='success'>Comment Added Successfully</Message>
              )}
              {loadingCreate ? (
                <Loader />
              ) : (
                errorCreate && <Message variant='danger'>{errorCreate}</Message>
              )}

              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant='danger'>{error}</Message>
              ) : (
                <form onSubmit={submitHandler}>
                  <div className='row gy-2'>
                    <hr className='mt-0' />

                    <div className='form-group'>
                      <label htmlFor='comment'>Comment</label>
                      <input
                        required
                        name='comment'
                        type='text'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className='form-control '
                        placeholder='Enter comment '
                      />
                    </div>

                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                        onClick={formCleanHandler}
                      >
                        Close
                      </button>
                      <button type='submit' className='btn btn-primary'>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between'>
        <h1>Comments</h1>
        <button
          className='btn btn-light btn-sm'
          data-bs-toggle='modal'
          data-bs-target='#editCommentModal'
        >
          {' '}
          <i className='fas fa-plus'></i> ADD NEW COMMENT
        </button>
      </div>

      {successDelete && (
        <Message variant='success'>Comment Deleted Successfully</Message>
      )}
      {loadingDelete ? (
        <Loader />
      ) : (
        errorDelete && <Message variant='danger'>{errorDelete}</Message>
      )}
      {successUpdate && (
        <Message variant='success'>Comment Updated Successfully</Message>
      )}
      {loadingUpdate ? (
        <Loader />
      ) : (
        errorUpdate && <Message variant='danger'>{errorUpdate}</Message>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div className='table-responsive'>
            <table className='table table-sm hover bordered striped'>
              <thead>
                <tr>
                  <th>DATE & TIME</th>
                  <th>COMMENTED BY</th>
                  <th>COMMENT</th>
                  <th>APPROVED BY</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems &&
                  currentItems.map((comment) => (
                    <tr key={comment._id}>
                      <td>
                        <Moment format='YYYY-MM-DD HH:mm:ss'>
                          {moment(comment.createdAt)}
                        </Moment>
                      </td>
                      <td>{comment.commentedBy && comment.commentedBy.name}</td>
                      <td>{comment.comment}</td>
                      <td>
                        {comment.commentApprovedBy ? (
                          comment.commentApprovedBy.name
                        ) : (
                          <i
                            className='fas fa-times'
                            style={{ color: 'red' }}
                          ></i>
                        )}
                      </td>

                      <td className='btn-group' role='group'>
                        <button
                          className='btn btn-success btn-sm'
                          onClick={(e) => editHandler(comment)}
                          disabled={!comment.active}
                        >
                          <i className='fas fa-check'></i>
                        </button>

                        {comment.commentedBy &&
                          comment.commentedBy._id === userInfo._id && (
                            <button
                              className='btn btn-danger btn-sm'
                              onClick={() => deleteHandler(comment._id)}
                            >
                              <i className='fas fa-trash'></i>
                            </button>
                          )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {comments && !loading && comments.length === 0 && (
              <span className='text-danger d-flex justify-content-center'>
                No data found!
              </span>
            )}
            {comments.length > itemsPerPage && (
              <div className='d-flex justify-content-center'>
                <ReactPaginate
                  previousLabel='previous'
                  previousClassName='page-item'
                  previousLinkClassName='page-link'
                  nextLabel='next'
                  nextClassName='page-item'
                  nextLinkClassName='page-link'
                  pageClassName='page-item'
                  pageLinkClassName='page-link'
                  activeClassName='page-item active'
                  activeLinkClassName={'page-link'}
                  breakLabel={'...'}
                  breakClassName={'page-item'}
                  breakLinkClassName={'page-link'}
                  pageCount={totalItems && totalItems}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={2}
                  onPageChange={(e) => setCurrentPage(e.selected + 1)}
                  containerClassName={'page pagination'}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default CommentScreen
