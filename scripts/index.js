import { criptoButton, decryptButton, copyButton} from './elementosDom.js'
import ManipuladorApp from './appManipulador.js'
import CryptHandler from './cryptHandler.js'
const appManipulador = new ManipuladorApp()
const cryptHandler = new CryptHandler()
criptoButton.addEventListener('click',  cryptHandler.criptografar)
decryptButton.addEventListener('click', cryptHandler.descriptografar)
copyButton.addEventListener('click', appManipulador.copy)