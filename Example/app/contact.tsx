import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";

import { AnimatedDrawerSceneWrapper } from "expo-drawer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    Alert.alert("Thank You!", "Your message has been sent successfully.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <AnimatedDrawerSceneWrapper headerTitle={"Contact"}>
      <View style={styles.container}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>
          We'd love to hear from you! Feel free to reach out with any questions
          or feedback.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>

        <View style={styles.contactMethods}>
          <Text style={styles.subtitle}>Or Contact Us Directly:</Text>
          <TouchableOpacity onPress={() => Linking.openURL("tel:+1234567890")}>
            <Text style={styles.contactLink}>Call Us: +1 234 567 890</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("mailto:info@example.com")}
          >
            <Text style={styles.contactLink}>Email: info@example.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AnimatedDrawerSceneWrapper>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9FAFB",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#FFF",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  contactMethods: {
    marginTop: 20,
    alignItems: "center",
  },
  contactLink: {
    fontSize: 16,
    color: "#007BFF",
    marginVertical: 5,
  },
});
