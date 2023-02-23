import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface SkillProps {
  name: string;
  proficiency: number;
  id: number;
  removeSkill: (id: number) => void;
}

export function Skill({name, proficiency, id, removeSkill}: SkillProps) {
  const dotStyles = [
    proficiency > 0 ? styles.proficiencyDotLight : styles.proficiencyDotDark,
    proficiency > 1 ? styles.proficiencyDotLight : styles.proficiencyDotDark,
    proficiency > 2 ? styles.proficiencyDotLight : styles.proficiencyDotDark,
    proficiency > 3 ? styles.proficiencyDotLight : styles.proficiencyDotDark,
    proficiency > 4 ? styles.proficiencyDotLight : styles.proficiencyDotDark,
  ];

  return (
    <View style={styles.skillOuterContainer}>
      <View style={styles.skillContainer}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.proficencyContainer}>
          {dotStyles.map((dotStyle, i) => (
            <View style={dotStyle} key={new Date().getTime() + i} />
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => removeSkill(id)}>
        <Text style={styles.deleteButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
