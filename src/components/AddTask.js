import { useState } from "react"

export default function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Entrer une tâche s\'il vous plait')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)


    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label>Tâche</label>
            <input type='text' placeholder='Ajouter tâche' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Jour et Heure</label>
            <input type='text' placeholder='Ajouter Date & heure' value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Rappel</label>
            <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Enregistrer tâche' className='btn btn-block'/>
    </form>
  )
}
