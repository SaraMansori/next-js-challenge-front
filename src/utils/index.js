export const checkEmptyObject = (object) => {
  return Object.keys(object).length === 0
  //&& object.constructor === Object
}