import React from "react";
import { AnimatedDrawerSceneWrapper } from "expo-drawer";

import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const About = () => {
  return (
    <AnimatedDrawerSceneWrapper headerTitle={"About"}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://www.younisrahman.com/assets/company.202fd302.png",
            }}
            style={styles.logo}
          />
          <Text style={styles.title}>About Us</Text>
        </View>

        <Text style={styles.subtitle}>Who We Are</Text>
        <Text style={styles.description}>
          We are a team of passionate developers, designers, and thinkers
          dedicated to delivering the best digital experiences. Our mission is
          to create apps that not only solve problems but also delight users
          with intuitive design and seamless performance.
        </Text>

        <Text style={styles.subtitle}>Our Mission</Text>
        <Text style={styles.description}>
          Empowering businesses and individuals by crafting innovative solutions
          that inspire and make a difference in everyday lives.
        </Text>

        <View style={styles.team}>
          <Text style={styles.subtitle}>Meet Our Team</Text>
          <View style={styles.teamRow}>
            <View style={styles.teamMember}>
              <Image
                source={{ uri: "https://yourteamphoto.com/member1.png" }}
                style={styles.memberPhoto}
              />
              <Text style={styles.memberName}>Jane Doe</Text>
            </View>
            <View style={styles.teamMember}>
              <Image
                source={{ uri: "https://yourteamphoto.com/member2.png" }}
                style={styles.memberPhoto}
              />
              <Text style={styles.memberName}>John Smith</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </AnimatedDrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F9FAFB",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#555",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    textAlign: "justify",
  },
  team: {
    marginTop: 30,
  },
  teamRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  teamMember: {
    alignItems: "center",
  },
  memberPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  memberName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#444",
  },
});

export default About;
