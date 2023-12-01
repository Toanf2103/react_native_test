import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity ,Alert} from "react-native";

export default function CategoryListItem(props) {
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={()=>{
        Alert.alert('Click cc!');
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>Nhìn gì mà nhìn</Text>
        <Image
          style={styles.categoryImage}
          source={{
            uri: "https://www.kkday.com/vi/blog/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg",
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    shadowColor: "#000",
    boderRadius: 4,
    backgroundColor: "#fff",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { witdth: 0, height: 0 },
    marginBottom: 16,
  },
  categoryImage: { width: 100, height: 100 },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: 700,
  },
});
