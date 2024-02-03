
        // Replace with your Firebase config
        const firebaseConfig = {
    apiKey: "AIzaSyAP5iPq_1dvbPQVkvmoVXcps6LhEX5rWQ4",
    authDomain: "feedback-52db5.firebaseapp.com",
    databaseURL: "https://feedback-52db5-default-rtdb.firebaseio.com",
    projectId: "feedback-52db5",
    storageBucket: "feedback-52db5.appspot.com",
    messagingSenderId: "871103731307",
    appId: "1:871103731307:web:866dc43df2e54acb95832e",
    measurementId: "G-35Y8ZLQXZG"
};

        // Initialize Firebase
        const app = firebase.initializeApp(firebaseConfig);
        const storage = firebase.storage(app);

        function uploadImage() {
            const fileInput = document.getElementById('imageInput');
            const categoryInput = document.getElementById('categoryInput');
            const file = fileInput.files[0];

            if (file && categoryInput.value) {
                const storageRef = storage.ref();
                const imageName = file.name;
                const imageRef = storageRef.child(imageName);

                imageRef.put(file).then((snapshot) => {
                    console.log('Image uploaded successfully!');
                    // You can retrieve the download URL if needed
                    snapshot.ref.getDownloadURL().then((downloadURL) => {
                        console.log('File available at', downloadURL);

                        // Display the card with the uploaded image and category
                        const imageContainer = document.getElementById('imageContainer');
                        const uploadedImage = document.getElementById('uploadedImage');
                        const categoryDisplay = document.getElementById('categoryDisplay');

                        uploadedImage.src = downloadURL;
                        categoryDisplay.textContent = categoryInput.value;
                        imageContainer.style.display = 'block';
                    });
                }).catch((error) => {
                    console.error('Error uploading image:', error);
                });
            } else {
                console.error('No file selected or category input is empty');
            }
        }

        function removeImage() {
            // Remove the displayed card and hide the container
            const imageContainer = document.getElementById('imageContainer');
            const uploadedImage = document.getElementById('uploadedImage');
            const categoryDisplay = document.getElementById('categoryDisplay');

            uploadedImage.src = '';
            categoryDisplay.textContent = '';
            imageContainer.style.display = 'none';
        }
 