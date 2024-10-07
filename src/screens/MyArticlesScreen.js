import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function MyArticlesScreen() {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
     
    };

    fetchArticles();
  }, []);

  const handleAddArticle = () => {
  };

  const handleArticleClick = (article) => {
  };

  const deleteArticle = async () => {
    
  };

  const editArticle = () => {
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>{"Back"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAddArticle} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Article</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#f59e0b" />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {articles.length === 0 ? (
            <Text style={styles.noArticlesText}>No articles added yet.</Text>
          ) : (
            articles.map((article, index) => (
              <View key={index} style={styles.articleCard} testID="articleCard">
                <TouchableOpacity testID="handleArticleBtn">
                  
                  <Text style={styles.articleTitle}>{article.title}</Text>
                  <Text style={styles.articleDescription} testID="articleDescp">
                  
                  </Text>
                </TouchableOpacity>

                {/* Edit and Delete Buttons */}
                <View style={styles.actionButtonsContainer} testID="editDeleteButtons">
                  
                 
                </View>
              </View>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(4),
    backgroundColor: "#F9FAFB",
  },
  backButton: {
    marginBottom: hp(1.5),
  },
  backButtonText: {
    fontSize: hp(2.2),
    color: "#4F75FF",
  },
  addButton: {
    backgroundColor: "#4F75FF",
    padding: wp(.7),
    alignItems: "center",
    borderRadius: 5,
    width:300,
   marginLeft:500
    // marginBottom: hp(2),
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: hp(2.2),
  },
  scrollContainer: {
    paddingBottom: hp(2),
    height:'auto',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  noArticlesText: {
    textAlign: "center",
    fontSize: hp(2),
    color: "#6B7280",
    marginTop: hp(5),
  },
  articleCard: {
    width: 400, // Make article card width more compact
    height: 300, // Adjust the height of the card to fit content
    backgroundColor: "#fff",
    padding: wp(3),
    borderRadius: 8,
    marginBottom: hp(2),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // for Android shadow
  },
  articleImage: {
    width: 300, // Set width for article image
    height: 150, // Adjust height of the image
    borderRadius: 8,
    marginBottom: hp(1),
  },
  articleTitle: {
    fontSize: hp(2),
    fontWeight: "600",
    color: "#111827",
    marginBottom: hp(0.5),
  },
  articleDescription: {
    fontSize: hp(1.8),
    color: "#6B7280",
    marginBottom: hp(1.5),
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(1),
  },
  editButton: {
    backgroundColor: "#34D399",
    padding: wp(.5),
    borderRadius: 5,
    width: 100, // Adjust width of buttons to be more compact
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: hp(1.8),
  },
  deleteButton: {
    backgroundColor: "#EF4444",
    padding: wp(.5),
    borderRadius: 5,
    width: 100, // Adjust width of buttons to be more compact
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: hp(1.8),
  },
});
