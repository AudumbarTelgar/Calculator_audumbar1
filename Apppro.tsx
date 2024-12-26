import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  useColorScheme,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const App: React.FC = () => {
  const [result, setResult] = useState<string>('');

  // Automatically get the system's color scheme (light or dark)
  const colorScheme = useColorScheme();

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: 'rgb(220, 220, 220)',
    light2: '#F7F7F7',
  };

  const calculate = (title: string): void => {
    if (title === 'C') {
      setResult('');
    } else if (title === 'DL') {
      setResult(result.substring(0, result.length - 1));
    } else if (title === '=') {
      try {
        const ans = Number(eval(result).toFixed(3)).toString();
        setResult(ans);
      } catch {
        setResult('Error');
      }
    } else {
      setResult(result + title);
    }
  };

  const Btn: React.FC<{ title: string; type?: string }> = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={[
        styles.btn,
        {
          backgroundColor: getColor(colors.light1, colors.dark2),
        },
      ]}
    >
      <Text
        style={[styles.btnText, { color: getBtnColor(type) }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getBtnColor = (type?: string): string => {
    if (type === 'top') {
      return '#4CAF50';
    } else if (type === 'right') {
      return '#EB6363';
    }
    return getColor(colors.dark, colors.light);
  };

  const getColor = (light: string, dark: string): string => (colorScheme === 'dark' ? dark : light);

  return (
    <View
      style={[styles.container, { backgroundColor: getColor(colors.light, colors.dark) }]}
    >
      <Text
        style={[
          styles.resultText,
          { color: getColor(colors.dark, colors.light) },
        ]}
      >
        {result || '0'}
      </Text>
      <View
        style={[
          styles.buttonContainer,
          {
            backgroundColor: getColor(colors.light1, colors.dark1),
          },
        ]}
      >
        {[
          { title: 'C', type: 'top' },
          { title: 'DL', type: 'top' },
          { title: '/', type: 'top' },
          { title: '%', type: 'top' },
          { title: '7', type: 'number' },
          { title: '8', type: 'number' },
          { title: '9', type: 'number' },
          { title: '*', type: 'right' },
          { title: '4', type: 'number' },
          { title: '5', type: 'number' },
          { title: '6', type: 'number' },
          { title: '+', type: 'right' },
          { title: '1', type: 'number' },
          { title: '2', type: 'number' },
          { title: '3', type: 'number' },
          { title: '-', type: 'right' },
          { title: '00', type: 'number' },
          { title: '0', type: 'number' },
          { title: '.', type: 'number' },
          { title: '=', type: 'right' },
        ].map((btn, index) => (
          <Btn key={index} title={btn.title} type={btn.type} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  resultText: {
    fontSize: 40,
    width: '90%',
    textAlign: 'right',
    marginVertical: height * 0.1,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    elevation: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    paddingVertical: 10,
  },
  btn: {
    height: width * 0.2,
    width: width * 0.2,
    borderRadius: 10,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  btnText: {
    fontSize: 28,
    textAlign: 'center',
  },
});

export default App;
