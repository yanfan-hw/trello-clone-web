import React, { useState, useEffect, useRef, useCallback } from 'react'
import Column from 'components/Column/Column'
import { mapOrder } from 'ultilities/sorts'
import { applyDrag } from 'ultilities/dragDrop'
import { Container, Draggable } from 'react-smooth-dnd'
import { Container as BootstrapContainer, Row, Col, Form, Button } from 'react-bootstrap'

import './BoardContent.scss'

import { initialData } from 'actions/initialData'

import { isEmpty } from 'lodash'

function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState([])
  const [openInputNewColumn, setopenInputNewColumn] = useState(false)

  const newColumnInputRef = useRef(null)

  const [newColumnTitle, setnewColumnTitle] = useState('')
  const onNewColumnTitleChange = useCallback((e) => setnewColumnTitle(e.target.value), [] )

  useEffect(() => {
    const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
    if (boardFromDB) {
      setBoard(boardFromDB)

      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columOrder, 'id'))
    }
  }, [])

  useEffect(() => {
    if (newColumnInputRef && newColumnInputRef.current) {
      newColumnInputRef.current.focus()
      newColumnInputRef.current.select()
    }
  }, [openInputNewColumn])
  if (isEmpty(board)) {
    return <div className="not-found">Board not found!</div>
  }

  const onColumnDrop = (dropResult) => {
    let newColumns = [...columns]
    newColumns = applyDrag(newColumns, dropResult)

    let newBoard = { ...board }
    newBoard.columOrder = newColumns.map( c => c.id)
    newBoard.columns = newColumns

    setColumns(newColumns)
    setBoard(newBoard)
  }

  const onCardDrop = (coulumnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newColumns = [...columns]
      let currentColumn = newColumns.find(c => c.id === coulumnId)

      currentColumn.cards = applyDrag(currentColumn.cards, dropResult)
      currentColumn.cardOrder = currentColumn.cards.map(i => i.id)

      setColumns(newColumns)
    }

  }

  const toogleOpenInputNewColumn = () => setopenInputNewColumn(!openInputNewColumn)

  const addNewColumn = () => {
    if (!newColumnTitle) {
      newColumnInputRef.current.focus()
      return
    }

    const newColumnToAdd = {
      id: Math.random().toString(36).substr(2, 5),
      boardId: board.id,
      title: newColumnTitle.trim(),
      cardOrder: [],
      cards: []
    }

    let newColumns = [...columns]
    newColumns.push(newColumnToAdd)

    let newBoard = { ...board }
    newBoard.columOrder = newColumns.map( c => c.id)
    newBoard.columns = newColumns

    setColumns(newColumns)
    setBoard(newBoard)
    setnewColumnTitle('')
    toogleOpenInputNewColumn()
  }

  const onUpdateColumn = (newColumnToUpdate) => {
    const columnIdToUpdate = newColumnToUpdate.id

    let newColumns = [...columns]
    const columnIndexToUpdate = newColumns.findIndex(i => i.id === columnIdToUpdate)

    if (newColumnToUpdate._destroy) {
      //remove Column
      newColumns.splice(columnIndexToUpdate, 1)
    } else {
      //update ColumnTitle
      newColumns.splice(columnIndexToUpdate, 1, newColumnToUpdate)
    }

    let newBoard = { ...board }
    newBoard.columOrder = newColumns.map( c => c.id)
    newBoard.columns = newColumns

    setColumns(newColumns)
    setBoard(newBoard)
  }

  return (
    <div className='board-content'>
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={index => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview'
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} onCardDrop={onCardDrop} onUpdateColumn={onUpdateColumn} />
          </Draggable>
        ))}
      </Container>
      <BootstrapContainer className='trello-bootstrap-container'>
        {!openInputNewColumn &&
          <Row>
            <Col className='add-new-column' onClick={toogleOpenInputNewColumn}>
              <i className='fa fa-plus icon'/>Add another list
            </Col>
          </Row>
        }

        {openInputNewColumn &&
          <Row>
            <Col className='input-new-column'>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter list title..."
                className="input-enter-new-column"
                ref={newColumnInputRef}
                value={newColumnTitle}
                onChange={onNewColumnTitleChange}
                onKeyDown={event => (event.key === 'Enter') && addNewColumn()}
              />
              <Button variant="success" size="sm" onClick={addNewColumn}>Add list</Button>{' '}
              <span className='cancel-new-column'onClick={toogleOpenInputNewColumn}>
                <i className='fa fa-times icon' />
              </span>
            </Col>
          </Row>
        }
      </BootstrapContainer>
    </div>
  )
}

export default BoardContent