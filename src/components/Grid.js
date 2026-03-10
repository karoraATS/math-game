import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CELL_SIZE = (width - 40) / 12;

export const Grid = ({ completedRows }) => {
  return (
    <View style={styles.grid}>
      {[...Array(12)].map((_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {[...Array(12)].map((_, colIndex) => {
            const val = (rowIndex + 1) * (colIndex + 1);
            const isFilled = completedRows.includes(rowIndex + 1);
            return (
              <View 
                key={colIndex} 
                style={[styles.cell, isFilled && styles.filledCell]}
              >
                <Text style={styles.cellText}>{isFilled ? val : ''}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: { padding: 10, backgroundColor: '#f3f4f6' },
  row: { flexDirection: 'row' },
  cell: { 
    width: CELL_SIZE, 
    height: CELL_SIZE, 
    borderWidth: 0.5, 
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filledCell: { backgroundColor: '#10b981' },
  cellText: { fontSize: 10 }
});