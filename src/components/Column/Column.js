import React, { useCallback, useEffect, useState } from 'react'
import Card from 'components/Card/Card'
import ConfirmModal from 'components/Common/confirmModal'

import { mapOrder } from 'ultilities/sorts'
import { CONST_MODAL_ACTION_CONFIRM } from 'ultilities/constant'

import { Container, Draggable } from 'react-smooth-dnd'
import { Form, Dropdown } from 'react-bootstrap'

import { saveContentAfterPressEnter, selectAllInlineText } from 'ultilities/contentEditInput'
import './Column.scss'

function Column(props) {
  const { column, onCardDrop, onUpdateColumn } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')

  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)

  const onConfirmModalAction = (type) => {
    if (type === CONST_MODAL_ACTION_CONFIRM) {
      const newColumn = {
        ...column,
        _destroy: true
      }
      onUpdateColumn(newColumn)
    }
    toggleShowConfirmModal()
  }


  const [columTitle, setColumtitle] = useState('')

  useEffect(() => {
    setColumtitle(column.title)
  }, [column.title])

  const handleColumnTitleChange = useCallback((e) => setColumtitle(e.target.value), [])

  const handleColumnTitleBlur = () => {
    const newColumn = {
      ...column,
      title: columTitle
    }
    onUpdateColumn(newColumn)
  }

  return (
    <div className='column'>
      <header className='column-drag-handle'>
        <div className='column-title'>
          <Form.Control
            size="sm"
            type="text"
            className="edit-title-column"
            value={columTitle}
            onClick={selectAllInlineText}
            onChange={handleColumnTitleChange}
            onBlur={handleColumnTitleBlur}
            onKeyDown={saveContentAfterPressEnter}
            onMouseDown={e => e.preventDefault()}
            spellCheck="false"
            // ref={newColumnInputRef}
            // onKeyDown={event => (event.key === 'Enter') && addNewColumn()}
          />
        </div>
        <div className='column-dropdown-actions'>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" size="sm" className='dropdown-btn' />
            <Dropdown.Menu>
              <Dropdown.Header>List actions</Dropdown.Header>
              <Dropdown.Item>Add card</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Remove column</Dropdown.Item>
              <Dropdown.Item>Move all cards in this column....</Dropdown.Item>
              <Dropdown.Item>Archive all cards in this column....</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>
      <div className="card-list">
        <Container
          groupName="trello-colums"
          onDrop={dropResult => onCardDrop(column.id, dropResult)}
          getChildPayload={index => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'cards-drop-preview'
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} />
            </Draggable>
          ))}
        </Container>
      </div>
      <footer>
        <div className='footer-actions'>
          <i className='fa fa-plus icon'/>Add a card
        </div>
      </footer>
      <ConfirmModal
        show={showConfirmModal}
        onAction={onConfirmModalAction}
        title="Remove Column"
        content={`Are you sure you want to remove ${column.title}! All related cards will also remove!`}
      />
    </div>
  )
}

export default Column