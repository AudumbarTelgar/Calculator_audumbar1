import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    'C', '/', '*', '-',
    '7', '8', '9', '+',
    '4', '5', '6', '=',
    '1', '2', '3', '.',
    '0',
  ];

  return (
    <View style={styles.container}>
      {/* Display Section */}
      <View style={styles.display}>
        <Text style={styles.resultText}>{result || '0'}</Text>
        <Text style={styles.inputText}>{input || '0'}</Text>
      </View>

      {/* Button Section */}
      <View style={styles.buttons}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, button === '=' ? styles.equalButton : {}]}
            onPress={() => handlePress(button)}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Calc by Audumbar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'space-between',
  },
  display: {
    flex: 2,
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  resultText: {
    fontSize: 50,
    color: '#fff',
  },
  inputText: {
    fontSize: 30,
    color: '#fff',
    opacity: 0.7,
  },
  buttons: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    width: '22%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3e3e3e',
    margin: 5,
    borderRadius: 5,
  },
  equalButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
  footer: {
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default App;