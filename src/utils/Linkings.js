import { Linking} from 'react-native'

function sendEmail() {
  // email?subject=''&body=''
  Linking.openURL('mailto:carlossts826@gmail.com') 
}

function sendLinkedIn() {
  Linking.openURL('https://www.linkedin.com/in/carlos-ferreira-4b2ba219a')
}

function sendInstagram() {
  Linking.openURL('https://www.instagram.com/carlos_ferreira826/') 
}

export {sendEmail, sendLinkedIn,sendInstagram }