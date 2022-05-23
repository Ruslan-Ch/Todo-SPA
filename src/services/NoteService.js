import { LocalStorageService } from './LocalStorageService'

/**
 * @typedef Note
 * @property {string} noteId - id of note
 * @property {string} title - title of note
 * @property {array} todos - list of todos
 */

/**
 * Ключ, под которым мы сохраняем Notes в LS
 * @type {string}
 */
export const STORAGE_KEY = 'notes'

export const NoteService = {
  /**
   * Сохраняет все предоставленные элементы заметок
   * @param {Note[]} items
   */
  storeAll (items) {
    LocalStorageService.setItem(STORAGE_KEY, items)
  },
  /**
   * Получить все заметки
   * @return {notes[]}
   */
  fetchNotes () {
    return LocalStorageService.getItem(STORAGE_KEY, [])
  },
  /**
   * Получить заметку по Id
   * @return {note}
   */
  getItemById (noteId) {
    const items = LocalStorageService.getItem(STORAGE_KEY, [])
    const index = items.findIndex(i => i.noteId === noteId)
    if (index === -1) return
    return items[index]
  },
  /**
   * Обновляет элемент заметки.
   * @param {String} noteId
   * @param {Note} payload
   */
  updateItem (noteId, payload) {
    const items = NoteService.fetchNotes()
    const index = items.findIndex(i => i.noteId === noteId)
    if (index === -1) {
      items.push(payload)
    } else {
      items.splice(index, 1, payload)
    }
    NoteService.storeAll(items)
  },
  /**
   * Удалить элемент заметки из списка
   * @param {string} noteId
   */
  removeItem (noteId) {
    const items = NoteService.fetchNotes()
    const index = items.findIndex(i => i.noteId === noteId)
    items.splice(index, 1)
    NoteService.storeAll(items)
  }
}
