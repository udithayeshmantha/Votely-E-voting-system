const admin = require('firebase-admin');
const { auth } = require('firebase-admin');

exports.register = async (req, res) => {
  try {
    const { email, password, voterIdNo } = req.body;
    
    // Create user in Firebase
    const userRecord = await auth().createUser({
      email,
      password,
    });

    // Store additional user data in your database
    await admin.firestore().collection('users').doc(userRecord.uid).set({
      voterIdNo,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email } = req.body;
    
    // Verify the user exists
    const userRecord = await auth().getUserByEmail(email);
    
    // You can add additional verification here
    
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, voterIdNo } = req.body;

    // Verify voter ID
    const userSnapshot = await admin.firestore()
      .collection('users')
      .where('email', '==', email)
      .where('voterIdNo', '==', voterIdNo)
      .get();

    if (userSnapshot.empty) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate password reset link
    const link = await auth().generatePasswordResetLink(email);
    
    res.status(200).json({ resetLink: link });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};