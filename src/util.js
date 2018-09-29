import pluralize from 'pluralize';
import upperCamelCase from 'simple-uppercamelcase';
import camelcase from 'camelcase';

const main = () => {
  const name = "group_user"

  console.log(pluralize(name))
  console.log(pluralize(name).toLowerCase())
  console.log(pluralize(name).toUpperCase())
  console.log(upperCamelCase(pluralize(name)))
  console.log(camelcase(pluralize(name)))
  console.log(pluralize.singular(name))
  console.log(pluralize.singular(name).toLowerCase())
  console.log(pluralize.singular(name).toUpperCase())        
}
main()