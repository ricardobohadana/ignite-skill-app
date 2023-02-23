import {StyleSheet} from 'react-native';
import {theme} from '../../themes';

export const styles = StyleSheet.create({
  skillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    flex: 1,
  },

  text: {
    fontSize: theme.fontSize.medium,
    color: theme.color.primary,
  },
  proficencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 8,
  },
  proficiencyDotLight: {
    height: 20,
    width: 20,
    backgroundColor: theme.background.light,
    borderRadius: 9999,
  },
  proficiencyDotDark: {
    height: 20,
    width: 20,
    backgroundColor: '#222',
    borderRadius: 9999,
  },
  deleteButton: {
    width: 35,
    height: 55,
    backgroundColor: theme.color.danger,
    borderRadius: theme.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  deleteButtonText: {
    textAlign: 'center',
    fontSize: 36,
    color: theme.color.primary,
  },
  skillOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});
