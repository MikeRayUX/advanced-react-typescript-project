import { Note as NoteType } from "./App"
import { Navigate, useParams, Outlet, useOutletContext } from 'react-router-dom'
import { Note } from './Note'

type PropTypes = {
  notes: NoteType[]
}

export function NoteLayout({ notes }: PropTypes) {
  const { id } = useParams()
  const note = notes.find(n => n.id === id)

  if (note === null) return <Navigate to="/" replace />

  return (
    <Outlet context={note} />
  )
}

export function useNote() {
  return useOutletContext<NoteType>()
}
