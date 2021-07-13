import { fonts } from '../common/fonts'
import { colors } from '../common/colors'

const screenOptions = {
  headerTitleAlign: "center",
  headerBackTitleVisible: false,
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.black,
    borderBottomWidth: 1,
    borderBottomColor: colors.black70,

  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontFamily: fonts.title
  },
}

export default screenOptions;