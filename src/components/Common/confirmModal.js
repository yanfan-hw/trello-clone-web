import React from 'react'
import { CONST_MODAL_ACTION_CLOSE, CONST_MODAL_ACTION_CONFIRM } from 'ultilities/constant'

import { Modal, Button } from 'react-bootstrap'

function ConfirmModal(props) {
  const { title, content, show, onAction } = props
  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      onHide={() => onAction('close')}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onAction(CONST_MODAL_ACTION_CLOSE)}>
              Close
        </Button>
        <Button variant="primary" onClick={() => onAction(CONST_MODAL_ACTION_CONFIRM)}>
              Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmModal
