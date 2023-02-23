import {StyleSheet} from 'react-native';
import {theme} from '../../themes';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.background.primary,
  },
  title: {
    fontSize: theme.fontSize.title,
    fontWeight: 'bold',
    color: theme.color.primary,
  },
  subtitle: {
    fontSize: theme.fontSize.big,
    color: theme.color.subtitle,
  },
  inputContainer: {
    marginVertical: theme.margin.vertical,
    gap: 12,
  },
  proficiencyInput: {
    backgroundColor: theme.background.secondary,
    height: 55,
    padding: 15,
    color: theme.color.primary,
    borderRadius: theme.borderRadius,
    fontSize: theme.fontSize.small,
  },
  input: {
    backgroundColor: theme.background.secondary,
    height: 55,
    padding: 15,
    color: theme.color.primary,
    borderRadius: theme.borderRadius,
    fontSize: theme.fontSize.small,
    flex: 1,
  },
  button: {
    borderRadius: theme.borderRadius,
    backgroundColor: theme.color.purple,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 55,
    padding: 15,
  },
  buttonText: {
    fontSize: theme.fontSize.medium,
    color: theme.color.primary,
  },
  textInputContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});
