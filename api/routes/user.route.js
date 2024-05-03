import express from 'express';
<<<<<<< HEAD
import { deleteUser, test, updateUser, getUser, getUserListings} from '../controllers/user.controller.js';
=======
import { deleteUser, updateUser, getUserListings, getUser} from '../controllers/user.controller.js';
>>>>>>> 4ec96319af23ae75959ff93ea90b836c78db4bd5
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();


router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)
router.get('/listings/:id', verifyToken, getUserListings)
export default router;