const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password",
  },
});

exports.sendInquiryEmail = functions.firestore
    .document("inquiries/{inquiryId}")
    .onCreate((snap, context) => {
      const inquiry = snap.data();
      const mailOptions = {
        from: "your-email@gmail.com",
        to: "admin@example.com",
        subject: "New Inquiry",
        text: `User ${inquiry.userId} asked: ${inquiry.message}`,
      };
      return transporter.sendMail(mailOptions);
    });
exports.bookingConfirmation = functions.firestore
    .document("bookings/{bookingId}")
    .onCreate((snap, context) => {
      const booking = snap.data();
      const mailOptions = {
        from: "your-email@gmail.com",
        to: booking.userEmail,
        subject: "Booking Confirmation",
        text: `Your booking for property ${booking.propertyId} is confirmed!`,
      };
      return transporter.sendMail(mailOptions);
    });
