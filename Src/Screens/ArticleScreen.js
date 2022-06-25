import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { filter } from "lodash";
import { Searchbar, IconButton, Menu, Divider } from "react-native-paper";
import ArticleCard from "../Components/ArticleCard";
import { theme } from "../Core/theme";

const Articles = [
  {
    id: "A001",
    articleName: "React Native",
    author: "Anne Perera",
    date: "31st January 2020",
  },
  {
    id: "A002",
    articleName: "Learn Mobile Development",
    author: "John Doe",
    date: "2nd March 2020",
  },
  {
    id: "A003",
    articleName: "What is axios",
    author: "John Doe",
    date: "3rd dcember 2020",
  }
];

export default function ArticleScreen({ navigation }) {
  const [data, setData] = useState();
  //const [image, setImage] = useState()
  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const onChangeSearch = (searchQuery) => {
    if (searchQuery) {
      const formatedData = searchQuery.toLowerCase();
      const filterData = filter(data, (Articles) => {
        return contains(Articles, formatedData);
      });
      setData(filterData);
      setSearchQuery(formatedData);
    } else {
      setData(data);
    }
  };

  const contains = ({ articleName, author }, searchQuery) => {
    if (
      articleName.toLowerCase().includes(searchQuery) ||
      author.toLowerCase().includes(searchQuery)
    ) {
      return true;
    }
    return false;
  };

  return (
    <SafeAreaView style={{ padding: 5, backgroundColor: theme.colors.white }}>
      <View style={styles.searchBarContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={(searchQuery) => onChangeSearch(searchQuery)}
          autoCapitalize="none"
          style={styles.searchBar}
        />
      </View>
      <FlatList
        data={Articles}
        contentContainerStyle={{ paddingBottom: 60 }}
        style={{
          shadowColor: theme.colors.medium,
          shadowOpacity: 0.7,
          shadowOffset: { height: 5, width: 0 },
        }}
        renderItem={({ item }) => (
          <ArticleCard
            articleName={item.articleName}
            author={item.author}
            date={item.date}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },
  searchBar: {
    flex: 1,
    marginVertical: 10,
    height: 45,
    fontSize: 18,
  },
  filterIcon: {
    borderWidth: 2,
    borderRadius: 2,
    height: 47,
    width: 47,
    marginVertical: 10,
    borderColor: theme.colors.border,
    borderRadius: 4,
    backgroundColor: theme.colors.white,
    marginLeft: 5,
    marginRight: 0,
    elevation: 5,
  },
});
