
import { sayHello } from '../../lib'



document.querySelector('#btn').addEventListener('click', async () => {
  document.querySelector('#result').innerHTML = sayHello('kid')
})
