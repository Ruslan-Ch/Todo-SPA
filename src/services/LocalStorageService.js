export const LocalStorageService = {
  /**
   * Получить элемент из LocalStorage
   * Позволяет сохранять любые данные JSON
   * @param {String} key - Ключ для получения данных по
   * @param {*} [fallback] - резервное значение, если ключ не найден
   * @return {*}
   */
  getItem (key, fallback) {
    try {
      let item = window.localStorage.getItem(key)
      return item ? window.JSON.parse(item) : fallback
    } catch (err) {
      return fallback
    }
  },
  /**
   * Устанавливает элемент по его ключу
   * @param {String} key - Ключ для сохранения
   * @param {*} value - Значение для сохранения. Преобразовывает в строку JSON
   */
  setItem (key, value = {}) {
    window.localStorage.setItem(key, window.JSON.stringify(value))
  },
  /**
   * Удалить элемент по его ключу
   * @param {string} key
   */
  removeItem (key) {
    window.localStorage.removeItem(key)
  },
  /**
   * Удаляет все предметы из хранилища
   */
  clearAllItems () {
    window.localStorage.clear()
  }
}
