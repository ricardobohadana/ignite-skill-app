import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Skill} from '../../components/Skill';
import {theme} from '../../themes';
import {styles} from './styles';

interface ISkill {
  id: number;
  name: string;
  proficiency: number;
}
const defaultSkills: ISkill[] = [
  {
    id: new Date().getTime(),
    name: 'React',
    proficiency: 5,
  },
  {
    id: new Date().getTime() + 1,
    name: 'React Native',
    proficiency: 3,
  },
  {
    id: new Date().getTime() + 2,
    name: 'Node.js',
    proficiency: 4,
  },
];

export function Home() {
  const [skills, setSkills] = useState(defaultSkills);
  const [proficiency, setProficiency] = useState('');
  const [name, setName] = useState('');

  function onChangeProficiency(value: string) {
    if (!value) {
      setProficiency('');
      return;
    }
    const numericValue = parseInt(value, 10);
    if (
      (numericValue !== 0 && !numericValue) ||
      numericValue > 5 ||
      numericValue < 0
    ) {
      Alert.alert('Erro', 'A proficiência deve ser um número entre 0 e 5.');
      return;
    }
    setProficiency(numericValue.toString());
  }

  function handleRemoveSkill(id: number) {
    setSkills(prevState => prevState.filter(s => s.id !== id));
  }

  function handleAddSkill() {
    Keyboard.dismiss();
    const proficiencyValue = parseInt(proficiency, 10);
    if (!name || !proficiency) {
      Alert.alert(
        'Erro',
        'O nome da skill e a proficiência devem ser preenchidos!.',
      );
      return;
    }
    const skill: ISkill = {
      id: new Date().getTime(),
      name,
      proficiency: proficiencyValue,
    };

    setSkills(prevState => [...prevState, skill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ricardo Bohadana Martins</Text>
      <Text style={styles.subtitle}>Software Engineer</Text>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nova skill"
            placeholderTextColor={theme.color.subtitle}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={{...styles.proficiencyInput}}
            placeholder="0-5"
            keyboardType="numeric"
            placeholderTextColor={theme.color.subtitle}
            value={proficiency}
            onChangeText={onChangeProficiency}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddSkill}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <Text style={{...styles.title, fontSize: theme.fontSize.big}}>
        Minhas Skills
      </Text>
      <FlatList
        data={skills}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Skill {...item} removeSkill={handleRemoveSkill} />
        )}
        ListEmptyComponent={
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista
            do evento
          </Text>
        }
      />
    </View>
  );
}
