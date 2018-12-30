import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'

// Call the renderNotes function the first time so the user sees something
renderNotes()

document.querySelector('#create-note').addEventListener('click', e => {
    const id = createNote()
    location.assign(`/edit.html#${id}`)
})

// Call it when the user interacts with the page
document.querySelector('#search-text').addEventListener('input', e => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', e => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        renderNotes()
    }
})






