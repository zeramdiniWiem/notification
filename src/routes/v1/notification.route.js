const express = require('express');
const notificationController = require('../../controllers/notification.controller');

const router = express.Router();

// Route pour créer une notification
router.post('/', notificationController.createNotification);

// Route pour obtenir toutes les notifications
router.get('/', notificationController.getNotifications);

// Route pour obtenir une notification par ID
router.get('/:notificationId', notificationController.getNotification);

// Route pour mettre à jour une notification par ID
router.patch('/:notificationId', notificationController.updateNotification);

// Route pour supprimer une notification par ID
router.delete('/:notificationId', notificationController.deleteNotification);

module.exports = router;
