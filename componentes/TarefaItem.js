import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function TarefaItem({ tarefa, onRemover, onToggle }) {
  return (
    <View style={styles.container}>
      <Switch
        value={tarefa.concluida}
        onValueChange={() => onToggle(tarefa.id)}
      />

      <Text style={[styles.texto, tarefa.concluida && styles.concluida]}>
        {tarefa.texto}
      </Text>

      <TouchableOpacity onPress={() => onRemover(tarefa.id)}>
        <Text style={styles.remover}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  texto: { fontSize: 16, flex: 1, marginLeft: 10 },
  concluida: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  remover: { fontSize: 18 },
});