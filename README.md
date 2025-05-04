# React-Native

# 📝 Task Manager App (React Native)

A simple and efficient mobile application built with **React Native** that allows users to manage their daily tasks — add, view, and delete tasks — with a clean and user-friendly interface.

---

## 📸 Screenshots

![WhatsApp Image 2025-05-04 at 21 19 38_e38e497b](https://github.com/user-attachments/assets/ba11cf5c-1616-43eb-b797-6d2f392aaeda)
![WhatsApp Image 2025-05-04 at 21 19 38_4c52fd90](https://github.com/user-attachments/assets/140cbe65-4495-4f9d-9897-4a2794cf4e7d)
![WhatsApp Image 2025-05-04 at 21 19 39_3150a2c4](https://github.com/user-attachments/assets/05911e6b-adbc-4e4c-9bcb-5dd203c30945)
![WhatsApp Image 2025-05-04 at 21 19 39_31b38b71](https://github.com/user-attachments/assets/96f69000-a6a3-4a08-8430-bba9284523de)
![WhatsApp Image 2025-05-04 at 21 19 40_b4bb6a43](https://github.com/user-attachments/assets/4eb2e8ae-9541-4111-9ba4-dc14b0401cc6)
![delete](https://github.com/user-attachments/assets/ee36bd04-d758-4df9-b62f-bdce8d8a3ec8)


*Add a task, delete a task, manage your day in a few taps!*

*(Include screenshots here if you have them)*

---

## 🚀 Features

* ✅ Add new tasks with a single tap
* 🗑️ Delete tasks by pressing the delete button
* 📋 Task list displayed in real-time using `FlatList`
* ✨ Smooth and clean UI using `StyleSheet`
* 🔧 Easily extendable for marking tasks as done or persistent storage using `AsyncStorage`

---

## 🧠 Technologies Used

* [React Native](https://reactnative.dev/)
* JavaScript (ES6+)
* `useState` & React Hooks
* Flexbox for layout
* Optional: AsyncStorage for local data storage

---

## 📦 Installation & Running the App

### Prerequisites:

* Node.js and npm
* Expo CLI or React Native CLI
* Android Studio / Xcode (or Expo Go App)

### Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
```

### Install Dependencies

```bash
npm install
```

### Run the App

Using Expo:

```bash
npx expo start
```

Using React Native CLI:

```bash
npx react-native run-android
# or
npx react-native run-ios
```

---

## 📁 Project Structure

```
TaskManagerApp/
├── App.js                   # Main app logic
├── components/
│   └── CustomButton.js      # Reusable button component (optional)
├── assets/                  # (Optional) icons/images
├── utils/                   # (Optional) storage utils
├── package.json
└── README.md
```

---

## 🧾 Key Concepts Explained

* **useState**: Used to manage the state of tasks and input
* **TextInput**: Allows users to type their task
* **FlatList**: Renders the task list efficiently
* **TouchableOpacity**: Used for interactive buttons like Add and Delete
* **trim()**: Removes extra spaces to avoid blank task entries

---

## ✍️ Usage Guide

1. **Add a Task**
   Type your task in the input field and press “+ Add Task”.

2. **Delete a Task**
   Tap the “Delete” button next to any task to remove it.

3. **Optional Enhancements**

   * Use AsyncStorage to persist tasks
   * Add checkboxes to mark as completed
   * Include due dates or notifications

---

## 🧪 Sample Task Object

```js
{
  id: '1714828282000',
  title: 'Study React Native'
}
```

---

## ✅ Best Practices Followed

* Clean component separation
* Reusable button (CustomButton)
* Avoids empty inputs using `trim()`
* FlatList for performance
* Responsive design with Flexbox

---

## 🙌 Contribution

Feel free to fork, modify, and submit pull requests! This app is a great base for learning or expanding into a full-featured productivity app.

---

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Would you like me to generate this README as a downloadable `.md` file or include badges and preview images too?
